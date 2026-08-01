import { Bell, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import useAuthStore from "@/store/authStore";

import AddTransactionDialog from "../transactions/AddTransactionDialog";

export default function Navbar({
  sidebarOpen,
  setSidebarOpen,
}) {
  const navigate = useNavigate();

  const user = useAuthStore(
    (state) => state.user
  );

  const logout = useAuthStore(
    (state) => state.logout
  );

  return (
    <header
      className="
      h-16
      border-b
      bg-background
      flex
      items-center
      justify-between
      px-6
      "
    >
      {/* LEFT */}

      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            setSidebarOpen(!sidebarOpen)
          }
        >
          <Menu className="h-5 w-5" />
        </Button>

        <div>
          <p className="text-sm text-muted-foreground">
            Welcome back
          </p>

          <h2 className="font-bold text-xl">
            Personal Finance
          </h2>
        </div>
      </div>

      {/* RIGHT */}

      <div
        className="
        flex
        items-center
        gap-4
        "
      >
        <Button
          variant="outline"
          size="icon"
        >
          <Bell className="h-4 w-4" />
        </Button>

        <AddTransactionDialog />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar
              className="
              h-10
              w-10
              cursor-pointer
              "
            >
              <AvatarImage
                src={user?.profileImage}
                alt={user?.name}
              />

              <AvatarFallback>
                {user?.name
                  ?.charAt(0)
                  ?.toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-64"
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">
                    {user?.name || "User"}
                  </span>

                  <span className="text-xs text-muted-foreground">
                    {user?.email || "No email"}
                  </span>
                </div>
              </DropdownMenuLabel>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={() =>
                navigate("/dashboard/profile")
              }
            >
              Profile
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() =>
                navigate("/dashboard/settings")
              }
            >
              Settings
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              className="text-red-500"
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}