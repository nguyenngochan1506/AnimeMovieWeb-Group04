import { HOST_NAME } from "./utils.js";

window.addEventListener("load", () => {
  const myForm = document.querySelector("#my-form");
  myForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    let userName = document.querySelector("#ten-dang-nhap").value;
    let password = document.querySelector("#mat-khau").value;

    try {
      const data = await handleLogin(userName, password);
      localStorage.setItem("token", data.token);
      alert("Đăng nhập thành công!");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
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
    throw new Error("Đăng nhập thất bại");
  }

  return response.json();
};
