import {
Card,
CardContent,
CardHeader,
CardTitle
} from "@/components/ui/card";


import {
Button
} from "@/components/ui/button";


import {
useState
} from "react";


import {
useBudgets,
useDeleteBudget,
useUpdateBudget
} from "@/hooks/useBudgets";


import BudgetForm from "./BudgetForm";



export default function Budgets(){


const {
data=[],
isLoading
}=useBudgets();



const deleteBudget = useDeleteBudget();


const updateBudget = useUpdateBudget();



const [showAdd,setShowAdd]=useState(false);



const [editId,setEditId]=useState(null);



const [editData,setEditData]=useState({

category:"",

limitAmount:""

});





if(isLoading){

return <p>Loading...</p>;

}





function startEdit(item){


setEditId(item._id);


setEditData({

category:item.category,

limitAmount:item.limitAmount

});


}





function saveUpdate(){


updateBudget.mutate({

id:editId,


data:{


category:editData.category,


limitAmount:Number(editData.limitAmount)


}


});


setEditId(null);


}





return (

<Card>


<CardHeader className="
flex
flex-row
justify-between
">


<CardTitle>

Budgets

</CardTitle>



<Button

onClick={()=>setShowAdd(!showAdd)}

>

+ Add Budget

</Button>


</CardHeader>




<CardContent className="space-y-4">



{
showAdd &&

<BudgetForm

close={()=>setShowAdd(false)}

/>

}




{

data.map((item)=>(


<div

key={item._id}

className="
border
rounded-xl
p-4
space-y-3
"

>


{

editId === item._id ?



(


<div className="space-y-3">


<input

className="
border
rounded
p-2
w-full
"

value={editData.category}

onChange={(e)=>


setEditData({

...editData,

category:e.target.value

})


}

/>



<input

className="
border
rounded
p-2
w-full
"

type="number"

value={editData.limitAmount}

onChange={(e)=>


setEditData({

...editData,

limitAmount:e.target.value

})


}

/>




<div className="flex gap-2">


<Button

onClick={saveUpdate}

>

Save Update

</Button>



<Button

variant="outline"

onClick={()=>setEditId(null)}

>

Cancel

</Button>



</div>


</div>


)



:

(


<>


<h3 className="font-bold text-lg">

{item.category}

</h3>



<p>

Limit: ${item.limitAmount}

</p>




<div className="flex gap-2">


<Button

variant="outline"

onClick={()=>startEdit(item)}

>

Update

</Button>





<Button

variant="destructive"

onClick={()=>deleteBudget.mutate(item._id)}

>

Delete

</Button>



</div>



</>


)



}




</div>


))


}




</CardContent>


</Card>

)

}