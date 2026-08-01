import RecentTransactions 
from "@/components/dashboard/RecentTransactions";


import AddTransactionDialog from '@/pages/dashboard/Transactions'


export default function Transactions(){


return (

<div className="space-y-6">


<div className="
flex
justify-between
items-center
">


<h1 className="
text-3xl
font-bold
">

Transactions

</h1>


<AddTransactionDialog/>


</div>


<RecentTransactions/>


</div>

)

}