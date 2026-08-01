import {
useQuery,
useMutation,
useQueryClient
} from "@tanstack/react-query";


import api from "@/lib/api";




// GET BUDGETS

export function useBudgets(){

return useQuery({

queryKey:["budgets"],


queryFn:async()=>{


const res = await api.get(
"/budget"
);


return res.data.budgets || [];


}


});


}




// CREATE BUDGET

export function useCreateBudget(){


const queryClient = useQueryClient();



return useMutation({


mutationFn:async(data)=>{


const res = await api.post(

"/budget",

data

);


return res.data;


},


onSuccess:()=>{


queryClient.invalidateQueries({

queryKey:["budgets"]

});


}


});


}






// DELETE BUDGET

export function useDeleteBudget(){


const queryClient = useQueryClient();



return useMutation({


mutationFn:async(id)=>{


await api.delete(

`/budget/${id}`

);


},


onSuccess:()=>{


queryClient.invalidateQueries({

queryKey:["budgets"]

});


}


});


}






// UPDATE BUDGET

export function useUpdateBudget(){


const queryClient = useQueryClient();



return useMutation({


mutationFn:async({id,data})=>{


const res = await api.put(

`/budget/${id}`,

data

);


return res.data;


},



onSuccess:()=>{


queryClient.invalidateQueries({

queryKey:["budgets"]

});


}


});


}