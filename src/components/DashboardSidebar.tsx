import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Gamepad2,
  Trophy,
  Settings,
  LogOut,
  Images
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface DashboardSidebarProps {
  className?: string;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function DashboardSidebar({ className, activeSection, onSectionChange }: DashboardSidebarProps) {
  const { t } = useTranslation();
  const menuItems = [
    {
      id: "studio",
      label: t("dashboard.menuItems.studio"),
      icon: Gamepad2
    },
    {
      id: "gallery",
      label: t("dashboard.menuItems.gallery"),
      icon: Images
    },
    {
      id: "rewards",
      label: t("dashboard.menuItems.rewards"),
      icon: Trophy
    },
    {
      id: "settings",
      label: t("dashboard.menuItems.settings"),
      icon: Settings
    }
  ];

  const handleLogout = async () => {
    // TODO: Implement logout logic
    window.location.href = "/";
  };

  return (
    <div className={cn("flex h-full flex-col bg-sidebar text-sidebar-foreground", className)}>
      <div className="bg-sidebar-accent p-6">
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src="/logo.svg" alt={t("dashboard.logoAlt")} className="h-8 w-8" />
              <span className="font-semibold text-sm">Next Metal</span>
            </Link>
          </div>
          <span className="text-xs text-muted-foreground self-end pr-0.5">
            {t("dashboard.title")}
          </span>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <Button
                key={item.id}
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 h-12",
                  isActive && "bg-primary text-primary-foreground"
                )}
                onClick={() => onSectionChange(item.id)}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Button>
            );
          })}
        </div>
      </nav>

      <div className="border-t border-border p-4">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 h-12 text-muted-foreground hover:text-foreground"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5" />
          {t("dashboard.logout")}
        </Button>
      </div>
    </div>
  );
}
