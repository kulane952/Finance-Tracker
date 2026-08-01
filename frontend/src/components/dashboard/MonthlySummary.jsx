import {
Card,
CardContent,
CardHeader,
CardTitle
} from "@/components/ui/card";


import {
useMonthlySummary
} from "@/hooks/useTransactions";



export default function MonthlySummary(){


const {
data=[]
}=useMonthlySummary();



return (

<Card>


<CardHeader>

<CardTitle>
Monthly Summary
</CardTitle>

</CardHeader>



<CardContent className="space-y-3">


{
data.length === 0 ?


<p>
No data
</p>


:


data.map((item,index)=>(


<div

key={`${item.category}-${index}`}

className="
border
rounded-lg
p-3
"


>


<p className="font-semibold">

{item.category}

</p>



{
item.type === "income" &&

<p className="text-green-600">

Income:
${item.total}

</p>

}



{
item.type === "expense" &&

<p className="text-red-600">

Expense:
${item.total}

</p>

}



</div>


))


}



</CardContent>


</Card>


)

}