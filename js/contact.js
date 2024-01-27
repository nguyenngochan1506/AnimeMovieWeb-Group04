import { parseJwt } from "./utils.js";

window.addEventListener('load', () => {
    // xử lý phần biểu mẫu
    document.querySelector('.icon-close').addEventListener('click', () => closeContact());
    document.querySelector('.show-contact').addEventListener('click', () => showContact());
        //xử lý hiển thị khi login
        showProfile();

        //logout
        const token = localStorage.getItem('token');
        if(token) document.querySelector('.btn-logout').addEventListener('click',handleLogout)
})
const handleLogout = () => {
    // kiểm tra đăng nhập
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if(token && user){
        localStorage.clear();
        window.location.href = './index.html'
        return;
    }
    alert('bạn chưa đăng nhập')
}

const closeContact = () => {
    document.querySelector('#contact').classList.add('close-contact')
}
const showContact = () => {
    document.querySelector('#contact').classList.remove('close-contact')
        
}
const showProfile = ()=>{
    const token = localStorage.getItem('token');
    if(token){
        const user = JSON.parse(localStorage.getItem('user'));
        const decode = parseJwt(token);
        document.querySelector('#my-profile').innerHTML=`
        <div class="flex-shrink-0 dropstart">
                    <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="${user.avatar}" alt="mdo" width="32" height="32" class="rounded-circle">
                    </a>
                    <ul class="dropdown-menu text-small shadow" >
                    <li><span class="dropdown-item">Xin Chào: <strong>${user.userName}</strong></span></li>
                    <hr/>
                      <li><a class="dropdown-item" href="./../profile.html">Thông Tin Cá Nhân</a></li>
                      <li><a class="dropdown-item" href="./../anime-favorite.html">Danh Sách Yêu Thích</a></li>
                      ${decode?.isAdmin ? '<li><a class="dropdown-item" href="./../admin-page-home.html">Quản Lý Phim</a></li>' : ''}
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item btn-logout" href="#">Đăng Xuất</a></li>
                    </ul>
                  </div>
        `
    }else{
        document.querySelector('#my-profile').innerHTML=`
        <a href="login.html" type="button" class="btn btn-outline-light me-2">
                    Đăng Nhập
                </a>
                
        `
    }
}
