import { HOST_NAME, parseJwt } from "./utils.js";

window.addEventListener("load", () => {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Bạn chưa đăng nhập");
    window.location.href = "login.html";
  }
  const userId = parseJwt(token).id;

  handleApi(userId).then((data) => {
    document.querySelector("#user-id").innerHTML = "#" + data.id;
    document.querySelector("#name").innerHTML = data.userName;
    document.querySelector("#my-email").innerHTML = data.email;
    document.querySelector('.user-image img').setAttribute('src', data.avatar)
  });
});
const handleApi = async (userId) => {
  const response = await fetch(`${HOST_NAME}/nguoi-dung/${userId}`);
  const data = await response.json();
  return data;
};
