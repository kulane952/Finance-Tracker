import {
  useMutation
} from "@tanstack/react-query";


import api from "@/lib/api";


import useAuthStore from "@/store/authStore";


import {
  toast
} from "sonner";




// =====================
// LOGIN
// =====================

export function useLogin(){


  const loginStore =
  useAuthStore(
    (state)=>state.login
  );



  return useMutation({


    mutationFn:async(data)=>{


      const res =
      await api.post(
        "/auth/login",
        data
      );


      return res.data;


    },



    onSuccess:(data)=>{


      loginStore(

        data.user,

        data.token

      );



      toast.success(
        "Login successful 🎉"
      );


    },



    onError:(error)=>{


      toast.error(

        error.response?.data?.message ||

        "Login failed"

      );


    }



  });


}









// =====================
// REGISTER
// =====================


export function useRegister(){



  const loginStore =
  useAuthStore(
    (state)=>state.login
  );




  return useMutation({



    mutationFn:async(data)=>{


      const res =
      await api.post(

        "/auth/register",

        data

      );


      return res.data;


    },





    onSuccess:(data)=>{



      loginStore(

        data.user,

        data.token

      );



      toast.success(

        "Account created successfully 🎉"

      );



    },






    onError:(error)=>{


      console.log(
        "REGISTER ERROR:",
        error.response?.data
      );



      const message =

      error.response?.data?.message ||

      "Registration failed";



      toast.error(message);



    }



  });



}