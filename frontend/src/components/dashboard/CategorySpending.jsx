import {
Card,
CardContent,
CardHeader,
CardTitle
} from "@/components/ui/card";


import {
useMonthlySummary
} from "@/hooks/useTransactions";



export default function CategorySpending(){


const {
data=[]
}=useMonthlySummary();



const expenses = data.filter(
(item)=>item.type==="expense"
);



return (

<Card>


<CardHeader>

<CardTitle>
Category Spending
</CardTitle>

</CardHeader>



<CardContent className="space-y-3">


{
expenses.length === 0 ?

<p>
No spending data
</p>


:


expenses.map((item,index)=>(


<div

key={`${item.category}-${index}`}

className="
flex
justify-between
border
rounded-lg
p-3
"

>


<span>

{item.category}

</span>



<span className="font-bold">

${item.total}

</span>



</div>


))


}



</CardContent>


</Card>

)

}