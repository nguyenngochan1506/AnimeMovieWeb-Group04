import { HOST_NAME, debounce, getRndInteger, parseJwt } from "./utils.js";

window.addEventListener('load', () => {
    // active các link mà người dùng ấn
    hanldeActiveNavLink();


    // xử lý phần biểu mẫu
    document.querySelector('.icon-close').addEventListener('click', () => closeContact());
    document.querySelector('.show-contact').addEventListener('click', () => showContact());
    //xử lý hiển thị khi login
    showProfile();

    //logout
    const token = localStorage.getItem('token');
    if (token) document.querySelector('.btn-logout').addEventListener('click', handleLogout)

    //search
    document.querySelector('#tim-kiem').addEventListener('input', debounce(handleSearch, 500))

    //giả lập người dùng đang online
    setInterval(() => {
        let randomNumber = getRndInteger(900, 1000)
        document.querySelector('#current-user-online').innerHTML = randomNumber;
    }, 1500)
})

const hanldeActiveNavLink = () => {
    const path = window.location.pathname;
    console.log(path === '/index.html');
    switch (path) {
        case '/':
        case '/index.html':
            document.querySelector('[href="index.html"]').classList.add('fw-bold')
            break;
        case '/category.html':
            document.querySelector('[href="category.html"]').classList.add('fw-bold')
            break;
        case '/group-diary.html':
            document.querySelector('[href="group-diary.html"]').classList.add('fw-bold')
            break;
        case '/about.html':
            document.querySelector('[href="about.html"]').classList.add('fw-bold')
            break;
    }
}

const handleSearch = async (e) => {
    const keyword = e.target.value;
    const ul = document.querySelector('.resutl-search-list');
    if (keyword) {
        ul.classList.remove('d-none')
        ul.innerHTML = `<li class="resutl-search-item text-center">
                            <div class="spinner-border text-danger" role="status">
                            <span class="visually-hidden">Loading...</span>
                            </div>
                        </li>`;
        const response = await fetch(`${HOST_NAME}/anime/search/findAllByNameContainingIgnoreCaseOrEnglishNameContainingIgnoreCaseOrVietnamNameContainsIgnoreCase?name=${keyword}&englishName=${keyword}&vietnamName=${keyword}`)
        const data = await response.json();
        const animeList = data._embedded.animes;
        if (animeList.length) {
            let htmlResutl = ``;
            for (let i = 0; i < animeList.length; i++) {
                const { id, name, coverImage, view, releaseYear } = animeList[i];
                htmlResutl += `<li class="resutl-search-item d-flex" id-anime="${id}">
                <img src="${coverImage}" alt="s" height="60px" width="40px">
                <div class="ms-2">
                <div><strong>${name}</strong></div>
                <div style="font-size: 13px;">
                <div>Phát hành: <strong>${releaseYear}</strong></div>
                <div>Lượt xem: <strong>${view.toLocaleString()}</strong></div>
                </div>
                </div>
                </li><hr/>`
            }
            ul.innerHTML = htmlResutl;

            // xử lý phần click cho từng kết quả
            document.querySelectorAll('[id-anime]').forEach(anime => {
                const animeId = anime.getAttribute('id-anime')
                anime.style.cursor = 'pointer'
                anime.addEventListener('click', () => {
                    window.location.href = `./anime-details.html?animeId=${animeId}`
                })
            })
        } else {
            ul.innerHTML = '<li class="resutl-search-item">Không tìm thấy anime!</li>';
        }
    } else {
        ul.innerHTML = '';
        ul.classList.add('d-none')
    }

}

const handleLogout = () => {
    // kiểm tra đăng nhập
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
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
const showProfile = () => {
    const token = localStorage.getItem('token');
    if (token) {
        const user = JSON.parse(localStorage.getItem('user'));
        const decode = parseJwt(token);
        document.querySelector('#my-profile').innerHTML = `
        <div class="flex-shrink-0 dropstart">
                    <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="${user.avatar}" alt="mdo" width="32" height="32" class="rounded-circle">
                    </a>
                    <ul class="dropdown-menu text-small shadow" >
                    <li><span class="dropdown-item">Xin Chào: <strong>${user.userName}</strong></span></li>
                    <hr/>
                      <li><a class="dropdown-item" href="./profile.html">Thông Tin Cá Nhân</a></li>
                      <li><a class="dropdown-item" href="./anime-favorite.html">Danh Sách Yêu Thích</a></li>
                      ${decode?.isAdmin ? '<li><a class="dropdown-item" href="./admin-page-home.html">Quản Lý Phim</a></li>' : ''}
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item btn-logout" href="#">Đăng Xuất</a></li>
                    </ul>
                  </div>
        `
    } else {
        document.querySelector('#my-profile').innerHTML = `
        <a href="login.html" type="button" class="btn btn-outline-light me-2">
                    Đăng Nhập
                </a>
                
        `
    }
}
