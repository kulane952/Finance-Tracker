import {
  LayoutDashboard,
  Users,
  Receipt,
  BarChart3,
  Settings,
  LogOut,
  ShieldCheck,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

import useAuthStore from "@/store/authStore";

const menu = [
//   {
//     name: "Dashboard",
//     path: "/admin",
//     icon: LayoutDashboard,
//   },
  {
    name: "Users",
    path: "/admin/users",
    icon: Users,
  },
  {
    name: "Transactions",
    path: "/admin/transactions",
    icon: Receipt,
  },
  {
    name: "Analytics",
    path: "/admin/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  const navigate = useNavigate();

  const logout = useAuthStore(
    (state) => state.logout
  );

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <aside
      className="
      w-72
      min-h-screen
      border-r
      bg-card
      flex
      flex-col
      "
    >
      {/* Logo */}

      <div
        className="
        p-6
        border-b
        "
      >
        <div
          className="
          flex
          items-center
          gap-3
          "
        >
          <div
            className="
            h-12
            w-12
            rounded-xl
            bg-primary
            flex
            items-center
            justify-center
            "
          >
            <ShieldCheck
              className="
              text-primary-foreground
              "
            />
          </div>

          <div>
            <h2 className="font-bold text-xl">
              FinTrack
            </h2>

            <p
              className="
              text-xs
              text-muted-foreground
              "
            >
              Admin Panel
            </p>
          </div>
        </div>
      </div>

      {/* Menu */}

      <nav
        className="
        flex-1
        p-4
        space-y-2
        "
      >
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/admin"}
              className={({ isActive }) =>
                `
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                transition-all
                ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }
                `
              }
            >
              <Icon size={20} />

              <span>
                {item.name}
              </span>
            </NavLink>
          );
        })}
      </nav>

      {/* Logout */}

      <div
        className="
        p-4
        border-t
        "
      >
        <button
          onClick={handleLogout}
          className="
          w-full
          flex
          items-center
          gap-3
          px-4
          py-3
          rounded-xl
          text-red-500
          hover:bg-red-50
          "
        >
          <LogOut size={20} />

          Logout
        </button>
      </div>
    </aside>
  );
}