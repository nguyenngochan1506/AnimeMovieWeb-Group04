window.addEventListener('load', () => {
    const arrWeek = [5, 6, 7, 8,9,10, 99];
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
    document.querySelector('.my-file').innerHTML='';
    switch (n) {
        case 10:
            customHtml = `
            <tr>
            <th>#1</th>
            <td>CRUD anime</td>
            <td>Nguyễn Ngọc Hân</td>
            <td>29-01-2024</td>
            <td>01-02-2024</td>
            <td>Hoàn Thành</td>
        </tr>
        <tr>
            <th>#2</th>
            <td>Load Data cho category</td>
            <td>Lê Bá Khánh Duy</td>
            <td>29-01-2024</td>
            <td>01-02-2024</td>
            <td>Hoàn Thành</td>
        </tr>
        <tr>
            <th>#3</th>
            <td>Chức năng comment</td>
            <td>Hoàng Lê Nguyên Mạnh</td>
            <td>29-01-2024</td>
            <td>01-02-2024</td>
            <td>Hoàn Thành</td>
        </tr>
        <tr>
            <th>#4</th>
            <td>Thiết kế light-theme</td>
            <td>Đăng Văn Trung</td>
            <td>29-01-2024</td>
            <td>01-02-2024</td>
            <td>Chưa Hoàn Thành</td>
        </tr>
        <tr>
            <th>#5</th>
            <td>Giao diện thay đổi mật khẩu</td>
            <td>Nguyễn Vũ Bảo</td>
            <td>29-01-2024</td>
            <td>01-02-2024</td>
            <td>Hoàn Thành</td>
        </tr>`
            document.querySelector('#week-10').classList.add('my-active')
            table.innerHTML = customHtml;
            weekTitle.innerHTML = "(Week-10)"
            break;
        case 99:
            customHtml = `
            <thead>
            <tr>
                <th>SL</th>
                <th>Nguyễn Ngọc Hân</th>
                <th>Lê Bá Khánh Duy</th>
                <th>Hoàng Lê Nguyên Mạnh</th>
                <th>Đăng Văn Trung</th>
                <th>Nguyễn Vũ Bảo</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <th>#1</th>
            <td>(Giao Diện)HomePage</td>
            <td>(Giao Diện)Admin-Anime</td>
            <td>(Giao Diện)Quên Mật Khẩu</td>
            <td>(Giao Diện)DetailPage</td>
            <td>(Giao Diện)Admin-User</td>
        </tr>
        <tr>
            <th>#2</th>
            <td>(Giao Diện)Biểu Mẫu</td>
            <td>(Giao Diện)Sigup</td>
            <td>(Giao Diện)Admin-Home</td>
            <td>(Giao Diện)(Giao Diện)Category</td>
            <td>(Giao Diện)Login</td>
        </tr>
        <tr>
        <th>#3</th>
        <td>(Chức Năng)Tìm Kiếm</td>
        <td>(Giao Diện)About</td>
        <td>(Giao Diện)Watching</td>
        <td>(Giao Diện)AnimeFavorite</td>
        <td>(Chức Năng)Quên Mật Khẩu</td>
    </tr>
     <tr>
        <th>#4</th>
        <td>(Chức Năng)Phân Labble Cho Header</td>
        <td>(Chức Năng)Logout</td>
        <td>(Chức Năng)Sigup</td>
        <td>x</td>
        <td>(Chức Năng)Login</td>
    </tr>
     <tr>
        <th>#5</th>
        <td>(Chức Năng)Group Diary</td>
        <td>x</td>
        <td>(Chức Năng)Load Data Cho Watching</td>
        <td>x</td>
        <td>(Chức Năng)Load Data cho Profile</td>
    </tr>
     <tr>
        <th>#6</th>
        <td>(Chức Năng)CRUD User</td>
        <td>x</td>
        <td>(Chức Năng)Load Data Cho HomePage</td>
        <td>x</td>
        <td>(Chức Năng)Load Data Cho Favorite</td>
    </tr>
    <tr>
        <th>#7</th>
        <td>(Chức Năng)CRUD Anime</td>
        <td>(Chức Năng)Load Data cho Category</td>
        <td>(Chức Năng)Comment</td>
        <td>x</td>
        <td>(Giao Diện)Đổi mật khẩu</td>
    </tr>
        </tbody>
        `
            document.querySelector('#week-99').classList.add('my-active')
            document.querySelector('.table').innerHTML = customHtml;
            weekTitle.innerHTML = "(Tổng Hợp Những Chức Năng Đã Làm)"
            break;
        case 9:
            customHtml = `
            <tr>
            <th>#1</th>
            <td>Phân lable cho header khi người dùng login</td>
            <td>Nguyễn Ngọc Hân</td>
            <td>25-01-2024</td>
            <td>24-01-2024</td>
            <td>hoàn thành</td>
        </tr>
        <tr>
            <th>#2</th>
            <td>Load data cho userProfile</td>
            <td>Lê Bá Khánh Duy</td>
            <td>25-01-2024</td>
            <td>24-01-2024</td>
            <td>chưa hoàn thành</td>
        </tr>
        <tr>
            <th>#3</th>
            <td>Giao diện quên mật khẩu</td>
            <td>Hoàng Lê Nguyên Mạnh</td>
            <td>25-01-2024</td>
            <td>24-01-2024</td>
            <td>hoàn thành</td>
        </tr>
        <tr>
            <th>#4</th>
            <td>Ligh-Theme cho giao diện</td>
            <td>Đăng Văn Trung</td>
            <td>25-01-2024</td>
            <td>24-01-2024</td>
            <td>chưa hoàn thành</td>
        </tr>
        <tr>
            <th>#5</th>
            <td>Chức năng quên mật khẩu</td>
            <td>Nguyễn Vũ Bảo</td>
            <td>25-01-2024</td>
            <td>24-01-2024</td>
            <td>hoàn thành</td>
        </tr>
        </tbody>
            </table>`
        const customHtml2 = `
        <table class="table table-dark table-hover">
                <thead>
                <tr>
                <th>STT</th>
                <th>Công Việc</th>
                <th>Người Thực Hiện</th>
                <th>Ngày Bắt Đầu</th>
                <th>Ngày Kết Thúc</th>
                <th>Trạng thái</th>
            </tr>
        </thead>
            <tr>
            <th>#1</th>
            <td>Chức năng Search</td>
            <td>Nguyễn Ngọc Hân</td>
            <td>25-01-2024</td>
            <td>28-01-2024</td>
            <td>hoàn thành</td>
        </tr>
        <tr>
            <th>#2</th>
            <td>chức năng đăng xuất</td>
            <td>Lê Bá Khánh Duy</td>
            <td>25-01-2024</td>
            <td>28-01-2024</td>
            <td>hoàn thành</td>
        </tr>
        <tr>
            <th>#3</th>
            <td>load data cho trang watching</td>
            <td>Hoàng Lê Nguyên Mạnh</td>
            <td>25-01-2024</td>
            <td>28-01-2024</td>
            <td>hoàn thành</td>
        </tr>
        <tr>
            <th>#4</th>
            <td>giao diện thay đổi mật khẩu</td>
            <td>Đăng Văn Trung</td>
            <td>25-01-2024</td>
            <td>28-01-2024</td>
            <td>chưa hoàn thành</td>
        </tr>
        <tr>
            <th>#5</th>
            <td>load data cho trang profile</td>
            <td>Nguyễn Vũ Bảo</td>
            <td>25-01-2024</td>
            <td>28-01-2024</td>
            <td>hoàn thành</td>
        </tr>
        `
            document.querySelector('#week-9').classList.add('my-active')
            table.innerHTML = `${customHtml}
            <h4 class="text-white text-center mt-0 mb-4 w-100 mt-4">(Week-9.2)</h4>
            ${customHtml2}
            `;
            weekTitle.innerHTML = "(Week-9)"
            break;
        case 8:
            customHtml = `
            <tr>
            <th>#1</th>
            <td>làm giao diện cho biểu mẫu liên hệ</td>
            <td>Nguyễn Ngọc Hân</td>
            <td>06-01-2023</td>
            <td>08-01-2023</td>
            <td>hoàn thành</td>
        </tr>
        <tr>
            <th>#2</th>
            <td>chức năng load data cho anime-details</td>
            <td>Lê Bá Khánh Duy</td>
            <td>06-01-2023</td>
            <td>08-01-2023</td>
            <td>hoàn thành</td>
        </tr>
        <tr>
            <th>#3</th>
            <td>chức năng đăng ký</td>
            <td>Hoàng Lê Nguyên Mạnh</td>
            <td>06-01-2023</td>
            <td>08-01-2023</td>
            <td>hoàn thành</td>
        </tr>
        <tr>
            <th>#4</th>
            <td>chức năng search</td>
            <td>Đăng Văn Trung</td>
            <td>06-01-2023</td>
            <td>08-01-2023</td>
            <td>chưa hoàn thành</td>
        </tr>
        <tr>
            <th>#5</th>
            <td>chức năng load data cho anime favorite</td>
            <td>Nguyễn Vũ Bảo</td>
            <td>06-01-2023</td>
            <td>08-01-2023</td>
            <td>hoàn thành</td>                                                                             
        </tr>
        `
       document.querySelector('.my-file').innerHTML=`
       <div class="h3">Các File Thiết Kế</div>
                <ul class="d-flex">
                    <li><strong>Hân</strong>
                        <ul>
                            <li>Home Page: 
                                <ul>
                                    <li>Giấy: <a class="link-info" href="./img/lab-07/homepage.png" target="_blank" rel="noopener noreferrer">File Giấy</a></li>
                                </ul>
                            </li>
                            <li>Group-Diary: 
                                <ul>
                                    <li>Giấy: <a class="link-info" href="./img/lab-07/group-diary.png" target="_blank" rel="noopener noreferrer">File Giấy</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <br>
                    <li><strong>Trung</strong>
                        <ul>
                            <li>Details-Page: 
                                <ul>
                                    <li>Giấy: <strong>null</strong></li>
                                </ul>
                            </li>
                            <li>Category-Page: 
                                <ul>
                                    <li>Giấy: <strong>null</strong></li>
                                </ul>
                            </li>
                            <li>Anime-Favorite-Page: 
                                <ul>
                                    <li>Giấy: <strong>null</strong></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <br>
                    <li><strong>Bảo</strong>
                        <ul>
                            <li>Login: 
                                <ul>
                                    <li>Giấy: <a class="link-info" href="./img/lab-07/login.jpg" target="_blank" rel="noopener noreferrer">File Giấy</a></li>
                                </ul>
                            </li>
                            <li>Admin-User-Page: 
                                <ul>
                                    <li>Giấy: <a class="link-info" href="./img/lab-07/admin-user-page.jpg" target="_blank" rel="noopener noreferrer">File Giấy</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <br>
                    <li><strong>Mạnh</strong>
                        <ul>
                            <li>Watching-Page: 
                                <ul>
                                    <li>Giấy: <a class="link-info" href="./img/lab-07/watchingpage.jpg" target="_blank" rel="noopener noreferrer">File Giấy</a></li>
                                </ul>
                            </li>
                            <li>Admin-Home-Page: 
                                <ul>
                                    <li>Giấy: <a class="link-info" href="./img/lab-07/admin-home-page.jpg" target="_blank" rel="noopener noreferrer">File Giấy</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <br>
                    <li><strong>Duy</strong>
                        <ul>
                            <li>Sigup: 
                                <ul>
                                    <li>Giấy: <a class="link-info" href="./img/lab-07/sigup.jpg" target="_blank" rel="noopener noreferrer">File Giấy</a></li>
                                </ul>
                            </li>
                            <li>About: 
                                <ul>
                                    <li>Giấy: <a class="link-info" href="./img/lab-07/about.jpg" target="_blank" rel="noopener noreferrer">File Giấy</a></li>
                                </ul>
                            </li>
                            <li>Admin-Anime-Page: 
                                <ul>
                                    <li>Giấy: <a class="link-info" href="./img/lab-07/admin-anime-page.jpg" target="_blank" rel="noopener noreferrer">File Giấy</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
       `

            document.querySelector('#week-8').classList.add('my-active')
            table.innerHTML = customHtml;
            weekTitle.innerHTML = "(Week-8)"
            break;
        case 7:
            customHtml = `
            <tr>
            <th>#1</th>
            <td>Cập nhật design giấy & figma cho HomePage, group-diary</td>
            <td>Nguyễn Ngọc Hân</td>
            <td>26-12-2023</td>
            <td>29-12-2023</td>
            <td>hoàn thành</td>
        </tr>
        <tr>
            <th>#2</th>
            <td>Cập nhật design giấy & figma cho Sigup, About, Admin(AnimePage)</td>
            <td>Lê Bá Khánh Duy</td>
            <td>26-12-2023</td>
            <td>29-12-2023</td>
            <td>hoàn thành</td>
        </tr>
        <tr>
            <th>#3</th>
            <td>Cập nhật design giấy & figma cho WatchingPage, Admin(HomePage)</td>
            <td>Hoàng Lê Nguyên Mạnh</td>
            <td>26-12-2023</td>
            <td>29-12-2023</td>
            <td>hoàn thành</td>
        </tr>
        <tr>
            <th>#4</th>
            <td>Cập nhật design giấy & figma cho DetailPage, CategoryPage, AnimeFavorite</td>
            <td>Đăng Văn Trung</td>
            <td>26-12-2023</td>
            <td>29-12-2023</td>
            <td>chưa hoàn thành</td>
        </tr>
        <tr>
            <th>#5</th>
            <td>Cập nhật design giấy & figma cho Login, Admin(UserPage)</td>
            <td>Nguyễn Vũ Bảo</td>
            <td>26-12-2023</td>
            <td>29-12-2023</td>
            <td>hoàn thành</td>
        </tr>
        `
       document.querySelector('.my-file').innerHTML=`
       <div class="h3">Các File Thiết Kế</div>
                <ul class="d-flex">
                    <li><strong>Hân</strong>
                        <ul>
                            <li>Home Page: 
                                <ul>
                                    <li>Giấy: <a class="link-info" href="./img/lab-07/homepage.png" target="_blank" rel="noopener noreferrer">File Giấy</a></li>
                                    <li>Figma: <a class="link-info" href="https://www.figma.com/community/file/1322581491249749941" target="_blank">Link Figma</a></li>
                                </ul>
                            </li>
                            <li>Group-Diary: 
                                <ul>
                                    <li>Giấy: <a class="link-info" href="./img/lab-07/group-diary.png" target="_blank" rel="noopener noreferrer">File Giấy</a></li>
                                    <li>Figma: <a class="link-info" href="https://www.figma.com/community/file/1322583971132871609" target="_blank">Link Figma</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <br>
                    <li><strong>Trung</strong>
                        <ul>
                            <li>Details-Page: 
                                <ul>
                                    <li>Giấy: <strong>null</strong></li>
                                    <li>Figma: <strong>null</strong></li>
                                </ul>
                            </li>
                            <li>Category-Page: 
                                <ul>
                                    <li>Giấy: <strong>null</strong></li>
                                    <li>Figma: <strong>null</strong></li>
                                </ul>
                            </li>
                            <li>Anime-Favorite-Page: 
                                <ul>
                                    <li>Giấy: <strong>null</strong></li>
                                    <li>Figma: <strong>null</strong></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <br>
                    <li><strong>Bảo</strong>
                        <ul>
                            <li>Login: 
                                <ul>
                                    <li>Giấy: <a class="link-info" href="./img/lab-07/login.jpg" target="_blank" rel="noopener noreferrer">File Giấy</a></li>
                                    <li>Figma: <a class="link-info" href="https://www.figma.com/file/X4o8RNTHll3IrrIuKXH3Up/Login?type=design&mode=design&t=g83DUzwyHMmawGti-0" target="_blank">Link Figma</a></li>
                                </ul>
                            </li>
                            <li>Admin-User-Page: 
                                <ul>
                                    <li>Giấy: <a class="link-info" href="./img/lab-07/admin-user-page.jpg" target="_blank" rel="noopener noreferrer">File Giấy</a></li>
                                    <li>Figma: <a class="link-info" href="https://www.figma.com/file/IB02lMI3S4QaxvXJfg7RLT/page-user?type=design&node-id=0-1&mode=design&t=KYBjZe39Fb5XcrOG-0" target="_blank">Link Figma</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <br>
                    <li><strong>Mạnh</strong>
                        <ul>
                            <li>Watching-Page: 
                                <ul>
                                    <li>Giấy: <a class="link-info" href="./img/lab-07/watchingpage.jpg" target="_blank" rel="noopener noreferrer">File Giấy</a></li>
                                    <li>Figma: <a class="link-info" href="https://www.figma.com/file/hDuepywanvNOqjxevRDZaO/Untitled?type=design&node-id=0%3A1&mode=design&t=SM2DxZ7VQW4MtBZt-1" target="_blank">Link Figma</a></li>
                                </ul>
                            </li>
                            <li>Admin-Home-Page: 
                                <ul>
                                    <li>Giấy: <a class="link-info" href="./img/lab-07/admin-home-page.jpg" target="_blank" rel="noopener noreferrer">File Giấy</a></li>
                                    <li>Figma: <a class="link-info" href="https://www.figma.com/file/hDuepywanvNOqjxevRDZaO/Untitled?type=design&node-id=0%3A1&mode=design&t=SM2DxZ7VQW4MtBZt-1" target="_blank">Link Figma</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <br>
                    <li><strong>Duy</strong>
                        <ul>
                            <li>Sigup: 
                                <ul>
                                    <li>Giấy: <a class="link-info" href="./img/lab-07/sigup.jpg" target="_blank" rel="noopener noreferrer">File Giấy</a></li>
                                    <li>Figma: <a class="link-info" href="https://www.figma.com/file/dziDi2j4dU2HXh2sQ4N6VA/Design-for-Animeweb?type=design&node-id=0%3A1&mode=design&t=PE7BOOTWFKejUJGj-1" target="_blank">Link Figma</a></li>
                                </ul>
                            </li>
                            <li>About: 
                                <ul>
                                    <li>Giấy: <a class="link-info" href="./img/lab-07/about.jpg" target="_blank" rel="noopener noreferrer">File Giấy</a></li>
                                    <li>Figma: <a class="link-info" href="https://www.figma.com/file/dziDi2j4dU2HXh2sQ4N6VA/Design-for-Animeweb?type=design&node-id=0%3A1&mode=design&t=PE7BOOTWFKejUJGj-1" target="_blank">Link Figma</a></li>
                                </ul>
                            </li>
                            <li>Admin-Anime-Page: 
                                <ul>
                                    <li>Giấy: <a class="link-info" href="./img/lab-07/admin-anime-page.jpg" target="_blank" rel="noopener noreferrer">File Giấy</a></li>
                                    <li>Figma: <a class="link-info" href="https://www.figma.com/file/dziDi2j4dU2HXh2sQ4N6VA/Design-for-Animeweb?type=design&node-id=0%3A1&mode=design&t=PE7BOOTWFKejUJGj-1" target="_blank">Link Figma</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
       `

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