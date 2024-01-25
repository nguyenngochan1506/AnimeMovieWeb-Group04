import { HOST_NAME } from "./utils.js";

window.addEventListener('load', async () => {
    const urlAnimeList = [];
    const response1 = await handleAnimeFavorite().then(animefavorite => {
        animefavorite.forEach(fa => {
            urlAnimeList.push(fa._links.anime.href)
        });
    })
    console.log(urlAnimeList);
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
                <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="product__item">
                <img
                  class="product__item__pic set-bg"
                  src="${data.coverImage}"
                />
                <div class="ep">18 / 18</div>
                <div class="comment"><i class="fa fa-comments"></i> 11</div>
                <div class="view"><i class="fa fa-eye"></i> ${data.view}</div>
                <div class="product__item__text">
                  <h5><a href="#">${data.name}</a></h5>
                </div>
              </div>
            </div>
                `
                document.querySelector('.group-anime').innerHTML += myHtml;
        })
    })
})

const handleAnimeFavorite = async () => {
    const token = localStorage.getItem('token')
    try {
        const response = await fetch(`${HOST_NAME}/danh-sach-yeu-thich/search/findAllByUser_Id?userId=2`, {
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
