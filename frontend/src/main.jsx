import './index.css';

import React from "react";
import ReactDOM from "react-dom/client";

import {
  RouterProvider
} from "react-router-dom";

import router from "./app/router";


import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";


import {
  Toaster
} from "@/components/ui/sonner";



const queryClient = new QueryClient({

  defaultOptions: {

    queries: {

      staleTime: 60 * 1000

    }

  }

});



ReactDOM.createRoot(
  document.getElementById("root")
)
.render(

<React.StrictMode>


<QueryClientProvider client={queryClient}>


<RouterProvider router={router}/>


<Toaster />


</QueryClientProvider>


</React.StrictMode>

);