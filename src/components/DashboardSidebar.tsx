import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Gamepad2,
  Trophy,
  Settings,
  LogOut,
  User,
  Images
} from "lucide-react";

interface DashboardSidebarProps {
  className?: string;
}

const menuItems = [
  {
    id: "studio",
    label: "Studio",
    icon: Gamepad2,
    path: "/dashboard/studio"
  },
  {
    id: "gallery",
    label: "Gallery",
    icon: Images,
    path: "/dashboard/gallery"
  },
  {
    id: "rewards",
    label: "Rewards",
    icon: Trophy,
    path: "/dashboard/rewards"
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    path: "/dashboard/settings"
  }
];

export function DashboardSidebar({ className }: DashboardSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    // TODO: Implement logout logic
    navigate("/");
  };

  return (
    <div className={cn("flex flex-col h-full bg-card border-r", className)}>
      <div className="p-6 border-b">
        <div className="flex items-center gap-2">
          <User className="h-8 w-8 text-primary" />
          <div>
            <h3 className="font-semibold">Dashboard</h3>
            <p className="text-xs text-muted-foreground">Game Recording Studio</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Button
                key={item.id}
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 h-12",
                  isActive && "bg-primary text-primary-foreground"
                )}
                onClick={() => navigate(item.path)}
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
