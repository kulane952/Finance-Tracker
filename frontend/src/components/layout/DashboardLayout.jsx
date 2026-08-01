import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import api from "@/lib/api";
import useAuthStore from "@/store/authStore";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const setUser = useAuthStore(
    (state) => state.setUser
  );

  useEffect(() => {
    async function getProfile() {
      try {
        const token =
          localStorage.getItem("token");

        if (!token) return;

        const res =
          await api.get("/profile/me");

        setUser(res.data.user);
      } catch (error) {
        console.log(
          "Profile Error:",
          error
        );
      }
    }

    getProfile();
  }, [setUser]);

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} />

      <div className="flex-1">
        <Navbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}