import { HOST_NAME } from "./utils.js";
window.onload  = ()=>{
    fetch(`${HOST_NAME}/anime/1`)
    .then(respnse => respnse.json())
    .then(data =>{
        console.log(data);
        document.querySelector('.anime__details__title h1').innerHTML = data.name;
        document.querySelector('.anime__details__title span').innerHTML = `${data.englishName}/ ${data.vietnamName}`
        document.querySelector('.anime__details__text p').innerHTML = data.description;
        document.querySelector('.anime__image-box img').setAttribute('src', data.coverImage);
    })
}