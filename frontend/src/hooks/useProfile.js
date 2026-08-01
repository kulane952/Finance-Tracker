import {
useMutation,
useQueryClient
}
from "@tanstack/react-query";


import {
uploadProfilePicture
}
from "@/lib/upload";



export function useUploadProfile(){


const queryClient =
useQueryClient();



return useMutation({

mutationFn:(file)=>
uploadProfilePicture(file),


onSuccess:()=>{


queryClient.invalidateQueries({

queryKey:["profile"]

});


}


});


}