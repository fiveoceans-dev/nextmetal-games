import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Shield, Trash2, Save, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

export default function DashboardSettings() {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: ""
  });
  const { toast } = useToast();
  const { t } = useTranslation();

  // Mock user data - in real app this would come from auth context
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockUser = {
        id: "user123",
        username: "gamer123",
        email: "gamer@example.com",
        createdAt: "2024-01-15",
        verified: true
      };
      setUser(mockUser);
      setFormData({
        username: mockUser.username,
        email: mockUser.email
      });
    }, 500);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveProfile = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Update user data
      setUser(prev => ({
        ...prev,
        username: formData.username,
        email: formData.email
      }));

      toast({
        title: t("settings.toast.profileUpdated.title"),
        description: t("settings.toast.profileUpdated.description"),
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: t("settings.toast.error.title"),
        description: t("settings.toast.error.description"),
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      // Simulate account deletion
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: t("settings.toast.deleted.title"),
        description: t("settings.toast.deleted.description"),
      });

      // Redirect to home or logout
      window.location.href = "/";
    } catch (error) {
      toast({
        variant: "destructive",
        title: t("settings.toast.deleteError.title"),
        description: t("settings.toast.deleteError.description"),
      });
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{t("settings.title")}</h1>

      <div className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>{t("settings.fields.username")}</Label>
                <Input
                  value={formData.username}
                  onChange={(e) => handleInputChange("username", e.target.value)}
                />
              </div>
              <div>
                <Label>{t("settings.fields.email")}</Label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
            </div>

            <Button onClick={handleSaveProfile} disabled={isLoading} className="w-32">
              {isLoading ? t("settings.saving") : t("settings.save")}
            </Button>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-green-900 dark:text-green-100">{t("settings.twoFactor")}</span>
            <Button variant="outline" size="sm" className="w-24 border-green-300 text-green-700 dark:border-green-600 dark:text-green-300">{t("settings.enable")}</Button>
          </div>

            <div className="flex justify-between items-center">
              <span className="text-green-900 dark:text-green-100">{t("settings.changePassword")}</span>
              <Button variant="outline" size="sm" className="w-24 border-green-300 text-green-700 dark:border-green-600 dark:text-green-300">{t("settings.change")}</Button>
            </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-red-900 dark:text-red-100">{t("settings.deleteAccount")}</span>
            <Button variant="destructive" size="sm" className="w-24" onClick={handleDeleteAccount}>
              {t("settings.delete")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
