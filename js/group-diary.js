window.addEventListener('load', () => {
    const arrWeek = [5, 6, 7];
    arrWeek.forEach((n) => {
        document.querySelector(`#week-${n}`).addEventListener('click', () => week(n))
    })
})

const week = (n) => {
    console.log("hello");
    let customHtml;
    const table = document.querySelector('.table tbody');
    const weekTitle = document.querySelector('#week-title');
    document.querySelectorAll('.week-link').forEach(week => week.classList.remove('my-active'))
    switch (n) {
        case 7:
            customHtml = `
            <tr>
            <th>#1</th>
            <td>Cập nhật design giấy & figma cho HomePage, group-diary</td>
            <td>Nguyễn Ngọc Hân</td>
            <td>26-12-2023</td>
            <td>29-12-2023</td>
            <td></td>
        </tr>
        <tr>
            <th>#2</th>
            <td>Cập nhật design giấy & figma cho Sigup, About, Admin(AnimePage)</td>
            <td>Lê Bá Khánh Duy</td>
            <td>26-12-2023</td>
            <td>29-12-2023</td>
            <td></td>
        </tr>
        <tr>
            <th>#3</th>
            <td>Cập nhật design giấy & figma cho WatchingPage, Admin(HomePage)</td>
            <td>Hoàng Lê Nguyên Mạnh</td>
            <td>26-12-2023</td>
            <td>29-12-2023</td>
            <td></td>
        </tr>
        <tr>
            <th>#4</th>
            <td>Cập nhật design giấy & figma cho DetailPage, CategoryPage, AnimeFavorite</td>
            <td>Đăng Văn Trung</td>
            <td>26-12-2023</td>
            <td>29-12-2023</td>
            <td></td>
        </tr>
        <tr>
            <th>#5</th>
            <td>Cập nhật design giấy & figma cho Login, Admin(UserPage)</td>
            <td>Nguyễn Vũ Bảo</td>
            <td>26-12-2023</td>
            <td>29-12-2023</td>
            <td></td>
        </tr>`
            document.querySelector('#week-7').classList.add('my-active')
            table.innerHTML = customHtml;
            weekTitle.innerHTML = "(Week-7)"
            break;
        case 6:
            customHtml = `
            <tr>
            <th>#1</th>
            <td>Làm chức năng cho trang admin-user</td>
            <td>Nguyễn Ngọc Hân</td>
            <td>05-12-2023</td>
            <td>07-12-2023</td>
            <td>Hoàn thành</td>
        </tr>
        <tr>
            <th>#2</th>
            <td>Làm giao diện admin-anime</td>
            <td>Lê Bá Khánh Duy</td>
            <td>05-12-2023</td>
            <td>07-12-2023</td>
            <td>Hoàn thành (Trễ 1 ngày)</td>
        </tr>
        <tr>
            <th>#3</th>
            <td>Làm chức năng load anime cho index</td>
            <td>Hoàng Lê Nguyên Mạnh</td>
            <td>05-12-2023</td>
            <td>07-12-2023</td>
            <td>Hoàn thành</td>
        </tr>
        <tr>
            <th>#4</th>
            <td>Làm giao diện cho trang AnimeFavorite</td>
            <td>Đăng Văn Trung</td>
            <td>05-12-2023</td>
            <td>07-12-2023</td>
            <td>Hoàn thành</td>
        </tr>
        <tr>
            <th>#5</th>
            <td>Làm chức năng login</td>
            <td>Nguyễn Vũ Bảo</td>
            <td>05-12-2023</td>
            <td>07-12-2023</td>
            <td>Hoàn thành</td>
        </tr>`
            document.querySelector('#week-6').classList.add('my-active')
            table.innerHTML = customHtml;
            weekTitle.innerHTML = "(Week-6)"
            break;
        case 5:
            customHtml = `
            <tr>
            <th>#1</th>
            <td>Làm Chức Năng Group Diary</td>
            <td>Nguyễn Ngọc Hân</td>
            <td>28-11-2023</td>
            <td>30-11-2023</td>
            <td>Hoàn thành</td>
        </tr>
        <tr>
            <th>#2</th>
            <td>Làm giao diện cho trang About</td>
            <td>Lê Bá Khánh Duy</td>
            <td>28-11-2023</td>
            <td>30-11-2023</td>
            <td>Hoàn thành</td>
        </tr>
        <tr>
            <th>#3</th>
            <td>Làm giao diện cho trang Admin Home Page</td>
            <td>Hoàng Lê Nguyên Mạnh</td>
            <td>28-11-2023</td>
            <td>03-12-2023</td>
            <td>Hoàn thành</td>
        </tr>
        <tr>
            <th>#4</th>
            <td>Làm giao diện cho trang Category</td>
            <td>Đăng Văn Trung</td>
            <td>28-11-2023</td>
            <td>03-12-2023</td>
            <td>Hoàn thành</td>
        </tr>
        <tr>
            <th>#5</th>
            <td>Làm giao diện cho trang Admin User Manager</td>
            <td>Nguyễn Vũ Bảo</td>
            <td>28-11-2023</td>
            <td>05-12-2023</td>
            <td>Hoàn thành</td>
        </tr>
            `
            document.querySelector('#week-5').classList.add('my-active')
            table.innerHTML = customHtml;
            weekTitle.innerHTML = "(Week-5)"
            break;
    }
}