// watching.js

import { HOST_NAME, getParamUrl } from "./utils.js";

window.onload = () => {
  const animeId = getParamUrl("animeId");
  const ep = getParamUrl("tap");

   //lay id anime tu url  
   fetch(`${HOST_NAME}/anime/${animeId}`)
   .then(respnse => respnse.json())
   .then(data =>{
    console.log(data);
       document.querySelector('.name_anime').innerHTML = data.name;
       })
   
  handleApi(animeId)
    .then((data) => {
      return data._embedded.episodes;
    })
    .then((data) => {
      let epHtml = ``;
      const length = data.length;
      for (let i = 0; i < length; i++) {
        epHtml += `<a class="btn btn-secondary my-2 epsoidesss" href="#">Tập ${
          i + 1
        }</a>`;
      }
      document.querySelector(".list_ep ").innerHTML = epHtml;

      return data[ep - 1];
    })
    .then((data) => {
      console.log(data);
      const { title, source, episodeNumber, name } = data;
      console.log(title, source);
      document.querySelector(".title_anime").innerHTML = title;
      document.querySelector('.name_anime').innerHTML = name;
      document
        .querySelector(".anime__video__player iframe")
        .setAttribute("src", source);
        document
        .querySelector(".dialogDarkMode iframe")
        .setAttribute("src", source);
      document.querySelector(
        ".currentEp"
      ).innerHTML = `Đang xem tập ${episodeNumber}`;
      document
        .querySelector(".btn_next")
        .addEventListener("click", () => handleBtnNext(ep, animeId));

    });
};

// xử lý sự kiện btn next
const handleBtnNext = (currentEp, animeId) => {
  const nextEp = Number.parseInt(currentEp) + 1;
  const maxEp = document.querySelectorAll(".epsoidesss").length;
  if (nextEp > maxEp) {
    alert("Quay xe đi e êy");
    return;
  }
  window.location.href = `./watching.html?animeId=${animeId}&tap=${nextEp}`;
};

const handleApi = async (animeId) => {
  const response = await fetch(`${HOST_NAME}/anime/${animeId}/episodeList`);
  const data = await response.json();
  return data;
};

