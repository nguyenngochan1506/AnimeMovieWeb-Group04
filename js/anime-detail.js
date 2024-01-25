import { HOST_NAME, getParamUrl } from "./utils.js";
window.onload  = ()=>{
    //lay id anime tu url 
    const animeId = getParamUrl('animeId')
  
    fetch(`${HOST_NAME}/anime/${animeId}`)
    .then(respnse => respnse.json())
    .then(data =>{
        document.querySelector('.anime__details__title h1').innerHTML = data.name;
        document.querySelector('.anime__details__title span').innerHTML = `${data.englishName}/ ${data.vietnamName}`
        document.querySelector('.anime__details__text p').innerHTML = data.description;
        document.querySelector('.anime__image-box img').setAttribute('src', data.coverImage);
        document.querySelector('.view').innerHTML = data.view.toLocaleString();
        document.querySelector('.releaseYear').innerHTML = data.releaseYear;
        document.querySelector('#btn-xem-ngay').addEventListener('click', ()=>{
            window.location.href = `./watching.html?animeId=${data.id}&tap=1`
        })
    })
    //phan chuyen trang
}