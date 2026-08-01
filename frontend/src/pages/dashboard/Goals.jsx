import {
Card,
CardContent,
CardHeader,
CardTitle
} from "@/components/ui/card";


import {
Button
} from "@/components/ui/button";


import {
useState
} from "react";


import {
useGoals,
useDeleteGoal
} from "@/hooks/useGoals";


import GoalForm from "./GoalForm";



export default function Goals(){


const {
data=[],
isLoading
}=useGoals();



const deleteGoal=useDeleteGoal();


const [show,setShow]=useState(false);



if(isLoading)
return <p>Loading...</p>



return (

<Card>


<CardHeader className="flex flex-row justify-between">


<CardTitle>
Goals
</CardTitle>


<Button
onClick={()=>setShow(!show)}
>

+ Add Goal

</Button>


</CardHeader>



<CardContent className="space-y-4">


{
show &&

<GoalForm
close={()=>setShow(false)}
/>

}



{
data.map(goal=>{


const progress=Math.round(
(goal.currentAmount / goal.targetAmount)*100
);



return (

<div

key={goal._id}

className="
border
rounded-xl
p-4
space-y-2
"

>


<h3 className="font-bold">

{goal.title}

</h3>


<p>

${goal.currentAmount}
/
${goal.targetAmount}

</p>



<div className="
h-2
bg-gray-200
rounded-full
">


<div

className="
h-2
bg-blue-600
rounded-full
"

style={{
width:`${progress}%`
}}

/>


</div>



<p>

{progress}%

</p>



<p className="text-sm">

Deadline:
{
new Date(goal.deadline)
.toLocaleDateString()
}

</p>



<Button

variant="destructive"

onClick={()=>deleteGoal.mutate(goal._id)}

>

Delete

</Button>



</div>

)


})

}



</CardContent>


</Card>

)

}