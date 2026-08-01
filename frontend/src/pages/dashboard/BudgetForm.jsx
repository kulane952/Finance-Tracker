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
useCreateBudget
} from "@/hooks/useBudgets";



export default function BudgetForm({
close
}){


const createBudget = useCreateBudget();



const [form,setForm]=useState({

category:"",

limitAmount:""

});



function handleChange(e){


setForm({

...form,

[e.target.name]:e.target.value

});


}




function submit(e){

e.preventDefault();



createBudget.mutate({

category:form.category,

limitAmount:Number(form.limitAmount)

},{

onSuccess:()=>{


setForm({

category:"",

limitAmount:""

});


close();


}


});


}





return (

<form

onSubmit={submit}

className="space-y-4"

>


<Input

name="category"

placeholder="Category"

value={form.category}

onChange={handleChange}

/>



<Input

name="limitAmount"

type="number"

placeholder="Limit Amount"

value={form.limitAmount}

onChange={handleChange}

/>



<Button type="submit">

Save Budget

</Button>



</form>

)


}