import { HOST_NAME } from "./utils.js";

window.addEventListener('load', async () => {
    const user = localStorage.getItem('user');
    if(!user){
        alert('Vui lòng đăng nhập')
        window.location.href = './index.html'
        return;
    }

    const userId = JSON.parse(user).id;
    document.querySelector('.group-anime').innerHTML = `<div class="spinner-border text-light" style="width: 4rem; height: 4rem;" role="status">
                                                            <span class="visually-hidden">Loading...</span>
                                                        </div>`
    const urlAnimeList = [];
    const response1 = await handleAnimeFavorite(userId).then(animefavorite => {
        animefavorite.forEach(fa => {
            urlAnimeList.push(fa._links.anime.href)
        });
    })
    document.querySelector('.group-anime').innerHTML = '';
    urlAnimeList.map(url =>{
        const urlObject = new URL(url);
        const path = urlObject.pathname;
        fetch(`${HOST_NAME}${path}`, {
            method:'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(data=>{
            return data.json();
        }).then(data=>{
            const myHtml = `
            <div class=" list-anime-item col-lg-3 col-md-4 col-sm-6 position-relative p-0 mb-5 ms-xl-0 me-xl-0 me-sm-3 ms-sm-3 me-md-3 ms-md-3" data-anime-id="${data.id}">
            <img src="${data.coverImage}" class="img-fluid" alt="${data.name}">
            <div class="information">
                <div class="my-card-title fs-4">${data.name}</div>
                <div class="my-episodes-view d-flex justify-content-between align-items-center pe-2">
                    <span class="my-episodes fw-light">${data.type}</span>
                    <span class="my-view fw-light">Lượt xem: ${data.view.toLocaleString()}</span>
                </div>
            </div>
        </div>
                `
                document.querySelector('.group-anime').innerHTML += myHtml;
        }).then(()=>{
            //link đến trang details
            document.querySelectorAll('[data-anime-id]').forEach(ele =>{
                const animeId = ele.getAttribute('data-anime-id');
                ele.style.cursor = 'pointer'
                ele.addEventListener('click', ()=>{
                  window.location.href = `./anime-details.html?animeId=${animeId}`
                })
              })
        })
    })
})

const handleAnimeFavorite = async (userId) => {
    const token = localStorage.getItem('token')
    try {
        const response = await fetch(`${HOST_NAME}/danh-sach-yeu-thich/search/findAllByUser_Id?userId=${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        const data = await response.json();
        const listAnimeFavorites = data._embedded.favoriteAnimes;
        return listAnimeFavorites;
    } catch (error) {
        throw new Error("Không gọi được máy chủ!")
    }
}
