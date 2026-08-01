import {
  useMutation
} from "@tanstack/react-query";


import api from "@/lib/api";


import useAuthStore from "@/store/authStore";




// LOGIN

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


    }


  });


}







// REGISTER

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


    },


    onError:(error)=>{


      console.log(
        "REGISTER ERROR:",
        error.response?.data
      );


    }


  });


}