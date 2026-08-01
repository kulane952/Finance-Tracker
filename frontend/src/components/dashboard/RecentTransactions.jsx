import {
Card,
CardContent,
CardHeader,
CardTitle
}
from "@/components/ui/card";


import {
useTransactions
}
from "@/hooks/useTransactions";



export default function RecentTransactions(){


const {
data=[],
isLoading
}=useTransactions();



if(isLoading)

return <p>Loading...</p>;



return (

<Card>


<CardHeader>

<CardTitle>

Recent Transactions

</CardTitle>

</CardHeader>



<CardContent>


<div className="space-y-4">


{
data.length === 0 ? (

<p className="text-muted-foreground">
No transactions found
</p>

)

:

data.slice(0,5).map(item=>(


<div

key={item._id}

className="flex justify-between"

>


<div>

<p className="font-medium">

{item.title}

</p>


<p className="text-sm text-muted-foreground">

{item.category}

</p>


</div>



<span
className={`
font-semibold
${item.type === "income"
? "text-green-600"
: "text-red-600"
}
`}
>
{item.type === "income" ? "+" : "-"}${item.amount}
</span>



</div>


))

}



</div>


</CardContent>


</Card>

)

}