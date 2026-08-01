import BalanceCard from "@/components/dashboard/BalanceCard";
import StatCard from "@/components/dashboard/StatCard";

import CategorySpending from "@/components/dashboard/CategorySpending";
import MonthlySummary from "@/components/dashboard/MonthlySummary";

import Budgets from "./Budgets";
import Goals from "./Goals";
import Insights from "./Insights";

import RecentTransactions from "@/components/dashboard/RecentTransactions";

import {
  useDashboard
} from "@/hooks/useTransactions";



export default function Overview(){


const {
  data,
  isLoading
}=useDashboard();



if(isLoading)

return <p>Loading...</p>;



return (

<div className="space-y-6">



{/* TOP CARDS */}

<div className="
grid
md:grid-cols-3
gap-5
">



<BalanceCard

balance={data?.balance || 0}

/>



<StatCard

title="Income"

value={`+$${data?.income || 0}`}

type="income"

/>



<StatCard

title="Expense"

value={`-$${data?.expense || 0}`}

type="expense"

/>



</div>





{/* CATEGORY + MONTHLY */}


<div className="
grid
lg:grid-cols-2
gap-5
">



<CategorySpending/>



<MonthlySummary/>



</div>





{/* MANAGEMENT */}


<div className="
grid
md:grid-cols-3
gap-5
">



<Budgets/>



<Goals/>



<Insights/>



</div>





{/* RECENT TRANSACTIONS */}



<RecentTransactions/>



</div>

)

}