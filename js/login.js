import { HOST_NAME, parseJwt } from "./utils.js";

window.addEventListener("load", () => {
  const myForm = document.querySelector("#my-form");
  myForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    let userName = document.querySelector("#ten-dang-nhap").value;
    let password = document.querySelector("#mat-khau").value;

    try {
      const data = await handleLogin(userName, password);
      localStorage.setItem("token", data.token);
      const userId = parseJwt(data.token).id;
      const user = await loadUserByID(userId);
      localStorage.setItem("user", JSON.stringify(user))
      alert("Đăng nhập thành công!");
       setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    } catch (error) {
      alert(error.message);
    }
  });
});

const handleLogin = async (userName, password) => {
  const response = await fetch(`${HOST_NAME}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName: userName,
      password: password,
    }),
  });

  if (!response.ok) {
    throw new Error("Sai tên đăng nhập hoặc mật khẩu");
  }

  return response.json();
};
const loadUserByID = async (userId) => {
  const response = await fetch(`${HOST_NAME}/nguoi-dung/${userId}`);
  const data = await response.json();
  return data;
};
