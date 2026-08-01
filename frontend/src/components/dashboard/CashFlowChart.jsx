import {
Card,
CardContent,
CardHeader,
CardTitle
} from "@/components/ui/card";


import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
} from "recharts";


const data=[

{
name:"May 1",
income:3000,
expense:1200
},

{
name:"May 8",
income:5000,
expense:2000
},

{
name:"May 15",
income:7000,
expense:3500
},

{
name:"May 22",
income:8500,
expense:4000
},

{
name:"May 29",
income:10000,
expense:5000
}

];


export default function CashFlowChart(){


return (

<Card>


<CardHeader>

<CardTitle>
Cash Flow
</CardTitle>

</CardHeader>


<CardContent>


<div className="
h-[300px]
">


<ResponsiveContainer
width="100%"
height="100%"
>


<LineChart data={data}>


<XAxis dataKey="name"/>


<YAxis/>


<Tooltip/>


<Line

type="monotone"

dataKey="income"

strokeWidth={3}

/>



<Line

type="monotone"

dataKey="expense"

strokeWidth={3}

/>



</LineChart>


</ResponsiveContainer>


</div>


</CardContent>


</Card>


)

}