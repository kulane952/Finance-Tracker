import ProfileCard
from "@/components/profile/ProfileCard";


import useAuthStore
from "@/store/authStore";



export default function Profile(){


const user =
useAuthStore(
state=>state.user
);



return (

<div className="
max-w-2xl
">


<h1 className="
text-3xl
font-bold
mb-6
">

Profile Settings

</h1>



<ProfileCard
user={user}
/>



</div>

)

}