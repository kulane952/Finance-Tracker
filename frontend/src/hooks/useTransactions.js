import {
useQuery,
useMutation,
useQueryClient
} from "@tanstack/react-query";


import api from "@/lib/api";




// GET TRANSACTIONS

export function useTransactions(){


return useQuery({

queryKey:["transaction"],


queryFn:async()=>{


const res = await api.get(
"/transaction"
);


console.log(
"API DATA:",
res.data
);



return res.data.transactions || [];


}


});


}





// CREATE TRANSACTION


export function useCreateTransaction(){


const queryClient = useQueryClient();



return useMutation({


mutationFn:async(data)=>{


const res = await api.post(

"/transaction",

data

);


return res.data;


},



onSuccess:()=>{


queryClient.invalidateQueries({

queryKey:["transaction"]

});


}


});


}





// DELETE TRANSACTION


export function useDeleteTransaction(){


const queryClient = useQueryClient();



return useMutation({


mutationFn:async(id)=>{


await api.delete(

`/transaction/${id}`

);


},



onSuccess:()=>{


queryClient.invalidateQueries({

queryKey:["transaction"]

});


}


});


}


//get Transaction Dashbaord

export function useDashboard(){


return useQuery({

queryKey:["dashboard"],


queryFn:async()=>{


const res = await api.get(
"/transaction/dashboard"
);


return res.data.data;


}


});


}



// MONTHLY SUMMARY

export function useMonthlySummary(){

return useQuery({

queryKey:["monthly-summary"],


queryFn:async()=>{


const res = await api.get(
"/transaction/monthly-summary"
);


console.log(
"MONTHLY:",
res.data
);


return res.data.summary || [];


}

});

}




// CATEGORIES

export function useCategories(){

return useQuery({

queryKey:["categories"],


queryFn:async()=>{

const res = await api.get(
"/transaction/categories"
);


console.log(
"CATEGORIES:",
res.data
);


return res.data.categories || [];


}

});

}
