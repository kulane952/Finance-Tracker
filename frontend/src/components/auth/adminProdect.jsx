import useAuthStore from '@/store/authStore'
import React from 'react'
import { Navigate } from 'react-router-dom';

function adminProdect() {
 const {user}=useAuthStore();

 if(!user){
    return <Navigate to="/login" replace/>;
 }

 if(user.role !=="admin"){
    return <Navigate to="/dashboard" replace/>
 }
}

export default adminProdect