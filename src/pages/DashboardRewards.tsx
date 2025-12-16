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
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              {user && (
                <Step1LinkAccount
                  userId={user.id}
                  onComplete={() => {
                    console.log("League account linked successfully");
                  }}
                />
              )}
          </div>
        </TabsContent>

        <TabsContent value="earnings">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">0</div>
              <div className="text-sm text-green-700 dark:text-green-300">$METAL</div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">0</div>
              <div className="text-sm text-blue-700 dark:text-blue-300">This Month</div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">0</div>
              <div className="text-sm text-purple-700 dark:text-purple-300">Sessions</div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="achievements">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <Gamepad2 className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                <div>
                  <div className="font-medium text-orange-900 dark:text-orange-100">First Recording</div>
                  <div className="text-sm text-orange-700 dark:text-orange-300">Record your first game</div>
                </div>
                <Badge variant="outline" className="ml-auto border-orange-300 text-orange-700 dark:border-orange-600 dark:text-orange-300">Locked</Badge>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <Trophy className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                <div>
                  <div className="font-medium text-yellow-900 dark:text-yellow-100">Champion</div>
                  <div className="text-sm text-yellow-700 dark:text-yellow-300">Earn 100 $METAL</div>
                </div>
                <Badge variant="outline" className="ml-auto border-yellow-300 text-yellow-700 dark:border-yellow-600 dark:text-yellow-300">Locked</Badge>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
