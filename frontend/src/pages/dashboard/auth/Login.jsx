import { useState } from "react";

import {
  Input
} from "@/components/ui/input";

import {
  Button
} from "@/components/ui/button";

import {
  useLogin
} from "@/hooks/useAuth";

import {
  useNavigate,
  Link
} from "react-router-dom";


export default function Login(){


  const login = useLogin();

  const navigate = useNavigate();


  const [form,setForm] = useState({

    email:"",
    password:""

  });



  function submit(e){

    e.preventDefault();


    login.mutate(form,{

      onSuccess:(data)=>{


        console.log("LOGIN DATA:",data);



        const user = data.user;



        if(user.role === "admin"){


          navigate("/admin");


        }else{


          navigate("/dashboard");


        }


      }


    });


  }



  return (

    <div
      className="
      max-w-md
      mx-auto
      mt-20
      space-y-5
      "
    >


      <h1
        className="
        text-3xl
        font-bold
        "
      >
        Login
      </h1>



      <form
        onSubmit={submit}
        className="space-y-4"
      >


        <Input

          placeholder="Email"

          value={form.email}

          onChange={(e)=>

            setForm({

              ...form,

              email:e.target.value

            })

          }

        />



        <Input

          type="password"

          placeholder="Password"

          value={form.password}

          onChange={(e)=>

            setForm({

              ...form,

              password:e.target.value

            })

          }

        />



        <Button
          className="w-full"
          type="submit"
        >

          Login

        </Button>



        <p
          className="
          text-center
          text-sm
          "
        >

          Don't have account?


          <Link
            to="/register"
            className="
            ml-2
            text-blue-500
            "
          >

            Register

          </Link>


        </p>


      </form>


    </div>

  );

}