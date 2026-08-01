import {
Card,
CardContent,
CardHeader,
CardTitle
}
from "@/components/ui/card";


import AvatarUpload 
from "./AvatarUpload";



export default function ProfileCard({
user
}){


return (

<Card>


<CardHeader>

<CardTitle>
My Profile
</CardTitle>

</CardHeader>



<CardContent>


<AvatarUpload
user={user}
/>



<div className="
mt-6
space-y-2
">


<p>

<b>Name:</b> {user?.name}

</p>


<p>

<b>Email:</b> {user?.email}

</p>


<p>

<b>Role:</b> {user?.role}

</p>


</div>


</CardContent>


</Card>

)

}