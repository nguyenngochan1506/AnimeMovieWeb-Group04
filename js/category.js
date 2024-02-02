import { HOST_NAME, getAllCategories } from "./utils.js"

window.addEventListener('load', ()=>{
    getAllCategories().then(data=>{
        data.forEach(cate =>{
            document.querySelector('#categories-filter').innerHTML += `<option value="${cate.categoryName}">${cate.categoryName}</option>`;
        })
    })
    getAnime();//gọi lần đầu khi người dùng chưa lọc

    document.querySelector('.movie-filter').addEventListener('submit', handleSubmitFilter)
})

const handleSubmitFilter = (e)=>{
    e.preventDefault();
    document.querySelector('.filter-btn').innerHTML = `
    <div class="spinner-border text-success" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
    `;
    const formData = new FormData(e.currentTarget);
    const values = [...formData.values()]
    if(values.includes('')){
        document.querySelector('.filter-btn').innerHTML = 'Duyệt Phim';
        return;
    }
    const categoryName = formData.get('categories')
    const sortBy = formData.get('sort');
    getAnimeByCategory(categoryName, sortBy);


}

const getAnimeByCategory = async (categoryName, sortBy) =>{
    try {
        const response = await fetch(`${HOST_NAME}/anime/search/findAllByCategoryList_categoryName?theLoai=${categoryName}&sort=${sortBy},desc`, {
            method:"GET",
            headers:{
                "Content-Type": "Application/json"
            }
        })
        const data = await response.json();
        const listAnime = data._embedded.animes;
        
        if(!listAnime.length){
            document.querySelector('.group-anime').innerHTML = "Không có anime theo yêu cầu!"
            return;
        }
        document.querySelector('.group-anime').innerHTML = '';
        listAnime.forEach(anime =>{
            const myHtml = `
            <div class=" list-anime-item col-lg-3 col-md-4 col-sm-6 position-relative p-0 mb-5 ms-xl-0 me-xl-0 me-sm-3 ms-sm-3 me-md-3 ms-md-3" data-anime-id="${anime.id}">
            <img src="${anime.coverImage}" class="img-fluid" alt="${anime.name}">
            <div class="information">
                <div class="my-card-title fs-4">${anime.name}</div>
                <div class="my-episodes-view d-flex justify-content-between align-items-center pe-2">
                    <span class="my-episodes fw-light">${anime.type}</span>
                    <span class="my-view fw-light">Lượt xem: ${anime.view}</span>
                </div>
            </div>
        </div>
                `
                document.querySelector('.group-anime').innerHTML += myHtml;
        })
        document.querySelector('.filter-btn').innerHTML = 'Duyệt Phim';
        addEventListenerToEachAnime()

    } catch (error) {
        console.log(error);
    }
}

const getAnime = async ()=>{
    try {
        const response = await fetch(`${HOST_NAME}/anime`, {
            method:"GET",
            headers:{
                "Content-Type": "Application/json"
            }
        })
        const data = await response.json();
        const listAnime = data._embedded.animes

        document.querySelector('.group-anime').innerHTML = '';
        listAnime.forEach(anime =>{
            const myHtml = `
            <div class=" list-anime-item col-lg-3 col-md-4 col-sm-6 position-relative p-0 mb-5 ms-xl-0 me-xl-0 me-sm-3 ms-sm-3 me-md-3 ms-md-3" data-anime-id="${anime.id}">
            <img src="${anime.coverImage}" class="img-fluid" alt="${anime.name}">
            <div class="information">
                <div class="my-card-title fs-4">${anime.name}</div>
                <div class="my-episodes-view d-flex justify-content-between align-items-center pe-2">
                    <span class="my-episodes fw-light">${anime.type}</span>
                    <span class="my-view fw-light">Lượt xem: ${anime.view.toLocaleString()}</span>
                </div>
            </div>
        </div>
                `
                document.querySelector('.group-anime').innerHTML += myHtml;
        })
        addEventListenerToEachAnime()
    } catch (error) {
        console.log(error);
    }
}

const addEventListenerToEachAnime  = ()=>{
    document.querySelectorAll('[data-anime-id]').forEach(ele =>{
        const animeId = ele.getAttribute('data-anime-id');
        ele.style.cursor = 'pointer'
        ele.addEventListener('click', ()=>{
          window.location.href = `./anime-details.html?animeId=${animeId}`
        })
      })
}