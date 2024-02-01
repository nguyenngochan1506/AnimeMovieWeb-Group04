import { HOST_NAME, parseJwt } from "./utils.js";

window.addEventListener("load", () => {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Bạn chưa đăng nhập");
    window.location.href = "login.html";
    return;
  }
  const user = JSON.parse(localStorage.getItem('user'));
  document.querySelector("#user-id").innerHTML = "#" + user.id;
  document.querySelector("#name").innerHTML = user.userName;
  document.querySelector("#my-email").innerHTML = user.email;
  document.querySelector('.user-image img').setAttribute('src', user.avatar)
  getNumOfFavoriteAnime(user.id).then(data=>{
    document.querySelector('.num-of-favorite span').innerHTML = data;
  })

  const {isAdmin} = parseJwt(token);
  document.querySelector('.user-type').innerHTML = isAdmin ? "ADMIN" : "NORMAL"
});

const getNumOfFavoriteAnime = async (userId) =>{
  try {
    const response = await fetch(`${HOST_NAME}/danh-sach-yeu-thich/search/countAllByUser_Id?userId=${userId}`,{
      method:"GET",
      headers:{
        "Content-Type": "Application/json"
      }
    })
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}