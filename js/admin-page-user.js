import { HOST_NAME } from "./utils.js";

//lấy token ra
const token = localStorage.getItem('token');
window.addEventListener('load', async () => {
    //call api lấy dữ liệu
    await handleLoadUser(0).then(phanTrang => {
        //phân trang
        handlePhanTrang(phanTrang.trangHienTai + 1, phanTrang.tongSoTrang);
    })
    //add hàm xoá
    document.querySelectorAll('.delete-btn').forEach(ele =>{
        ele.addEventListener('click', ()=> handleDeleteUser(ele.getAttribute('user-id')))
    })
    //xữ lý phần search 
    document.querySelector('#btn-search').addEventListener('click', ()=>searchUser())
   
})

const searchUser = async () =>{
    //lấy nội dung cần tìm 
    const text = document.querySelector('#search-input').value;
    if(text){
        try {
            const response = await fetch(`${HOST_NAME}/nguoi-dung/search/findAllByFullNameContainingIgnoreCaseOrEmailContainingIgnoreCaseOrUserNameContainingIgnoreCase?fullName=${text}&email=${text}&userName=${text}&page=0&size=6`,{
                method:"GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            const data  = await response.json();
            const listUser = data._embedded.users
            console.log(listUser);
            let myHtml = listUser.map(user => {
                if (user.id != 1) {
                    return `
                <tr>
                      <td>${user.id}</td>
                      <td>${user.fullName}</td>
                      <td>${user.userName}</td>
                      <td>${user.email}</td>
                      <td>
                        <div>
                          <button user-id="${user.id}" class="btn btn-danger delete-btn">xóa</button>
                        </div>
                      </td>
                    </tr>
                `
                }
            }).join('');
            document.querySelector('.my-table tbody').innerHTML = myHtml;
            handlePhanTrang(data.page.number + 1, data.page.totalPages);
        } catch (error) {
            console.log(error);
        }
    }
}

const handleDeleteUser = async (id)=>{
    const dongYXoa = window.confirm(`Bạn có chắc muốn xoá user: ${id}`)
    if(dongYXoa){
        const response = await fetch(`${HOST_NAME}/admin/user/delete/${id}`, {
            method:"DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        const data  = await response.json();
        alert(data.message)
       location.reload();
    }
}


const handleLoadUser = async (page) => {
    const response = await fetch(`${HOST_NAME}/nguoi-dung?page=${page}&size=6`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then(response => response.json())
        .then(data => {
            const listUser = data._embedded.users;
            let myHtml = listUser.map(user => {
                if (user.id != 1) {
                    return `
                <tr>
                      <td>${user.id}</td>
                      <td>${user.fullName}</td>
                      <td>${user.userName}</td>
                      <td>${user.email}</td>
                      <td>
                        <div>
                          <button user-id="${user.id}" class="btn btn-danger delete-btn">xóa</button>
                        </div>
                      </td>
                    </tr>
                `
                }
            }).join('');
            document.querySelector('.my-table tbody').innerHTML = myHtml;
            return {
                trangHienTai: data.page.number,
                tongSoTrang: data.page.totalPages
            }
        })
        .catch(error => {
            console.log(error);
            alert("tải dữ liệu thất bại")
        })
    return response;
}

const handlePhanTrang = (trangHienTai, tongSoTrang) => {
    const danhSachPhanTrang = [];
    if (trangHienTai == 1) {
        danhSachPhanTrang.push(trangHienTai);
        if (tongSoTrang >= trangHienTai + 1) {
            danhSachPhanTrang.push(trangHienTai + 1)
        }
        if (tongSoTrang >= trangHienTai + 2) {
            danhSachPhanTrang.push(trangHienTai + 2)
        }
    } else if (trangHienTai == 2) {
        danhSachPhanTrang.push(trangHienTai - 1);
        danhSachPhanTrang.push(trangHienTai);
        if (tongSoTrang >= trangHienTai + 1) {
            danhSachPhanTrang.push(trangHienTai + 1)
        }
        if (tongSoTrang >= trangHienTai + 2) {
            danhSachPhanTrang.push(trangHienTai + 2)
        }
    } else if (trangHienTai > 2) {
        danhSachPhanTrang.push(trangHienTai - 2)
        danhSachPhanTrang.push(trangHienTai - 1)
        danhSachPhanTrang.push(trangHienTai)
        if (tongSoTrang >= trangHienTai + 1) {
            danhSachPhanTrang.push(trangHienTai + 1)
        }
        if (tongSoTrang >= trangHienTai + 2) {
            danhSachPhanTrang.push(trangHienTai + 2)
        }
    }
    console.log(danhSachPhanTrang);
     //xử lý phần hiển thị
     document.querySelector('#trang-dau').addEventListener('click', () => handleLoadUser(0))
     document.querySelector('#trang-cuoi').addEventListener('click', () => handleLoadUser(tongSoTrang - 1))

    let myHtml="";
    danhSachPhanTrang.map(trang => {
        if (trangHienTai != trang) {
            myHtml += `<li class="page-item my-item-${trang}"><a class="page-link" href="#">${trang}</a></li>`
        } else {
            myHtml += `
                        <li class="page-item my-item-${trang} active" aria-current="page">
                   <span class="page-link" >${trang}</span>
                    </li>`
        }
    })
    document.querySelector('.list-pagination').innerHTML = myHtml;
    //gọi hàm 
    danhSachPhanTrang.map(trang =>{
        const item =  document.querySelector(`.my-item-${trang}`);
        item.addEventListener('click', ()=> update(trang) );
    })
}
const update = (trang)=>{
    handleLoadUser(trang).then(phanTrang =>{
        handlePhanTrang(phanTrang.trangHienTai, phanTrang.tongSoTrang)
    })
}