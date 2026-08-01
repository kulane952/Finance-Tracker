import api from "./api";


export async function uploadProfilePicture(file){

const formData = new FormData();


formData.append(
"image",
file
);



const response = await api.post(


"/profile/",



formData,

{
headers:{
"Content-Type":"multipart/form-data"
}
}

);


return response.data;

}