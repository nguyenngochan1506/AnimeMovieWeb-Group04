import { HOST_NAME } from "./utils.js";

window.addEventListener('load', () => {
    //lấy token ra
    const token = localStorage.getItem('token');
    //call api lấy dữ liệu
    handleLoadUser(0, token);
})

const handleLoadUser = async (page, token) => {
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
                          <button class="btn btn-danger">xóa</button>
                        </div>
                      </td>
                    </tr>
                `
                }
            }).join('');
    
            document.querySelector('.my-table tbody').innerHTML = myHtml;
            //phân trang
            handlePhanTrang(data.page.number + 1, data.page.totalPages);
        })
        .catch(error => {
            console.log(error);
            alert("tải dữ liệu thất bại")
        })
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
    //xử lý phần hiển thị

}