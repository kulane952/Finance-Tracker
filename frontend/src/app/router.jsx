import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";


// =====================
// Layout
// =====================

import DashboardLayout from "@/components/layout/DashboardLayout";
import AdminLayout from "@/components/admin/AdminLayout";



// =====================
// Auth
// =====================

import Login from "@/pages/dashboard/auth/Login";
import Register from "@/pages/dashboard/auth/Register";



// =====================
// User Pages
// =====================

import Overview from "@/pages/dashboard/Overview";
import Transactions from "@/pages/dashboard/Transactions";
import Budgets from "@/pages/dashboard/Budgets";
import Goals from "@/pages/dashboard/Goals";
import Insights from "@/pages/dashboard/Insights";
import Profile from "@/pages/dashboard/Profile";
import Settings from "@/pages/dashboard/Settings";



// =====================
// Admin Pages
// =====================

import AdminDashboard from "@/pages/dashboard/AdminDashboard";
import UsersTable from "@/components/admin/UsersTable";
import AdminTransaction from "@/components/admin/AdminTransaction";
import AdminAnalytics from "@/components/admin/AdminAnalytics";
import AdminProfile from "@/components/admin/AdminProfile";





const router = createBrowserRouter([



  // =====================
  // AUTH ROUTES
  // =====================


  {
    path:"/",
    element:<Login/>
  },


  {
    path:"/register",
    element:<Register/>
  },






  // =====================
  // ADMIN ROUTES
  // =====================


  {
    path:"/admin",

    element:<AdminLayout/>,

    children:[


      {
        index:true,
        element:<AdminDashboard/>
      },


      {
        path:"users",
        element:<UsersTable/>
      },


      {
        path:"transactions",
        element:<AdminTransaction/>
      },


      {
        path:"analytics",
        element:<AdminAnalytics/>
      },


      {
        path:"profile",
        element:<AdminProfile/>
      },


      {
        path:"settings",
        element:<AdminProfile/>
      }


    ]

  },








  // =====================
  // USER DASHBOARD
  // =====================


  {
    path:"/dashboard",

    element:<DashboardLayout/>,

    children:[


      {
        index:true,
        element:<Overview/>
      },


      {
        path:"transactions",
        element:<Transactions/>
      },


      {
        path:"budgets",
        element:<Budgets/>
      },


      {
        path:"goals",
        element:<Goals/>
      },


      {
        path:"insights",
        element:<Insights/>
      },


      {
        path:"profile",
        element:<Profile/>
      },


      {
        path:"settings",
        element:<Settings/>
      }


    ]

  },








  // =====================
  // NOT FOUND
  // =====================


  {
    path:"*",
    element:<Navigate to="/" replace/>
  }



]);



export default router;