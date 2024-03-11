import { HOST_NAME } from "./utils.js";

window.addEventListener("load", () => {
  const signupForm = document.querySelector("#signup-form");
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    let userName = document.querySelector("#userName-signup").value;
    let password = document.querySelector("#passWord-signup").value;
    let retypepass = document.querySelector("#retypePass-signup").value;
    let fullName = document.querySelector("#fullName-signup").value;
    let email = document.querySelector("#email-signup").value;

    try {
      // Perform basic validation
      if (!userName || !password || !retypepass || !fullName || !email) {
        throw new Error("Vui lòng điền đầy đủ thông tin vào tất cả các trường.");
      }

      if (password !== retypepass) {
        throw new Error("Mật khẩu không khớp. Vui lòng nhập lại mật khẩu của bạn.");
      }

      const data = await handleSignup(userName, password, email, fullName);

      // Hiển thị thông báo ngay sau khi submit thành công
      alert("Đăng ký thành công!");

      // Optional: Redirect to another page after successful signup
      setTimeout(() => {
        window.location.href = "login.html";
      }, 500);
    } catch (error) {
      alert(error.message);
    }
  });
});


const handleSignup = async (userName, password, email, fullName) => {
  const response = await fetch(`${HOST_NAME}/user/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName,
      password,
      email,
      fullName,
    }),
  });

  if (!response.ok) {
    throw new Error("Đăng ký thất bại. Vui lòng thử lại.");
  }

  return response.json();
};
