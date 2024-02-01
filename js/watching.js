// watching.js

import { HOST_NAME, getParamUrl } from "./utils.js";

window.onload = () => {
  const animeId = getParamUrl("animeId");
  const ep = getParamUrl("tap");
  const token = localStorage.getItem("token");
  if (token) {
    document
      .querySelector("#form-comment")
      .addEventListener("submit", (e) => handleSubmitComment(e, animeId));
  } else {
    document.querySelector("#form-comment").innerHTML =
      '<a href="./login.html" class="btn btn-danger p-2 mb-3"> Đăng nhập để bình luận </a>';
  }

  //lay id anime tu url
  fetch(`${HOST_NAME}/anime/${animeId}`)
    .then((respnse) => respnse.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".name_anime").innerHTML = data.name;
    });

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
      document.querySelector(".name_anime").innerHTML = name;
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

    //lay id anime tu url
  getAllComment(animeId).then((data) => {
    let customHtml = "";
    data.forEach((comment) => {
      customHtml += `

          <div class="user__comment d-flex align-items-start mt-3 rounded align-items-center"
          style="background-color: #94b8f3;">
          <img class="user__avatar rounded " style="width: 3rem; height: 3rem; margin-left: 1rem;"
              src="${comment.user.avatar || "./img/usericon.jpg"}" alt="">
          <div class="comment d-flex flex-column" style="margin-left: 1rem;">
              <div class="nickname d-flex align-items-start text-success fw-bolder"
                  style="font-size: 15px;">  ${comment.user.fullName} </div>
              <div class="content d-flex align-items-start" style="font-size: 14px;">
              ${comment.description} </div>
              <div class="time d-flex align-items-start" style="font-size: 12px;">10 giờ trước
              </div>
          </div>
      </div>
          `;
      document.querySelector(".list_comment").innerHTML = customHtml;
    });
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


const handleSubmitComment = async (e, animeId) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const comment = formData.get("comment");
  if (!comment) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }
  try {
    const userId = JSON.parse(localStorage.getItem("user")).id;
    const request = {
      description: comment,
      user: `user/${userId}`,
      anime: `anime/${animeId}`,
    };
    const response = await fetch(`${HOST_NAME}/binh-luan`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(request),
    });
    const data = await response.json();
    alert("Bạn đã comment");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
const getAllComment = async (animeId) => {
  try {
    const response = await fetch(
      `${HOST_NAME}/binh-luan/search/findAllByAnime_Id?id=${animeId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
        },
      }
    );
    const data = await response.json();
    const listComment = data._embedded.comments;

    const listPromise = listComment.map(async (comment) => {
      return {
        description: comment.description,
        user: await loadUserByUrl(comment._links.user.href),
      };
    });
    const result = Promise.all(listPromise);

    return result;
  } catch (error) {
    console.log(error);
  }
};

const loadUserByUrl = async (url) => {
  const urlObject = new URL(url);
  const path = urlObject.pathname;
  const response = await fetch(`${HOST_NAME}${path}`);
  const data = await response.json();
  return data;
};
