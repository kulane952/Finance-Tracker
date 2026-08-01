import {
Card,
CardContent,
CardHeader,
CardTitle
}
from "@/components/ui/card";


import {
Progress
} from "@/components/ui/progress";


const budgets=[

{
name:"Food",
spent:400,
limit:1000
},

{
name:"Housing",
spent:1200,
limit:1500
},

{
name:"Transport",
spent:300,
limit:700
}

];


export default function BudgetProgress(){


return (

<Card>


<CardHeader>

<CardTitle>
Monthly Budget
</CardTitle>

</CardHeader>



<CardContent className="space-y-6">


{

budgets.map(item=>{


const percent=
(item.spent/item.limit)*100;


return (

<div key={item.name}>


<div className="
flex
justify-between
mb-2
">

<span>
{item.name}
</span>


<span>
${item.spent}/${item.limit}
</span>


</div>



<Progress
value={percent}
/>



</div>


)


})

}


</CardContent>


</Card>


)

}