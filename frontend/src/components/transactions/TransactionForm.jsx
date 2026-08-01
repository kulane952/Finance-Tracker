import {
useState
} from "react";


import {
Button
} from "@/components/ui/button";


import {
Input
} from "@/components/ui/input";


import {
Select,
SelectContent,
SelectItem,
SelectTrigger,
SelectValue
}
from "@/components/ui/select";


import {
useCreateTransaction
}
from "@/hooks/useTransactions";


import {
toast
}
from "sonner";



export default function TransactionForm({close}){


const createTransaction = useCreateTransaction();



const [form,setForm]=useState({

title:"",

amount:"",

type:"expense",

category:"Food"

});





function handleChange(e){


setForm({

...form,

[e.target.name]:e.target.value

});


}





function submit(e){


e.preventDefault();



createTransaction.mutate({

...form,

amount:Number(form.amount),

date:new Date().toISOString()


},{

onSuccess:()=>{


toast.success(
"Transaction added successfully"
);


close();


},


onError:()=>{


toast.error(
"Failed to add transaction"
);


}


});


}




return (

<form
onSubmit={submit}
className="space-y-4"
>


<Input

name="title"

placeholder="Transaction title"

value={form.title}

onChange={handleChange}

/>



<Input

name="amount"

type="number"

placeholder="Amount"

value={form.amount}

onChange={handleChange}

/>




<Select

value={form.type}

onValueChange={(value)=>

setForm({

...form,

type:value

})

}

>


<SelectTrigger>

<SelectValue/>

</SelectTrigger>


<SelectContent>


<SelectItem value="expense">

Expense

</SelectItem>


<SelectItem value="income">

Income

</SelectItem>


</SelectContent>


</Select>





<Select

value={form.category}

onValueChange={(value)=>

setForm({

...form,

category:value

})

}

>


<SelectTrigger>

<SelectValue/>

</SelectTrigger>


<SelectContent>


<SelectItem value="Food">

Food

</SelectItem>


<SelectItem value="Housing">

Housing

</SelectItem>


<SelectItem value="Transport">

Transport

</SelectItem>


<SelectItem value="Entertainment">

Entertainment

</SelectItem>


</SelectContent>


</Select>




<Button
className="w-full"
type="submit"
>

Save Transaction

</Button>



</form>

)

}