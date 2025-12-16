import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Trophy, Coins, Star, Gamepad2 } from "lucide-react";
import { Step1LinkAccount } from "@/components/Step1LinkAccount";
import { useAccount } from 'wagmi';

export default function DashboardRewards() {
  const [user, setUser] = useState<any>(null);
  const { isConnected } = useAccount();

  // Mock user data - in real app this would come from auth context
  useEffect(() => {
    // Simulate getting user data
    setUser({ id: "user123", email: "user@example.com" });
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Rewards</h1>

      <Tabs defaultValue="league">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="league">League</TabsTrigger>
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="league">
          <Card>
            <CardContent className="p-4">
              {user && (
                <Step1LinkAccount
                  userId={user.id}
                  onComplete={() => {
                    console.log("League account linked successfully");
                  }}
                />
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="earnings">
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold">0</div>
                <div className="text-sm text-muted-foreground">$METAL</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold">0</div>
                <div className="text-sm text-muted-foreground">This Month</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold">0</div>
                <div className="text-sm text-muted-foreground">Sessions</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="achievements">
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Gamepad2 className="h-6 w-6" />
                  <div>
                    <div className="font-medium">First Recording</div>
                    <div className="text-sm text-muted-foreground">Record your first game</div>
                  </div>
                  <Badge variant="outline" className="ml-auto">Locked</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Trophy className="h-6 w-6" />
                  <div>
                    <div className="font-medium">Champion</div>
                    <div className="text-sm text-muted-foreground">Earn 100 $METAL</div>
                  </div>
                  <Badge variant="outline" className="ml-auto">Locked</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
