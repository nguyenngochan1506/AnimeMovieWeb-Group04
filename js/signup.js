import { HOST_NAME } from "./utils.js";

window.addEventListener("load", () => {
  const signupForm = document.querySelector("#signup-form");
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    let userName = document.querySelector("#userName").value;
    let password = document.querySelector("#password").value;
    let retypepass = document.querySelector("#retypepass").value;
    let fullName = document.querySelector("#fullName").value;
    let email = document.querySelector("#email").value;

    try {
      // Perform basic validation
      if (!userName || !password || !retypepass || !fullName || !email) {
        throw new Error(
          "Vui lòng điền đầy đủ thông tin vào tất cả các trường."
        );
      }

      if (password !== retypepass) {
        throw new Error(
          "Mật khẩu không khớp. Vui lòng nhập lại mật khẩu của bạn."
        );
      }

      const data = await handleSignup(
        userName,
        retypepass,
        password,
        fullName,
        email
      );
      alert("Đăng ký thành công!");

      // Optional: Redirect to another page after successful signup
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1000);
    } catch (error) {
      alert(error.message);
    }
  });
});

const handleSignup = async (userName, password, fullName, email) => {
  const response = await fetch(`${HOST_NAME}/user/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName,
      password,
      fullName,
      email,
    }),
  });

  if (!response.ok) {
    throw new Error("Đăng ký thất bại. Vui lòng thử lại.");
  }

  return response.json();
};
