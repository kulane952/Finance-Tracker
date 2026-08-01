import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Receipt,
  Wallet,
  Target,
  BarChart3,
  User,
} from "lucide-react";

const menu = [
  {
    name: "Overview",
    path: "/dashboard",
    icon: LayoutDashboard,
  },

  // {
  //   name: "Transactions",
  //   path: "/dashboard/transactions",
  //   icon: Receipt,
  // },

  {
    name: "Budgets",
    path: "/dashboard/budgets",
    icon: Wallet,
  },

  {
    name: "Goals",
    path: "/dashboard/goals",
    icon: Target,
  },

  {
    name: "Insights",
    path: "/dashboard/insights",
    icon: BarChart3,
  },

  {
    name: "Profile",
    path: "/dashboard/profile",
    icon: User,
  },
];

export default function Sidebar({ open }) {
  return (
    <aside
      className={`
      border-r
      bg-background
      transition-all
      duration-300
      overflow-hidden
      ${open ? "w-64 p-5" : "w-0 p-0"}
      `}
    >
      {open && (
        <>
          <h1 className="text-2xl font-bold mb-8">
            💰 FinTrack
          </h1>

          <nav className="space-y-2">
            {menu.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    flex
                    items-center
                    gap-3
                    p-3
                    rounded-lg
                    transition-colors

                    ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }
                    `
                  }
                >
                  <Icon className="h-5 w-5" />

                  <span>
                    {item.name}
                  </span>
                </NavLink>
              );
            })}
          </nav>
        </>
      )}
    </aside>
  );
}