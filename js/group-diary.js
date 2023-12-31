window.addEventListener('load', () => {
    const arrWeek = [5, 6, 7, 8];
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