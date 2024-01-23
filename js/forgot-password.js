import { HOST_NAME } from "./utils.js";

window.addEventListener('load', ()=>{
    document.querySelector('#submitButton').addEventListener('click', handleSubmit)
//    handleApi()
//    .then(data=>{
//     alert(data.message)
//    })
})

const handleSubmit = ()=>{
    const email = document.querySelector('#email').value;
    console.log(email);
}

const handleApi = async (url)=>{
    const response = await fetch(`${HOST_NAME}/user/reset-password?email=${url}`)
    const data = await response.json();
    return  data;
}