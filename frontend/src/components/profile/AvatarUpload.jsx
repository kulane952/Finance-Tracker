import {
useState
} from "react";


import {
Avatar,
AvatarFallback,
AvatarImage
}
from "@/components/ui/avatar";


import {
Button
} from "@/components/ui/button";


import {
Input
}
from "@/components/ui/input";


import {
useUploadProfile
}
from "@/hooks/useProfile";



export default function AvatarUpload({
user
}){


const [preview,setPreview]=useState(
user?.avatar
);


const upload =
useUploadProfile();



function handleChange(e){


const file =
e.target.files[0];


if(!file)
return;



setPreview(
URL.createObjectURL(file)
);


upload.mutate(file);


}



return (

<div className="
flex
items-center
gap-5
">


<Avatar className="
h-24
w-24
">


<AvatarImage
src={preview}
/>


<AvatarFallback>

{
user?.name
?.charAt(0)
}

</AvatarFallback>


</Avatar>



<div>


<Input

type="file"

accept="image/*"

onChange={handleChange}

/>



<Button

className="mt-3"

disabled={upload.isPending}

>


{
upload.isPending
?
"Uploading..."
:
"Upload Picture"
}


</Button>


</div>


</div>

)

}