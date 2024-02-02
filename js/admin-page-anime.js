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
    //thêm anime
    document.querySelector('#btn-add-anime').addEventListener('click', handleAddAnime);
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
        const response = await fetch(`${HOST_NAME}/anime/search/findAllByNameContainingIgnoreCaseOrEnglishNameContainingIgnoreCaseOrVietnamNameContainsIgnoreCase?name=${keyWord}&englishName=${keyWord}&vietnamName=${keyWord}`)
        const data = await response.json();
        const animeList = data._embedded.animes;

        if (animeList.length) {
            animeList.forEach(anime => {
                resultHtml += `
                <tr>
                <th>#${anime.id}</th>
                <td><img src="${anime?.coverImage}" height="60px" alt="thumb"/> ${anime?.name}</td>
                <td>${anime?.releaseYear}</td>
                <td>${anime?.view}</td>
                <td>
                    <button class="btn btn-success btn-update" anime-info='${JSON.stringify(anime)}'>Chỉnh Sửa <i class="fa fa-pencil"
                            aria-hidden="true"></i></button>
                    <button class="btn btn-danger btn-delete" anime-id="${anime.id}">Xoá <i class="fa fa-trash" aria-hidden="true"></i></button>
                </td>
            </tr>
                `
            })
        } else {
            table.innerHTML = 'Không tìm thấy anime!';
            return;
        }
    } catch (error) {
        console.log(error);
    }
    table.innerHTML = resultHtml;
    // set event cho mỗi nút sửa & delete
    document.querySelectorAll('.btn-update').forEach(btn => {
        const animeInfo = btn.getAttribute('anime-info')
        btn.addEventListener('click', () => handleUpdateAnime(animeInfo));
    })
    document.querySelectorAll('.btn-delete').forEach(btn => {
        const animeId = btn.getAttribute('anime-id')
        btn.addEventListener('click', () => handleDeleteAnime(animeId));
    })
}

const handleDeleteAnime = async (animeId) => {
    const confirmed = window.confirm(`Bạn có chắc chắn muốn xoá id ${animeId} không!`)
    if (!confirmed) return;
    try {
        const response = await fetch(`${HOST_NAME}/admin/anime/delete/${animeId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "Application/json",
                "Authorization": `Bearer ${token}`
            },
        })
        const data = await response.text();
        alert(data);
    } catch (error) {
        console.log(error);
    }
}

const handleSubmitUpdate = async (e, animeId, img) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = [...formData.values()]
    if (values.includes('')) {
        alert('vui lòng nhập đầy đủ thông tin!')
        return
    }

    const confirmed = window.confirm(`Bạn có chắc chắn muốn thay đổi id ${animeId} không!`)
    if (!confirmed) return;

    document.querySelector('#btn-update-submit').innerHTML = `
    <div class="spinner-border text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
`

    const anime = Object.fromEntries(formData);
    const categories = formData.getAll('categoryList').map(category => `the-loai/${category}`)
    const file = formData.get('coverImage');

    try {
        const response = await fetch(`${HOST_NAME}/anime/${animeId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "Application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                ...anime,
                categoryList: categories,
                coverImage: file.size ? await getBase64(file) : img
            })
        })
        if (!response.ok) {
            throw new Error("Đã xảy ra lỗi!")
        }
        const data = await response.json();
        alert(`Chỉnh Sửa Thành Công ${data.name}`)
    } catch (error) {
        alert("đã xảy ra lỗi!")
    }
    document.querySelector('#btn-update-submit').innerHTML = `Cập Nhật Thành Công`
}

const handleUpdateAnime = async (animeInfo) => {
    const { id, name, releaseYear, type, view, description, coverImage, englishName, vietnamName } = JSON.parse(animeInfo);
    const categoriesId = await getCategoriesOfAnime(id);
    const allType = JSON.parse(localStorage.getItem('allType'));
    let allTypeHtml = '';
    allType.forEach(category => {
        if (categoriesId.includes(category.id)) {
            allTypeHtml += `<option selected value="${category.id}">${category.categoryName}</option>`;
        } else {
            allTypeHtml += `<option value="${category.id}">${category.categoryName}</option>`;
        }
    })

    const myFormHTML = `
    <div class="thumb-form-add">
        <form class="my-form-add" id="my-form-update">
            <h2 class=" text-center mt-3">Chỉnh Sửa <strong>#${id}</strong></h2>
            <div class="row justify-content-start gap-5">
                <div class="mb-3 col-5">
                    <label for="add-anime-name" class="form-label fw-semibold">Tên Chính Thức</label>
                    <input value="${name}" type="text" class="form-control" id="add-anime-name" name="name" placeholder="Tên Chính Thức">
                </div>
                <div class="mb-3 col-5">
                    <label for="add-anime-name-english" class="form-label fw-semibold">Tên Tiếng Anh</label>
                    <input value="${englishName}" type="text" class="form-control" id="add-anime-name-english" name="englishName" placeholder="Tên Tiếng Anh">
                </div>
            </div>
            <div class="row justify-content-start">
                <div class="mb-3 col-5">
                    <label for="add-anime-name-vietnam" class="form-label fw-semibold">Tên Tiếng Việt</label>
                    <input value="${vietnamName}" type="text" class="form-control" id="add-anime-name-vietnam" name="vietnamName" placeholder="Tên Tiếng Việt">
                </div>
                <div class="mb-3 col-3">
                    <label for="add-release-year" class="form-label fw-semibold">Năm Sản Xuất</label>
                    <input value="${releaseYear}" type="text" class="form-control" id="add-release-year" name="releaseYear" placeholder="Năm Sản Xuất">
                </div>
                <div class="mb-3 col-3">
                    <label for="add-type-film" class="form-label fw-semibold">Loại Phim</label>
                    <input value="${type}" type="text" class="form-control" id="add-type-film" name="type" placeholder="Loại Phim">
                </div>
                <div class="row">
                    <div class="mb-3 col-4">
                        <label for="add-type" class="form-label fw-semibold">Thể Loại</label>
                        <select name="categoryList" id="type" multiple>
                            ${allTypeHtml}
                        </select>
                    </div>
                    <div class="mb-3 col-6">
                        <label for="cover-img" class="form-label">Hình Ảnh</label>
                        <input class="form-control" type="file" id="cover-img" name="coverImage">
                    </div>
                </div>
            </div>
            <div class="row justify-content-start">
                <div class="mb-3 col-12">
                    <label for="add-description" class="form-label">Mô Tả</label>
                    <textarea class="form-control" id="add-description" name="description" rows="3">${description}</textarea>
                  </div>
            </div>
            <div class="justify-content-center row">
                <div class="col-4">
                    <button type="button" class="btn btn-danger w-100" id="btn-close-add-anime">Huỷ Bỏ</button>
                </div>
                <div class="col-4">
                    <button type="submit" class="btn btn-success w-100">Lưu Chỉnh Sửa</button>
                </div>
            </div>
        </form>
    </div>
    `
    document.body.insertAdjacentHTML('afterbegin', myFormHTML);

    new MultiSelectTag('type')// dùng cho phần chọn thể loại từ multi-select-tag library

    document.querySelector('#my-form-update').addEventListener('submit', (e) => handleSubmitUpdate(e, id, coverImage))

    document.querySelector('#btn-close-add-anime').addEventListener('click', () => {
        document.querySelector('.thumb-form-add').remove();
    })
}

const handleLoadAnime = async (currentPage) => {
    document.querySelector('.table tbody').innerHTML = `
                    <div class="spinner-border text-danger" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>`;

    try {
        const response = await fetch(`${HOST_NAME}/anime?size=5&page=${currentPage}`, {
            method: "GET",
            headers: {
                "Content-Type": "Application/json"
            }
        })
        const data = await response.json();
        console.log(data);

        const listAnime = data._embedded.animes;
        const totalPage = data.page.totalPages;

        let customHTML = '';
        listAnime.map((anime) => {
            customHTML += `
                <tr>
                    <th>#${anime.id}</th>
                    <td><img src="${anime?.coverImage}" height="60px" alt="thumb"/> ${anime?.name}</td>
                    <td>${anime?.releaseYear}</td>
                    <td>${anime?.view}</td>
                    <td>
                        <button class="btn btn-success btn-update" anime-info='${JSON.stringify(anime)}'>Chỉnh Sửa <i class="fa fa-pencil"
                                aria-hidden="true"></i></button>
                        <button class="btn btn-danger btn-delete" anime-id="${anime.id}">Xoá <i class="fa fa-trash" aria-hidden="true"></i></button>
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
            const animeInfo = btn.getAttribute('anime-info')
            btn.addEventListener('click', () => handleUpdateAnime(animeInfo));
        })
        document.querySelectorAll('.btn-delete').forEach(btn => {
            const animeId = btn.getAttribute('anime-id')
            btn.addEventListener('click', () => handleDeleteAnime(animeId));
        })

        
        return currentPage;
    } catch (error) {
        console.log(error);
    }

}

const handleAddAnime = async () => {
    const allType = JSON.parse(localStorage.getItem('allType'));
    let allTypeHtml = '';
    allType.forEach(type => {
        allTypeHtml += `<option value="${type.id}">${type.categoryName}</option>`;
    })
    const myFormHTML = `
    <div class="thumb-form-add">
        <form class="my-form-add">
            <h2 class=" text-center mt-3">Thêm Mới Anime</h2>
            <div class="row justify-content-start gap-5">
                <div class="mb-3 col-5">
                    <label for="add-anime-name" class="form-label fw-semibold">Tên Chính Thức</label>
                    <input type="text" class="form-control" id="add-anime-name" name="name" placeholder="Tên Chính Thức">
                </div>
                <div class="mb-3 col-5">
                    <label for="add-anime-name-english" class="form-label fw-semibold">Tên Tiếng Anh</label>
                    <input type="text" class="form-control" id="add-anime-name-english" name="englishName" placeholder="Tên Tiếng Anh">
                </div>
            </div>
            <div class="row justify-content-start">
                <div class="mb-3 col-5">
                    <label for="add-anime-name-vietnam" class="form-label fw-semibold">Tên Tiếng Việt</label>
                    <input type="text" class="form-control" id="add-anime-name-vietnam" name="vietnamName" placeholder="Tên Tiếng Việt">
                </div>
                <div class="mb-3 col-3">
                    <label for="add-release-year" class="form-label fw-semibold">Năm Sản Xuất</label>
                    <input type="text" class="form-control" id="add-release-year" name="releaseYear" placeholder="Năm Sản Xuất">
                </div>
                <div class="mb-3 col-3">
                    <label for="add-type-film" class="form-label fw-semibold">Loại Phim</label>
                    <input type="text" class="form-control" id="add-type-film" name="type" placeholder="Loại Phim">
                </div>
            </div>
            <div class="row">
                <div class="mb-3 col-4">
                        <label for="type" class="form-label fw-semibold">Thể Loại</label>
                        <select name="categoryList" id="type" multiple>
                            ${allTypeHtml}
                        </select>
                </div>
                <div class="mb-3 col-6">
                    <label for="cover-img" class="form-label">Hình Ảnh</label>
                    <input class="form-control" type="file" id="cover-img" name="coverImage">
                </div>
            </div>
            <div class="row justify-content-start">
                <div class="mb-3 col-12">
                    <label for="add-description" class="form-label">Mô Tả</label>
                    <textarea class="form-control" id="add-description" name="description" rows="3"></textarea>
                  </div>
            </div>
            <div class="justify-content-center row">
                <div class="col-4">
                    <button type="button" class="btn btn-danger w-100" id="btn-close-add-anime">Huỷ Bỏ</button>
                </div>
                <div class="col-4">
                    <button type="submit" class="btn btn-success w-100">Thêm Mới</button>
                </div>
            </div>
        </form>
    </div>
    `

    document.body.insertAdjacentHTML('afterbegin', myFormHTML);

    new MultiSelectTag('type')// dùng cho phần chọn thể loại từ multi-select-tag library

    document.querySelector('.my-form-add').addEventListener('submit', handleSubmitAdd)

    document.querySelector('#btn-close-add-anime').addEventListener('click', () => {
        document.querySelector('.thumb-form-add').remove();
    })
}
const handleSubmitAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = [...formData.values()]
    if (values.includes('')) {
        alert('vui lòng nhập đầy đủ thông tin!')
        return
    }

    const anime = Object.fromEntries(formData);
    const categories = formData.getAll('categoryList').map(category => `the-loai/${category}`)
    const file = formData.get('coverImage');

    try {
        const response = await fetch(`${HOST_NAME}/anime`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({ ...anime, categoryList: categories, coverImage: await getBase64(file) })
        })
        if (!response.ok) {
            throw new Error("Đã xảy ra lỗi!")
        }
        const data = await response.json();
        alert(`Thêm thành công anime ${data.name}`)
    } catch (error) {
        alert("đã xảy ra lỗi!")
    }

}