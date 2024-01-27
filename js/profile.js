import { HOST_NAME, parseJwt } from "./utils.js";

window.addEventListener("load", () => {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Bạn chưa đăng nhập");
    window.location.href = "login.html";
  }
  const user = JSON.parse(localStorage.getItem('user'));
  document.querySelector("#user-id").innerHTML = "#" + user.id;
  document.querySelector("#name").innerHTML = user.userName;
  document.querySelector("#my-email").innerHTML = user.email;
  document.querySelector('.user-image img').setAttribute('src', user.avatar)
});
