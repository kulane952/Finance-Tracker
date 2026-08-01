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
useCreateGoal
} from "@/hooks/useGoals";



export default function GoalForm({
close
}){


const createGoal = useCreateGoal();



const [form,setForm]=useState({

title:"",
targetAmount:"",
deadline:""

});



function handleChange(e){

setForm({

...form,

[e.target.name]:e.target.value

});

}



function submit(e){

e.preventDefault();


createGoal.mutate({

title:form.title,

targetAmount:Number(form.targetAmount),

deadline:form.deadline

});


close();

}



return (

<form
onSubmit={submit}
className="space-y-4"
>


<Input

name="title"

placeholder="Goal title"

value={form.title}

onChange={handleChange}

/>



<Input

name="targetAmount"

type="number"

placeholder="Target amount"

value={form.targetAmount}

onChange={handleChange}

/>



<Input

name="deadline"

type="date"

value={form.deadline}

onChange={handleChange}

/>



<Button
type="submit"
className="w-full"
>

Save Goal

</Button>



</form>

)


}