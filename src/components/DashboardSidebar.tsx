import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Gamepad2,
  Trophy,
  Settings,
  LogOut,
  Images
} from "lucide-react";

interface DashboardSidebarProps {
  className?: string;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  {
    id: "studio",
    label: "Studio",
    icon: Gamepad2
  },
  {
    id: "gallery",
    label: "Gallery",
    icon: Images
  },
  {
    id: "rewards",
    label: "Rewards",
    icon: Trophy
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings
  }
];

export function DashboardSidebar({ className, activeSection, onSectionChange }: DashboardSidebarProps) {

  const handleLogout = async () => {
    // TODO: Implement logout logic
    window.location.href = "/";
  };

  return (
    <div className={cn("flex flex-col h-full bg-slate-50 dark:bg-slate-900", className)}>
      <div className="p-6 bg-slate-100 dark:bg-slate-800">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="NextMetal logo" className="h-8 w-8" />
          <div>
            <h3 className="font-semibold text-sm">Next Metal</h3>
            <p className="text-xs text-muted-foreground">Dashboard</p>
          </div>
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

      <div className="p-4 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 h-12 text-muted-foreground hover:text-foreground"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5" />
          Logout
        </Button>
      </div>
    </div>
  );
}
