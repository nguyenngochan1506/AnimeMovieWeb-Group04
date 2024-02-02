import { HOST_NAME, getAllCategories, getBase64, getCategoriesOfAnime, parseJwt } from './utils.js'

const token = localStorage.getItem('token');
getAllCategories().then(data => {
    localStorage.setItem('allType', JSON.stringify(data))
})

window.addEventListener('load', () => {
    // kiểm tra quyền đăng nhập
    const token = localStorage.getItem('token')
    if (!token) {
        alert('Vui lòng đăng nhập!')
        window.location.href = './login.html';
    }
    const tokenDecode = parseJwt(token);
    if (!tokenDecode.isAdmin) {
        alert('Bạn không có quyền truy cập!')
        window.location.href = './index.html';
    }
    document.querySelector('#btn-search').addEventListener('click', handleSearch)
    //load anime
    handleLoadAnime(0)
        .then((currentPage) => {
            document.querySelectorAll('.list-page-item').forEach(item => {
                const numOfPage = Number.parseInt(item.textContent);
                item.addEventListener('click', () => handleLoadAnime(numOfPage - 1))
            })
        })
})

const handleSearch = async () => {
    const keyWord = document.querySelector('#input-search').value;
    if (!keyWord) return;

    const table = document.querySelector('.table tbody');
    document.querySelector('.product__pagination').innerHTML = '';

    table.innerHTML = `
                <div class="spinner-border text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>`;
    let resultHtml = '';

    try {
        const response = await fetch(`${HOST_NAME}/nguoi-dung/search/findAllByFullNameContainingIgnoreCaseOrEmailContainingIgnoreCaseOrUserNameContainingIgnoreCase?fullName=${keyWord}&email=${keyWord}&userName=${keyWord}`,{
            method:"GET",
            headers:{
                "Content-Type":"Application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await response.json();
        const userList = data._embedded.users;

        if (userList.length) {
            userList.forEach(user => {
                resultHtml += `
                <tr>
                <th>#${user.id}</th>
                <td><img src="${user?.avatar || './img/user-icon-2.png'}" height="30px" alt="thumb" /> ${user?.fullName}</td>
                <td>${user?.userName}</td>
                <td>${user?.email}</td>
                <td>
                    <button class="btn btn-success btn-update" user-info='${JSON.stringify(user)}'>Chỉnh Sửa <i class="fa fa-pencil"
                            aria-hidden="true"></i></button>
                    <button class="btn btn-danger btn-delete" id="btn-delete" user-id="${user.id}">Xoá <i class="fa fa-trash" aria-hidden="true"></i></button>
                </td>
            </tr>
                `
            })
        } else {
            table.innerHTML = 'Không tìm thấy người dùng!';
            return;
        }
    } catch (error) {
        console.log(error);
    }
    table.innerHTML = resultHtml;
    // set event cho mỗi nút sửa & delete
    document.querySelectorAll('.btn-update').forEach(btn => {
        const userInfo = btn.getAttribute('user-info')
        btn.addEventListener('click', () => handleUpdateAnime(userInfo));
    })
    document.querySelectorAll('.btn-delete').forEach(btn => {
        const userId = btn.getAttribute('user-id')
        btn.addEventListener('click', () => handleDeleteAnime(userId));
    })
}

const handleSubmitUpdate = async (e, userId, avatar) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = [...formData.values()]
    if (values.includes('')) {
        alert('vui lòng nhập đầy đủ thông tin!')
        return
    }

    const confirmed = window.confirm(`Bạn có chắc chắn muốn thay đổi id ${userId} không!`)
    if (!confirmed) return;

    document.querySelector('#btn-update-submit').innerHTML = `
                        <div class="spinner-border text-danger" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
    `
    const user = Object.fromEntries(formData);
    const file = formData.get('avatar');
    console.log({
                    ...user,
                    avatar: file.size ? await getBase64(file) : avatar
                });

    try {
        const response = await fetch(`${HOST_NAME}/nguoi-dung/${userId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "Application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                ...user,
                avatar: file.size ? await getBase64(file) : avatar
            })
        })
        if (!response.ok) {
            throw new Error("Đã xảy ra lỗi!")
        }
        const data = await response.json();
    } catch (error) {
        alert("đã xảy ra lỗi!")
    }
    document.querySelector('#btn-update-submit').innerHTML = `Cập Nhật Thành Công`
}


const handleUpdateAnime = async (userInfo) => {
    const { id, userName, avatar, email, fullName} = JSON.parse(userInfo);

    const myFormHTML = `
    <div class="thumb-form-add">
        <form class="my-form-add" id="my-form-update">
            <h2 class=" text-center mt-3">Chỉnh Sửa <strong>#${id}</strong></h2>
            <div class="row justify-content-start gap-5">
                <div class="mb-3 col-5">
                    <label for="add-anime-name" class="form-label fw-semibold">Tên Đăng Nhập</label>
                    <input value="${userName}" type="text" class="form-control" id="update-user-name" name="userName" placeholder="Tên Đăng Nhập">
                </div>
                <div class="mb-3 col-5">
                    <label for="add-anime-name-english" class="form-label fw-semibold">Tên Người Dùng</label>
                    <input value="${fullName}" type="text" class="form-control" id="update-user-name-full" name="fullName" placeholder="Tên Người Dùng">
                </div>
            </div>
            <div class="row justify-content-start">
                <div class="mb-3 col-5">
                    <label for="add-anime-name-vietnam" class="form-label fw-semibold">Email</label>
                    <input value="${email}" type="text" class="form-control" id="update-user-email" name="email" placeholder="Email">
                </div>
                <div class="mb-3 col-6">
                        <label for="avatar" class="form-label">Hình Ảnh</label>
                        <input class="form-control" type="file" id="avatar" name="avatar">
                    </div>
            </div>
            <div class="justify-content-center row">
                <div class="col-4">
                    <button type="button" class="btn btn-danger w-100" id="btn-close-add-anime">Huỷ Bỏ</button>
                </div>
                <div class="col-4">
                    <button type="submit" class="btn btn-success w-100" id="btn-update-submit">Lưu Chỉnh Sửa</button>
                </div>
            </div>
        </form>
    </div>
    `
    document.body.insertAdjacentHTML('afterbegin', myFormHTML);

    document.querySelector('#my-form-update').addEventListener('submit', (e) => handleSubmitUpdate(e, id, avatar))

    document.querySelector('#btn-close-add-anime').addEventListener('click', () => {
        document.querySelector('.thumb-form-add').remove();
    })
}

const handleDeleteAnime = async (userId) => {
    const confirmed = window.confirm(`Bạn có chắc chắn muốn xoá id ${userId} không!`)
    if (!confirmed) return;
    document.querySelector(`#btn-delete[user-id="${userId}"]`).innerHTML = `
                        <div class="spinner-border text-white" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
    `;
    try {
        const response = await fetch(`${HOST_NAME}/admin/user/delete/${userId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "Application/json",
                "Authorization": `Bearer ${token}`
            },
        })
        const data = await response.json();
    } catch (error) {
        console.log(error);
    }
    document.querySelector(`#btn-delete[user-id="${userId}"]`).innerHTML = `Đã Xoá!`
}

const handleLoadAnime = async (currentPage) => {
    document.querySelector('.table tbody').innerHTML = `
                    <div class="spinner-border text-danger" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>`;

    try {
        const response = await fetch(`${HOST_NAME}/nguoi-dung?size=5&page=${currentPage}&sort=id`, {
            method: "GET",
            headers: {
                "Content-Type": "Application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await response.json();
        console.log(data);

        const listUser = data._embedded.users;
        const totalPage = data.page.totalPages;

        let customHTML = '';
        listUser.map((user) => {
            if(user.id == 1){
                return;
            }
            customHTML += `
                <tr>
                    <th>#${user.id}</th>
                    <td><img src="${user?.avatar || './img/user-icon-2.png'}" height="30px" alt="thumb" /> ${user?.fullName}</td>
                    <td>${user?.userName}</td>
                    <td>${user?.email}</td>
                    <td>
                        <button class="btn btn-success btn-update" user-info='${JSON.stringify(user)}'>Chỉnh Sửa <i class="fa fa-pencil"
                                aria-hidden="true"></i></button>
                        <button class="btn btn-danger btn-delete" id="btn-delete" user-id="${user.id}">Xoá <i class="fa fa-trash" aria-hidden="true"></i></button>
                    </td>
                </tr>
            `
        })
        document.querySelector('.table tbody').innerHTML = customHTML

        // xử lý phân trang
        let listPage = '';
        const prePage = `<a href="#"><i class="fa fa-angle-double-left" id="prePage"></i></a>`;
        const nextPage = `<a href="#"><i class="fa fa-angle-double-right" id="nextPage"></i></a>`;

        for (let i = 0; i < totalPage; i++) {
            if (currentPage == i) {
                listPage += ` <a href="#" class="current-page">${i + 1}</a>`
            } else {
                listPage += `<a class="list-page-item" href="#">${i + 1}</a>`
            }
        }
        if (currentPage < 1) {
            document.querySelector('.product__pagination').innerHTML = listPage + nextPage;
        } else if (currentPage === totalPage - 1) {
            document.querySelector('.product__pagination').innerHTML = prePage + listPage;
        } else {
            document.querySelector('.product__pagination').innerHTML = prePage + listPage + nextPage;
        }
        //  add sự kiện cho từng item
        document.querySelectorAll('.list-page-item').forEach(item => {
            const numOfPage = Number.parseInt(item.textContent);
            item.addEventListener('click', () => handleLoadAnime(numOfPage - 1))
        })
        //    add cho đầu và cuối
        const prePageEle = document.querySelector('#prePage');
        const nextPageEle = document.querySelector('#nextPage');
        if (prePageEle) {
            prePageEle.addEventListener('click', () => handleLoadAnime(currentPage - 1))
        }
        if (nextPageEle) {
            nextPageEle.addEventListener('click', () => handleLoadAnime(currentPage + 1))
        }
        // set event cho mỗi nút sửa & delete
        document.querySelectorAll('.btn-update').forEach(btn => {
            const userInfo = btn.getAttribute('user-info')
            btn.addEventListener('click', () => handleUpdateAnime(userInfo));
        })
        document.querySelectorAll('.btn-delete').forEach(btn => {
            const userId = btn.getAttribute('user-id')
            btn.addEventListener('click', () => handleDeleteAnime(userId));
        })

        
        return currentPage;
    } catch (error) {
        console.log(error);
    }

}