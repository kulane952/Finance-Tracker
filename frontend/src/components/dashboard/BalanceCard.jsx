import {
Card,
CardContent
} from "@/components/ui/card";


import {
ArrowUpRight
} from "lucide-react";



export default function BalanceCard({
balance=0
}){


return (

<Card className="bg-primary text-primary-foreground">


<CardContent className="p-6">


<p className="text-sm opacity-80">

Total Balance

</p>



<h1 className="text-4xl font-bold mt-3">

${balance}

</h1>



<div className="flex items-center gap-2 mt-4 text-sm">


<ArrowUpRight size={16}/>


<span>
8.35%
</span>


<span className="opacity-70">
vs last month
</span>


</div>


</CardContent>


</Card>

)

}