// import {
// create
// } from "zustand";


// const useAuthStore = create((set)=>({


// user:null,

// token:
// localStorage.getItem("token") || null,



// login:(user,token)=>{


// localStorage.setItem(
// "token",
// token
// );


// set({

// user,

// token

// });


// },



// logout:()=>{


// localStorage.removeItem(
// "token"
// );


// set({

// user:null,

// token:null

// });


// },



// setUser:(user)=>{


// set({

// user

// });


// }





// }));


// export default useAuthStore;


import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set, get) => ({

      user: null,

      token: null,

      isAuthenticated: false,


      login: (user, token) => {

        set({

          user,

          token,

          isAuthenticated: true

        });

      },


      setUser: (user) => {

        set({

          user,

          isAuthenticated: true

        });

      },


      logout: () => {

        set({

          user: null,

          token: null,

          isAuthenticated: false

        });

      },


      getToken: () => get().token

    }),

    {
      name: "auth-storage"
    }
  )
);

export default useAuthStore;