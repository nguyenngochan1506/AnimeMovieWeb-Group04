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
            <td>[Function] CRUD anime</td>
            <td>Nguyễn Ngọc Hân</td>
            <td>29-01-2024</td>
            <td>01-02-2024</td>
            <td>Complete</td>
        </tr>
        <tr>
            <th>#2</th>
            <td>[Function] Load Data - Category page</td>
            <td>Lê Bá Khánh Duy</td>
            <td>29-01-2024</td>
            <td>01-02-2024</td>
            <td>Complete</td>
        </tr>
        <tr>
            <th>#3</th>
            <td>[Function] Comment</td>
            <td>Hoàng Lê Nguyên Mạnh</td>
            <td>29-01-2024</td>
            <td>01-02-2024</td>
            <td>Complete</td>
        </tr>
        <tr>
            <th>#4</th>
            <td>[Interface] Design Light Theme</td>
            <td>Đăng Văn Trung</td>
            <td>29-01-2024</td>
            <td>01-02-2024</td>
            <td>Incomplete</td>
        </tr>
        <tr>
            <th>#5</th>
            <td>[Interface] Change Password</td>
            <td>Nguyễn Vũ Bảo</td>
            <td>29-01-2024</td>
            <td>01-02-2024</td>
            <td>Complete</td>
        </tr>`
            document.querySelector('#week-10').classList.add('my-active')
            table.innerHTML = customHtml;
            weekTitle.innerHTML = "(Week-10)"
            break;
        case 99:
            customHtml = `
            <thead>
            <tr>
                <th>#</th>
                <th>Work</th>
                <th>Implementer</th>
                <th>Start day</th>
                <th>End day</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <th>#1</th>
            <td>[Interface] Homepage</td>
            <td>[Interface] Admin-Anime</td>
            <td>[Interface] Password recover</td>
            <td>[Interface] Detail</td>
            <td>[Interface] Admin-User</td>
        </tr>
        <tr>
            <th>#2</th>
            <td>[Interface] Contact Form</td>
            <td>[Interface] Sign up</td>
            <td>[Interface] Admin-Home</td>
            <td>[Interface] Category</td>
            <td>[Interface] Sign In</td>
        </tr>
        <tr>
        <th>#3</th>
        <td>[Function] Search </td>
        <td>[Interface] About</td>
        <td>[Interface] Watching</td>
        <td>[Interface] Favorite</td>
        <td>[Function] Password Recorver</td>
    </tr>
     <tr>
        <th>#4</th>
        <td>[Function] Lables for header</td>
        <td>[Function] Logout</td>
        <td>[Function] Sign Up</td>
        <td>x</td>
        <td>[Function] Sign In</td>
    </tr>
     <tr>
        <th>#5</th>
        <td>[Function] Group Diary</td>
        <td>x</td>
        <td>[Function] Load Data-Watching</td>
        <td>x</td>
        <td>[Function] Load Data-Profile</td>
    </tr>
     <tr>
        <th>#6</th>
        <td>[Function] CRUD User</td>
        <td>x</td>
        <td>[Function] Load Data-Homepage</td>
        <td>x</td>
        <td>[Function] Load Data-Favorite</td>
    </tr>
    <tr>
        <th>#7</th>
        <td>[Function] CRUD Anime</td>
        <td>[Function] Load Data-Category</td>
        <td>[Function] Comment</td>
        <td>x</td>
        <td>[Interface] Change Password</td>
    </tr>
        </tbody>
        `
            document.querySelector('#week-99').classList.add('my-active')
            document.querySelector('.table').innerHTML = customHtml;
            weekTitle.innerHTML = "(Compilation of Completed Features)"
            break;
        case 9:
            customHtml = `
            <tr>
            <th>#1</th>
            <td>[Function] Labeling the header when user log in</td>
            <td>Nguyễn Ngọc Hân</td>
            <td>25-01-2024</td>
            <td>24-01-2024</td>
            <td>Complete</td>
        </tr>
        <tr>
            <th>#2</th>
            <td>[Function] Load data for userProfile page</td>
            <td>Lê Bá Khánh Duy</td>
            <td>25-01-2024</td>
            <td>24-01-2024</td>
            <td>Incomplete</td>
        </tr>
        <tr>
            <th>#3</th>
            <td>[Interface] Forgot password page</td>
            <td>Hoàng Lê Nguyên Mạnh</td>
            <td>25-01-2024</td>
            <td>24-01-2024</td>
            <td>Complete</td>
        </tr>
        <tr>
            <th>#4</th>
            <td>[Interface] Design light theme</td>
            <td>Đăng Văn Trung</td>
            <td>25-01-2024</td>
            <td>24-01-2024</td>
            <td>Incomplete</td>
        </tr>
        <tr>
            <th>#5</th>
            <td>[Function] Forgot password</td>
            <td>Nguyễn Vũ Bảo</td>
            <td>25-01-2024</td>
            <td>24-01-2024</td>
            <td>Complete</td>
        </tr>
        </tbody>
            </table>`
        const customHtml2 = `
        <table class="table table-dark table-hover">
                <thead>
                <tr>
                <th>#</th>
                <th>Work</th>
                <th>Implementer</th>
                <th>Start day</th>
                <th>End day</th>
                <th>Status</th>
            </tr>
        </thead>
            <tr>
            <th>#1</th>
            <td>[Function] Search</td>
            <td>Nguyễn Ngọc Hân</td>
            <td>25-01-2024</td>
            <td>28-01-2024</td>
            <td>Complete</td>
        </tr>
        <tr>
            <th>#2</th>
            <td>[Function] Sign Out</td>
            <td>Lê Bá Khánh Duy</td>
            <td>25-01-2024</td>
            <td>28-01-2024</td>
            <td>Complete</td>
        </tr>
        <tr>
            <th>#3</th>
            <td>[Function] Load data for watching page</td>
            <td>Hoàng Lê Nguyên Mạnh</td>
            <td>25-01-2024</td>
            <td>28-01-2024</td>
            <td>Complete</td>
        </tr>
        <tr>
            <th>#4</th>
            <td>[Interface] Change password page</td>
            <td>Đăng Văn Trung</td>
            <td>25-01-2024</td>
            <td>28-01-2024</td>
            <td>Incomplete</td>
        </tr>
        <tr>
            <th>#5</th>
            <td>[Fucntion] Load data for profile page</td>
            <td>Nguyễn Vũ Bảo</td>
            <td>25-01-2024</td>
            <td>28-01-2024</td>
            <td>Complete</td>
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
            <td>[Interface] Contact Form</td>
            <td>Nguyễn Ngọc Hân</td>
            <td>06-01-2023</td>
            <td>08-01-2023</td>
            <td>Complete</td>
        </tr>
        <tr>
            <th>#2</th>
            <td>[Function] Load data for detail page</td>
            <td>Lê Bá Khánh Duy</td>
            <td>06-01-2023</td>
            <td>08-01-2023</td>
            <td>Complete</td>
        </tr>
        <tr>
            <th>#3</th>
            <td>[Function] Sign Up</td>
            <td>Hoàng Lê Nguyên Mạnh</td>
            <td>06-01-2023</td>
            <td>08-01-2023</td>
            <td>Complete</td>
        </tr>
        <tr>
            <th>#4</th>
            <td>[Function] Search</td>
            <td>Đăng Văn Trung</td>
            <td>06-01-2023</td>
            <td>08-01-2023</td>
            <td>Incomplete</td>
        </tr>
        <tr>
            <th>#5</th>
            <td>[Function] Load Data for Favorite page</td>
            <td>Nguyễn Vũ Bảo</td>
            <td>06-01-2023</td>
            <td>08-01-2023</td>
            <td>Complete</td>                                                                             
        </tr>
        `
       document.querySelector('.my-file').innerHTML=`
       <div class="h3">Design Files</div>
                <ul class="d-flex">
                    <li><strong>Hân</strong>
                        <ul>
                            <li>Home Page: 
                                <ul>
                                    <li>Paper: <a class="link-info" href="./img/lab-07/homepage.png" target="_blank" rel="noopener noreferrer">Paper Design</a></li>
                                </ul>
                            </li>
                            <li>Group-Diary: 
                                <ul>
                                    <li>Paper: <a class="link-info" href="./img/lab-07/group-diary.png" target="_blank" rel="noopener noreferrer">Paper Design</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <br>
                    <li><strong>Trung</strong>
                        <ul>
                            <li>Details-Page: 
                                <ul>
                                    <li>Paper: <strong>null</strong></li>
                                </ul>
                            </li>
                            <li>Category-Page: 
                                <ul>
                                    <li>Paper: <strong>null</strong></li>
                                </ul>
                            </li>
                            <li>Anime-Favorite-Page: 
                                <ul>
                                    <li>Paper: <strong>null</strong></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <br>
                    <li><strong>Bảo</strong>
                        <ul>
                            <li>Login: 
                                <ul>
                                    <li>Paper: <a class="link-info" href="./img/lab-07/login.jpg" target="_blank" rel="noopener noreferrer">Paper Design</a></li>
                                </ul>
                            </li>
                            <li>Admin-User-Page: 
                                <ul>
                                    <li>Paper: <a class="link-info" href="./img/lab-07/admin-user-page.jpg" target="_blank" rel="noopener noreferrer">Paper Design</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <br>
                    <li><strong>Mạnh</strong>
                        <ul>
                            <li>Watching-Page: 
                                <ul>
                                    <li>Paper: <a class="link-info" href="./img/lab-07/watchingpage.jpg" target="_blank" rel="noopener noreferrer">Paper Design</a></li>
                                </ul>
                            </li>
                            <li>Admin-Home-Page: 
                                <ul>
                                    <li>Paper: <a class="link-info" href="./img/lab-07/admin-home-page.jpg" target="_blank" rel="noopener noreferrer">Paper Design</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <br>
                    <li><strong>Duy</strong>
                        <ul>
                            <li>Sigup: 
                                <ul>
                                    <li>Paper: <a class="link-info" href="./img/lab-07/sigup.jpg" target="_blank" rel="noopener noreferrer">Paper Design</a></li>
                                </ul>
                            </li>
                            <li>About: 
                                <ul>
                                    <li>Paper: <a class="link-info" href="./img/lab-07/about.jpg" target="_blank" rel="noopener noreferrer">Paper Design</a></li>
                                </ul>
                            </li>
                            <li>Admin-Anime-Page: 
                                <ul>
                                    <li>Paper: <a class="link-info" href="./img/lab-07/admin-anime-page.jpg" target="_blank" rel="noopener noreferrer">Paper Design</a></li>
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
            <td>Update paper designs & figma designs for HomePage and group diary</td>
            <td>Nguyễn Ngọc Hân</td>
            <td>26-12-2023</td>
            <td>29-12-2023</td>
            <td>Complete</td>
        </tr>
        <tr>
            <th>#2</th>
            <td>Update paper designs & figma designs for Sign Up, About and Admin(AnimePage)</td>
            <td>Lê Bá Khánh Duy</td>
            <td>26-12-2023</td>
            <td>29-12-2023</td>
            <td>Complete</td>
        </tr>
        <tr>
            <th>#3</th>
            <td>Update paper designs & figma designs for Watching and Admin(HomePage)</td>
            <td>Hoàng Lê Nguyên Mạnh</td>
            <td>26-12-2023</td>
            <td>29-12-2023</td>
            <td>Complete</td>
        </tr>
        <tr>
            <th>#4</th>
            <td>Update paper designs & figma designs for Detail, Category and Favorite page</td>
            <td>Đăng Văn Trung</td>
            <td>26-12-2023</td>
            <td>29-12-2023</td>
            <td>Incomplete</td>
        </tr>
        <tr>
            <th>#5</th>
            <td>Update paper designs & figma designs for Login and Admin(UserPage)</td>
            <td>Nguyễn Vũ Bảo</td>
            <td>26-12-2023</td>
            <td>29-12-2023</td>
            <td>Complete</td>
        </tr>
        `
       document.querySelector('.my-file').innerHTML=`
       <div class="h3">Design Files</div>
                <ul class="d-flex">
                    <li><strong>Hân</strong>
                        <ul>
                            <li>Home Page: 
                                <ul>
                                    <li>Paper: <a class="link-info" href="./img/lab-07/homepage.png" target="_blank" rel="noopener noreferrer">Paper Design</a></li>
                                    <li>Figma: <a class="link-info" href="https://www.figma.com/community/file/1322581491249749941" target="_blank">Link Figma</a></li>
                                </ul>
                            </li>
                            <li>Group-Diary: 
                                <ul>
                                    <li>Paper: <a class="link-info" href="./img/lab-07/group-diary.png" target="_blank" rel="noopener noreferrer">Paper Design</a></li>
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
                                    <li>Paper: <strong>null</strong></li>
                                    <li>Figma: <strong>null</strong></li>
                                </ul>
                            </li>
                            <li>Category-Page: 
                                <ul>
                                    <li>Paper: <strong>null</strong></li>
                                    <li>Figma: <strong>null</strong></li>
                                </ul>
                            </li>
                            <li>Anime-Favorite-Page: 
                                <ul>
                                    <li>Paper: <strong>null</strong></li>
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
                                    <li>Paper: <a class="link-info" href="./img/lab-07/login.jpg" target="_blank" rel="noopener noreferrer">Paper Design</a></li>
                                    <li>Figma: <a class="link-info" href="https://www.figma.com/file/X4o8RNTHll3IrrIuKXH3Up/Login?type=design&mode=design&t=g83DUzwyHMmawGti-0" target="_blank">Link Figma</a></li>
                                </ul>
                            </li>
                            <li>Admin-User-Page: 
                                <ul>
                                    <li>Paper: <a class="link-info" href="./img/lab-07/admin-user-page.jpg" target="_blank" rel="noopener noreferrer">Paper Design</a></li>
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
                                    <li>Paper: <a class="link-info" href="./img/lab-07/watchingpage.jpg" target="_blank" rel="noopener noreferrer">Paper Design</a></li>
                                    <li>Figma: <a class="link-info" href="https://www.figma.com/file/hDuepywanvNOqjxevRDZaO/Untitled?type=design&node-id=0%3A1&mode=design&t=SM2DxZ7VQW4MtBZt-1" target="_blank">Link Figma</a></li>
                                </ul>
                            </li>
                            <li>Admin-Home-Page: 
                                <ul>
                                    <li>Paper: <a class="link-info" href="./img/lab-07/admin-home-page.jpg" target="_blank" rel="noopener noreferrer">Paper Design</a></li>
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
                                    <li>Paper: <a class="link-info" href="./img/lab-07/sigup.jpg" target="_blank" rel="noopener noreferrer">Paper Design</a></li>
                                    <li>Figma: <a class="link-info" href="https://www.figma.com/file/dziDi2j4dU2HXh2sQ4N6VA/Design-for-Animeweb?type=design&node-id=0%3A1&mode=design&t=PE7BOOTWFKejUJGj-1" target="_blank">Link Figma</a></li>
                                </ul>
                            </li>
                            <li>About: 
                                <ul>
                                    <li>Paper: <a class="link-info" href="./img/lab-07/about.jpg" target="_blank" rel="noopener noreferrer">Paper Design</a></li>
                                    <li>Figma: <a class="link-info" href="https://www.figma.com/file/dziDi2j4dU2HXh2sQ4N6VA/Design-for-Animeweb?type=design&node-id=0%3A1&mode=design&t=PE7BOOTWFKejUJGj-1" target="_blank">Link Figma</a></li>
                                </ul>
                            </li>
                            <li>Admin-Anime-Page: 
                                <ul>
                                    <li>Paper: <a class="link-info" href="./img/lab-07/admin-anime-page.jpg" target="_blank" rel="noopener noreferrer">Paper Design</a></li>
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
            <td>[Function] Functions for admin-user page</td>
            <td>Nguyễn Ngọc Hân</td>
            <td>05-12-2023</td>
            <td>07-12-2023</td>
            <td>Complete</td>
        </tr>
        <tr>
            <th>#2</th>
            <td>[Interface] Admin-anime management page</td>
            <td>Lê Bá Khánh Duy</td>
            <td>05-12-2023</td>
            <td>07-12-2023</td>
            <td>Complete (Submitted Late)</td>
        </tr>
        <tr>
            <th>#3</th>
            <td>Làm chức năng load anime cho index</td>
            <td>Hoàng Lê Nguyên Mạnh</td>
            <td>05-12-2023</td>
            <td>07-12-2023</td>
            <td>Complete</td>
        </tr>
        <tr>
            <th>#4</th>
            <td>[Interface] Favorite page</td>
            <td>Đăng Văn Trung</td>
            <td>05-12-2023</td>
            <td>07-12-2023</td>
            <td>Complete</td>
        </tr>
        <tr>
            <th>#5</th>
            <td>[Function] Sign In</td>
            <td>Nguyễn Vũ Bảo</td>
            <td>05-12-2023</td>
            <td>07-12-2023</td>
            <td>Complete</td>
        </tr>`
            document.querySelector('#week-6').classList.add('my-active')
            table.innerHTML = customHtml;
            weekTitle.innerHTML = "(Week-6)"
            break;
        case 5:
            customHtml = `
            <tr>
            <th>#1</th>
            <td>Group Diary Function</td>
            <td>Nguyễn Ngọc Hân</td>
            <td>28-11-2023</td>
            <td>30-11-2023</td>
            <td>Complete</td>
        </tr>
        <tr>
            <th>#2</th>
            <td>[Interface] About page interface</td>
            <td>Lê Bá Khánh Duy</td>
            <td>28-11-2023</td>
            <td>30-11-2023</td>
            <td>Complete</td>
        </tr>
        <tr>
            <th>#3</th>
            <td>[Interface] Admin Home Page interface</td>
            <td>Hoàng Lê Nguyên Mạnh</td>
            <td>28-11-2023</td>
            <td>03-12-2023</td>
            <td>Complete</td>
        </tr>
        <tr>
            <th>#4</th>
            <td>[Interface] Category page interface</td>
            <td>Đăng Văn Trung</td>
            <td>28-11-2023</td>
            <td>03-12-2023</td>
            <td>Complete</td>
        </tr>
        <tr>
            <th>#5</th>
            <td>[Interface] Admin User Management interface</td>
            <td>Nguyễn Vũ Bảo</td>
            <td>28-11-2023</td>
            <td>05-12-2023</td>
            <td>Complete</td>
        </tr>
            `
            document.querySelector('#week-5').classList.add('my-active')
            table.innerHTML = customHtml;
            weekTitle.innerHTML = "(Week-5)"
            break;
    }
}