import {
useQuery,
useMutation,
useQueryClient
} from "@tanstack/react-query";

import api from "@/lib/api";



// GET GOALS

export function useGoals(){

return useQuery({

queryKey:["goals"],

queryFn:async()=>{

const res = await api.get("/goals");

return res.data.goals || [];

}

});

}




// CREATE GOAL

export function useCreateGoal(){

const queryClient = useQueryClient();


return useMutation({

mutationFn:async(data)=>{

const res = await api.post(
"/goals",
data
);

return res.data;

},


onSuccess:()=>{

queryClient.invalidateQueries({
queryKey:["goals"]
});

}


});

}





// DELETE GOAL

export function useDeleteGoal(){

const queryClient = useQueryClient();


return useMutation({

mutationFn:async(id)=>{

await api.delete(
`/goals/${id}`
);

},


onSuccess:()=>{

queryClient.invalidateQueries({
queryKey:["goals"]
});

}


});

}





// ADD MONEY

export function useAddMoney(){

const queryClient = useQueryClient();


return useMutation({

mutationFn:async({id,amount})=>{


const res = await api.put(
`/goals/${id}/add-money`,
{
amount
}
);


return res.data;


},


onSuccess:()=>{

queryClient.invalidateQueries({
queryKey:["goals"]
});


}


});


}