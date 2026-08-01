import { 
  ShieldCheck,
  ClipboardCheck
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


import { useQueryClient } from "@tanstack/react-query";

import {
  useNavigate
} from "react-router-dom";


import useAuthStore from "@/store/authStore";



export default function AdminHeader(){


  const user = useAuthStore(
    (state)=>state.user
  );


  const logout = useAuthStore(
    (state)=>state.logout
  );


  const navigate = useNavigate();


  const queryClient = useQueryClient();



  function handleLogout(){


    const confirmLogout =
    window.confirm(
      "Are you sure you want logout?"
    );


    if(confirmLogout){


      logout();


      queryClient.clear();


      navigate("/",{
        replace:true
      });


    }


  }



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

<div
className="
flex
items-center
gap-3
"
>


<div
className="
h-10
w-10
rounded-lg
bg-primary
flex
items-center
justify-center
"
>

<ClipboardCheck
className="
text-primary-foreground
"
/>

</div>



<div>

<p
className="
text-sm
text-muted-foreground
"
>
Admin Panel
</p>


<h2
className="
font-bold
text-xl
"
>
Finance Tracker
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



<div
className="
flex
items-center
gap-2
"
>

<ShieldCheck
className="
h-4
w-4
text-green-600
"
/>


<span
className="
text-sm
font-semibold
"
>
{user?.role || "admin"}
</span>


</div>




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
        {
          user?.name
          ?.charAt(0)
          ?.toUpperCase()
          ||
          "A"
        }
      </AvatarFallback>


    </Avatar>

  </DropdownMenuTrigger>



  <DropdownMenuContent
    align="end"
    className="w-64"
  >


    {/* USER INFO */}

    <div className="
      px-3
      py-2
      flex
      flex-col
      gap-1
    ">

      <span className="
        font-semibold
      ">
        {
          user?.name || "Admin"
        }
      </span>


      <span className="
        text-xs
        text-muted-foreground
      ">
        {
          user?.email || "No email"
        }
      </span>


      <span className="
        text-xs
        text-green-600
        font-medium
      ">
        {
          user?.role || "admin"
        }
      </span>


    </div>



    <DropdownMenuSeparator />



    <DropdownMenuItem
      onClick={() =>
        navigate("/admin/profile")
      }
    >
      Profile
    </DropdownMenuItem>



    <DropdownMenuItem
      onClick={() =>
        navigate("/admin/settings")
      }
    >
      Settings
    </DropdownMenuItem>



    <DropdownMenuSeparator />



    <DropdownMenuItem
      className="text-red-500"
      onClick={handleLogout}
    >
      Logout
    </DropdownMenuItem>



  </DropdownMenuContent>


</DropdownMenu>



</div>



</header>


);


}