import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

import {
Card,
CardContent,
CardHeader,
CardTitle
} from "../ui/card";

import {
Table,
TableBody,
TableCell,
TableHead,
TableHeader,
TableRow
} from "../ui/table";



function AdminTransaction(){


const {
data,
isLoading,
isError
}=useQuery({

queryKey:["admin-transactions"],


queryFn:async()=>{

const response =
await api.get("/admin/transactions");

return response.data;

}

});



if(isLoading){

return (
<p>
Loading transactions...
</p>
)

}



if(isError){

return (
<p className="text-red-500">
Error loading transactions
</p>
)

}



const transactions =
data?.transactions || [];



return (

<Card>


<CardHeader>

<CardTitle>
All Transactions
</CardTitle>

</CardHeader>



<CardContent>


<Table>


<TableHeader>

<TableRow>

<TableHead>
Title
</TableHead>


<TableHead>
Amount
</TableHead>


<TableHead>
Type
</TableHead>


<TableHead>
Category
</TableHead>


<TableHead>
User
</TableHead>


<TableHead>
Email
</TableHead>


</TableRow>

</TableHeader>



<TableBody>


{
transactions.map((transaction)=>(


<TableRow
key={transaction._id}
>


<TableCell>
{transaction.title}
</TableCell>


<TableCell>
${transaction.amount}
</TableCell>


<TableCell>
{transaction.type}
</TableCell>


<TableCell>
{transaction.category}
</TableCell>


<TableCell>
{
transaction.createdBy?.name 
|| 
"Unknown"
}
</TableCell>


<TableCell>
{
transaction.createdBy?.email
||
"No email"
}
</TableCell>


</TableRow>


))
}



</TableBody>


</Table>


</CardContent>


</Card>

)


}


export default AdminTransaction;