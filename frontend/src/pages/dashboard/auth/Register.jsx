import {
  useRegister
} from "@/hooks/useAuth";


import {
  useState
} from "react";


import {
  Input
} from "@/components/ui/input";


import {
  Button
} from "@/components/ui/button";


import {
  Link
} from "react-router-dom";



export default function Register(){


  const register = useRegister();


  const [form,setForm] = useState({

    name:"",
    email:"",
    password:""

  });



  function submit(e){

    e.preventDefault();

    register.mutate(form);

  }



  return (

    <div className="
      max-w-md
      mx-auto
      mt-20
    ">


      <h1 className="
        text-3xl
        font-bold
        mb-5
      ">

        Create Account

      </h1>



      <form

        onSubmit={submit}

        className="space-y-4"

      >



        <Input

          placeholder="Name"

          value={form.name}

          onChange={(e)=>

            setForm({

              ...form,

              name:e.target.value

            })

          }

        />




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

          Register

        </Button>




        <div className="
          text-center
          text-sm
        ">


          Already have an account?


          <Link

            to="/login"

            className="
              ml-2
              text-blue-500
            "

          >

            Login

          </Link>


        </div>



      </form>


    </div>

  )

}