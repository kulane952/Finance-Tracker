import {
Card,
CardContent,
CardHeader,
CardTitle
} from "@/components/ui/card";


import {
useMonthlySummary
} from "@/hooks/useTransactions";



export default function SpendingCategory(){


const {
data,
isLoading
}=useMonthlySummary();



if(isLoading)
return <p>Loading...</p>



return (

<Card>


<CardHeader>

<CardTitle>
Spending Category
</CardTitle>

</CardHeader>



<CardContent>


<div className="space-y-3">


{
data?.map((item)=>(
<div

key={item.category}

className="
flex
justify-between
"

>


<span>
{item.category}
</span>


<span
className={
item.type==="expense"
?
"text-red-600"
:
"text-green-600"
}
>

${item.total}

</span>


</div>
))

}



</div>


</CardContent>


</Card>

)

}