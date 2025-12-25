import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, Info, Loader2, CheckCircle2, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import badgeIcon from "@/assets/badge-icon.png";
import { useAccount, useSendTransaction, useWaitForTransactionReceipt, useChainId, useSwitchChain } from "wagmi";
import { supabase } from "@/integrations/supabase/client";
import { parseEther, encodeFunctionData, keccak256, toHex } from "viem";
import { monadTestnet } from "@/lib/wagmi-config";
import { useTranslation } from "react-i18next";

interface Step3Props {
  canProceed: boolean;
  userId: string;
}

export function Step3SaveToBlockchain({ canProceed, userId }: Step3Props) {
  const [storeAchievements, setStoreAchievements] = useState(true);
  const [mintNFT, setMintNFT] = useState(true);
  const [generateZK, setGenerateZK] = useState(false);
  const [success, setSuccess] = useState(false);
  const [transactionHash, setTransactionHash] = useState<string>("");
  const [accountInfo, setAccountInfo] = useState<{ gameName: string; tagLine: string; rank: string } | null>(null);
  const [attempted, setAttempted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { toast } = useToast();
  const { t } = useTranslation();

  // Check if Supabase is available
  if (!supabase) {
    return (
      <div className="text-center py-8">
        <Shield className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
        <h3 className="text-lg font-medium mb-2">{t("steps.saveBlockchain.unavailableTitle")}</h3>
        <p className="text-muted-foreground">
          {t("steps.saveBlockchain.unavailableDescription")}
        </p>
      </div>
    );
  }
  const { address } = useAccount();
  const chainId = useChainId();
  const { switchChainAsync, isPending: isSwitching } = useSwitchChain();
  const { data: hash, isPending, sendTransaction } = useSendTransaction();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  // Update transaction hash and success state when transaction is confirmed
  useEffect(() => {
    if (isConfirmed && hash && accountInfo) {
      console.log('✅ Transaction confirmed on Monad testnet:', hash);
      
      // Save transaction to database
      const saveTransaction = async () => {
        try {
          const { error } = await supabase.from("transactions").insert({
            user_id: userId,
            transaction_hash: hash,
            game_name: accountInfo.gameName,
            tag_line: accountInfo.tagLine,
            rank_tier: accountInfo.rank.split(' ')[0],
            rank_division: accountInfo.rank.split(' ')[1] || '',
            credentials_data: {
              gameName: accountInfo.gameName,
              tagLine: accountInfo.tagLine,
              rank: accountInfo.rank,
            }
          });

          if (error) {
            console.error('Failed to save transaction:', error);
          } else {
            console.log('✅ Transaction saved to database');
          }
        } catch (err) {
          console.error('Error saving transaction:', err);
        }
      };

      saveTransaction();
      setTransactionHash(hash);
      setSuccess(true);
      toast({
        title: t("steps.saveBlockchain.toast.success.title"),
        description: t("steps.saveBlockchain.toast.success.description"),
      });
    }
  }, [isConfirmed, hash, toast, userId, accountInfo, t]);

  // Log transaction status changes
  useEffect(() => {
    if (hash) {
      console.log('📝 Transaction hash received:', hash);
      console.log('⏳ Waiting for confirmation...');
    }
  }, [hash]);

  useEffect(() => {
    if (isConfirming) {
      console.log('⏳ Transaction is being confirmed...');
    }
  }, [isConfirming]);

  // Fetch account info on mount
  useEffect(() => {
    if (!userId || !canProceed) return;

    const fetchAccountInfo = async () => {
      try {
        const { data: linkedAccounts, error } = await supabase
          .from("linked_accounts")
          .select("*")
          .eq("user_id", userId)
          .eq("verified", true);

        if (error) {
          console.error('Error fetching account info:', error);
          return;
        }

        if (linkedAccounts && linkedAccounts.length > 0) {
          const firstAccount = linkedAccounts[0];
          setAccountInfo({
            gameName: firstAccount.game_name || '',
            tagLine: firstAccount.tag_line || '',
            rank: `${firstAccount.rank_tier} ${firstAccount.rank_division}`,
          });
        }
      } catch (err) {
        console.error('Error fetching account info:', err);
      }
    };

    fetchAccountInfo();
  }, [userId, canProceed]);

  const handleSaveToBlockchain = async () => {
    if (!address) {
      toast({
        variant: "destructive",
        title: t("steps.saveBlockchain.toast.missingWallet.title"),
        description: t("steps.saveBlockchain.toast.missingWallet.description"),
      });
      return;
    }

    setAttempted(true);
    setErrorMsg(null);

    // Ensure wallet is on Monad Testnet (force-check by requesting a switch)
    try {
      const before = (window as any)?.ethereum?.chainId;
      console.log('🔁 Ensuring Monad chain. App chainId:', chainId, 'Wallet chainId:', before, 'Target:', monadTestnet.id);
      await switchChainAsync({ chainId: monadTestnet.id });
      // Give wallet/provider a brief moment to settle
      await new Promise((r) => setTimeout(r, 400));
      const after = (window as any)?.ethereum?.chainId;
      console.log('✅ Chain ready. Wallet chainId after switch:', after);
    } catch (e: any) {
      console.error('❌ Could not switch to Monad Testnet:', e);
      setErrorMsg(t("steps.saveBlockchain.errors.switchNetwork", { network: monadTestnet.name, id: monadTestnet.id }));
      toast({
        variant: 'destructive',
        title: t("steps.saveBlockchain.toast.switchRequired.title"),
        description: e?.message || t("steps.saveBlockchain.toast.switchRequired.description", { network: monadTestnet.name }),
      });
      setAttempted(false);
      return;
    }

    try {
      // Fetch user's verified linked accounts
      const { data: linkedAccounts, error } = await supabase
        .from("linked_accounts")
        .select("*")
        .eq("user_id", userId)
        .eq("verified", true);

      if (error) throw error;
      if (!linkedAccounts || linkedAccounts.length === 0) {
        throw new Error(t("steps.saveBlockchain.errors.noVerifiedAccount"));
      }

      const firstAccount = linkedAccounts[0];
      const accountRank = `${firstAccount.rank_tier} ${firstAccount.rank_division}`;
      
      // Store account info for display and database save
      setAccountInfo({
        gameName: firstAccount.game_name || '',
        tagLine: firstAccount.tag_line || '',
        rank: accountRank,
      });

      // Create a hash of the credentials data
      const credentialsData = {
        accounts: linkedAccounts.map(acc => ({
          gameName: acc.game_name,
          tagLine: acc.tag_line,
          region: acc.region,
          rank: `${acc.rank_tier} ${acc.rank_division}`,
        })),
        timestamp: Date.now(),
        walletAddress: address,
      };

      // Hash the credentials
      const dataString = JSON.stringify(credentialsData);
      const dataHash = keccak256(toHex(dataString));

      console.log('🚀 Preparing transaction to Monad testnet:', {
        chainId: monadTestnet.id,
        chainName: monadTestnet.name,
        to: address,
        credentialsHash: dataHash,
        accounts: linkedAccounts.length,
        accountInfo: accountRank
      });

      console.log('📤 Calling sendTransaction - this should open your wallet...');
      
      // Send real transaction to Monad testnet with credentials hash in data field
      const result = sendTransaction(
        {
          to: address, // Send to self to store data on-chain
          value: parseEther('0'), // No value transfer, just data storage
          data: dataHash, // Store credentials hash in transaction data
        },
        {
          onSuccess: (hash) => {
            console.log('✅ Transaction sent successfully, hash:', hash);
          },
          onError: (error) => {
            console.error('❌ Transaction failed:', error);
            setErrorMsg(error.message || 'Transaction failed');
            toast({
              variant: 'destructive',
              title: t("steps.saveBlockchain.toast.transactionFailed.title"),
              description: error.message || t("steps.saveBlockchain.toast.transactionFailed.description"),
            });
          },
        }
      );

      console.log('📝 sendTransaction result:', result);

      toast({
        title: t("steps.saveBlockchain.toast.checkWallet.title"),
        description: t("steps.saveBlockchain.toast.checkWallet.description"),
      });

    } catch (error: any) {
      console.error('❌ Error preparing transaction:', error);
      setErrorMsg(error?.message || t("steps.saveBlockchain.errors.saveFailed"));
      toast({
        variant: "destructive",
        title: t("steps.saveBlockchain.toast.missingWallet.title"),
        description: error.message || t("steps.saveBlockchain.errors.saveFailed"),
      });
    }
  };

  if (!canProceed) {
    return (
      <div className="animate-fade-in">
        <Card className="glass-card border-muted opacity-50">
          <CardContent className="p-12 text-center">
            <Shield className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg font-semibold text-muted-foreground mb-2">
              {t("steps.saveBlockchain.blocked.title")}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("steps.saveBlockchain.blocked.description")}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (success) {
    const explorerUrl = `${monadTestnet.blockExplorers.default.url}/tx/${transactionHash}`;
    
    return (
      <div className="animate-fade-in">
        <Card className="glass-card border-primary/30">
          <CardContent className="p-12 text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-12 w-12 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-primary mb-2">{t("steps.saveBlockchain.success.title")}</p>
              <p className="text-muted-foreground mb-4">
                {t("steps.saveBlockchain.success.description")}
              </p>
              <div className="bg-muted/50 rounded-lg p-4 mt-4">
                <p className="text-xs text-muted-foreground mb-1">{t("steps.saveBlockchain.success.hashLabel")}</p>
                <p className="text-sm font-mono break-all">{transactionHash}</p>
              </div>
            </div>
            <div className="flex gap-2 justify-center flex-wrap">
              <Button 
                variant="outline" 
                onClick={() => {
                  navigator.clipboard.writeText(transactionHash);
                  toast({
                    title: t("steps.saveBlockchain.toast.copied.title"),
                    description: t("steps.saveBlockchain.toast.copied.description"),
                  });
                }}
              >
                {t("steps.saveBlockchain.success.copy")}
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open(explorerUrl, '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                {t("steps.saveBlockchain.success.viewExplorer")}
              </Button>
              <Button variant="outline" onClick={() => setSuccess(false)}>
                {t("steps.saveBlockchain.success.saveAnother")}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <Card className="glass-card border-primary/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            {t("steps.saveBlockchain.card.title")}
          </CardTitle>
          <CardDescription>
            {t("steps.saveBlockchain.card.description")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="bg-primary/10 border-primary/30">
            <Info className="h-4 w-4 text-primary" />
            <AlertDescription>
              {t("steps.saveBlockchain.privacyNotice")}
            </AlertDescription>
          </Alert>

          {accountInfo && (
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="text-sm font-medium mb-1">{t("steps.saveBlockchain.account.label")}</p>
              <p className="text-lg font-bold text-primary">
                {accountInfo.gameName}#{accountInfo.tagLine}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {t("steps.saveBlockchain.account.rank", { rank: accountInfo.rank })}
              </p>
            </div>
          )}

          <Alert className="bg-muted/50 border-muted">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-sm">
              {t("steps.saveBlockchain.feeNotice")}
            </AlertDescription>
          </Alert>

          {chainId !== monadTestnet.id && (
            <Alert className="bg-destructive/10 border-destructive/30">
              <Info className="h-4 w-4 text-destructive" />
              <AlertDescription className="text-sm flex items-center justify-between gap-3">
                <span>
                  {t("steps.saveBlockchain.wrongNetwork", {
                    chainId,
                    network: monadTestnet.name,
                    id: monadTestnet.id,
                  })}
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={async () => {
                    try {
                      await switchChainAsync({ chainId: monadTestnet.id });
                      toast({
                        title: t("steps.saveBlockchain.toast.switchSuccess.title"),
                        description: t("steps.saveBlockchain.toast.switchSuccess.description", { network: monadTestnet.name }),
                      });
                    } catch (e: any) {
                      toast({
                        variant: "destructive",
                        title: t("steps.saveBlockchain.toast.switchFailed.title"),
                        description: e?.message || t("steps.saveBlockchain.toast.switchFailed.description"),
                      });
                    }
                  }}
                >
                  {isSwitching ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      {t("steps.saveBlockchain.switching")}
                    </>
                  ) : (
                    t("steps.saveBlockchain.switchButton")
                  )}
                </Button>
              </AlertDescription>
            </Alert>
          )}

          <div className="flex items-center justify-center py-6">
            <div className="relative">
              <img
                src={badgeIcon}
                alt={t("steps.saveBlockchain.badgeAlt")}
                className="w-48 h-48 rounded-lg shadow-lg"
              />
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">NFT</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="font-semibold text-sm">{t("steps.saveBlockchain.options.title")}</p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                <Checkbox
                  id="achievements"
                  checked={storeAchievements}
                  onCheckedChange={(checked) => setStoreAchievements(checked as boolean)}
                />
                <label
                  htmlFor="achievements"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {t("steps.saveBlockchain.options.achievements")}
                </label>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                <Checkbox
                  id="nft"
                  checked={mintNFT}
                  onCheckedChange={(checked) => setMintNFT(checked as boolean)}
                />
                <label
                  htmlFor="nft"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {t("steps.saveBlockchain.options.nft")}
                </label>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                <Checkbox
                  id="zk"
                  checked={generateZK}
                  onCheckedChange={(checked) => setGenerateZK(checked as boolean)}
                />
                <label
                  htmlFor="zk"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {t("steps.saveBlockchain.options.zk")}
                </label>
              </div>
            </div>
          </div>

          {/* Transaction Steps */}
          <section className="space-y-3">
            <p className="font-semibold text-sm">{t("steps.saveBlockchain.transaction.title")}</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                {(attempted || isPending || hash || isConfirming || success) ? (
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                ) : (
                  <Loader2 className="h-4 w-4 text-muted-foreground" />
                )}
                {t("steps.saveBlockchain.transaction.prepare")}
              </li>
              <li className="flex items-center gap-2 text-sm">
                {isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin text-primary" />
                ) : attempted ? (
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                ) : (
                  <Loader2 className="h-4 w-4 text-muted-foreground" />
                )}
                {t("steps.saveBlockchain.transaction.confirmWallet")}
              </li>
              <li className="flex items-center gap-2 text-sm">
                {hash ? (
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                ) : (
                  <Loader2 className="h-4 w-4 text-muted-foreground" />
                )}
                {t("steps.saveBlockchain.transaction.submitted")} {hash && (
                  <button onClick={() => window.open(`${monadTestnet.blockExplorers.default.url}/tx/${hash}`, '_blank')} className="text-primary underline underline-offset-2 ml-2 flex items-center">
                    {t("steps.saveBlockchain.transaction.viewExplorer")} <ExternalLink className="h-3 w-3 ml-1" />
                  </button>
                )}
              </li>
              <li className="flex items-center gap-2 text-sm">
                {isConfirming ? (
                  <Loader2 className="h-4 w-4 animate-spin text-primary" />
                ) : hash ? (
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                ) : (
                  <Loader2 className="h-4 w-4 text-muted-foreground" />
                )}
                {t("steps.saveBlockchain.transaction.confirming")}
              </li>
              <li className="flex items-center gap-2 text-sm">
                {success ? (
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                ) : (
                  <Loader2 className="h-4 w-4 text-muted-foreground" />
                )}
                {t("steps.saveBlockchain.transaction.finalized")}
              </li>
            </ul>
            {errorMsg && (
              <div className="text-destructive text-sm bg-destructive/10 border border-destructive/30 rounded-md p-2">
                {errorMsg}
              </div>
            )}
          </section>

          <Button
            onClick={handleSaveToBlockchain}
            disabled={(isPending || isConfirming) || (!storeAchievements && !mintNFT) || (chainId !== monadTestnet.id)}
            className="w-full"
            size="lg"
          >
            {(isPending || isConfirming) ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                {isPending ? t("steps.saveBlockchain.submit.pendingWallet") : t("steps.saveBlockchain.submit.pendingMonad")}
              </>
            ) : (
              t("steps.saveBlockchain.submit.default")
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
