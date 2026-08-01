import ProfileCard from "@/components/profile/ProfileCard";

import useAuthStore from "@/store/authStore";


export default function AdminProfile(){

  const user = useAuthStore(
    (state) => state.user
  );

  console.log("ADMIN USER:", user);

  return (

    <div className="max-w-2xl">

      <h1 className="
        text-3xl
        font-bold
        mb-6
      ">
        Admin Profile
      </h1>

      <ProfileCard
        user={user}
      />

    </div>

  );

}