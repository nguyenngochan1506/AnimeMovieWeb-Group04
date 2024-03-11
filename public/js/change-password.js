import { HOST_NAME } from "./utils.js";


window.addEventListener('load', ()=>{
    const token = localStorage.getItem('token');
    if(!token){
        alert('Vui lòng đăng nhập!')
        window.location.href = './login.html'
    }
    document.querySelector('#retype-new-password').addEventListener('input',handleMatchNewPassword)
    document.querySelector('#my-form').addEventListener('submit', handleChangePassword)
})

const handleMatchNewPassword = (e) =>{
    const newPassword = document.querySelector('#new-password').value;
    const retype = e.target.value;
    if(retype !== newPassword){
        document.querySelector('#error').innerHTML = 'Mật khẩu nhập lại không trùng khớp!'
    }else{
        document.querySelector('#error').innerHTML = '';
    }
}

const handleChangePassword = async (e)=>{
    e.preventDefault();
    document.querySelector('#change-password-btn').innerHTML = `
                <div class="spinner-border  text-white" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
    `
    const formData = new FormData(e.currentTarget);
    if([...formData.values()].includes('')){
        alert('Vui lòng nhập đầy đủ thông tin!') ;
        document.querySelector('#change-password-btn').innerHTML = `Đổi Mật Khẩu`
        return;
    }
    const {currentPassword, newPassword, retypeNewPassword} = Object.fromEntries(formData);
    if(newPassword !== retypeNewPassword){
        alert('Mật khẩu nhập lại không trùng khớp')
        document.querySelector('#change-password-btn').innerHTML = `Đổi Mật Khẩu`
        return;
    }
    try {
        const userName = JSON.parse(localStorage.getItem('user')).userName
        console.log(userName);
        const response = await fetch(`${HOST_NAME}/user/change-password`, {
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify({
                userName:userName,
                currentPassword: currentPassword,
                newPassword: newPassword
            })
        })
        const data = await response.json();
        alert(data.message)
    } catch (error) {
        console.log(error);
    }
    document.querySelector('#change-password-btn').innerHTML = `Đổi Mật Khẩu`
}