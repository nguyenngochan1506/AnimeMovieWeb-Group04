import { HOST_NAME, getParamUrl } from "./utils.js";
window.onload = () => {
    //lay id anime tu url 
    const animeId = getParamUrl('animeId')
    const token = localStorage.getItem('token')
    if(token){
        document.querySelector('#my-form-comment').addEventListener('submit', (e)=> handleSubmitComment(e, animeId))
    }else{

        document.querySelector('#my-form-comment').innerHTML = '<span>Vui lòng đăng nhập để bình luận <a class="btn btn-danger" href="./login.html">Đăng Nhập</a> </span>';
    }

    fetch(`${HOST_NAME}/anime/${animeId}`)
        .then(respnse => respnse.json())
        .then(data => {
            document.querySelector('.anime__details__title h1').innerHTML = data.name;
            document.querySelector('.anime__details__title span').innerHTML = `${data.englishName}/ ${data.vietnamName}`
            document.querySelector('.anime__details__text p').innerHTML = data.description;
            document.querySelector('.anime__image-box img').setAttribute('src', data.coverImage);
            document.querySelector('.view').innerHTML = data.view.toLocaleString();
            document.querySelector('.releaseYear').innerHTML = data.releaseYear;
            document.querySelector('#btn-xem-ngay').addEventListener('click', () => {
                window.location.href = `./watching.html?animeId=${data.id}&tap=1`
            })
        })

    getAllComment(animeId).then(data => {
        let customHtml = '';
        data.forEach(comment =>{
            customHtml += `
                <div class="anime__review__item d-flex align-items-start mb-3">
                <div class="anime__review__item__pic">
                <img height="50px" width="50px"  src="${comment.user.avatar ||'./img/usericon.jpg'}" alt="" />
                </div>
                <div class="anime__review__item__text">
                <h6 class="fw-bold">
                    ${comment.user.fullName}
                </h6>
                <p>
                    ${comment.description}
                </p>
                </div>
            </div>
            `;
            document.querySelector('.anime__details__review').innerHTML = customHtml;
        })
    })

    
}

const handleSubmitComment = async (e, animeId) =>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const comment = formData.get('comment');
    if(!comment){
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    try {
        const userId = JSON.parse(localStorage.getItem('user')).id
        const request = {
            description: comment,
            user: `user/${userId}`,
            anime:`anime/${animeId}`
        }
        const response = await fetch(`${HOST_NAME}/binh-luan`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body:JSON.stringify(request)
        })
        const data = await response.json();
        alert("Bạn đã comment")
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
const getAllComment = async (animeId) => {
    try {
        const response = await fetch(`${HOST_NAME}/binh-luan/search/findAllByAnime_Id?id=${animeId}`, {
            method: "GET",
            headers: {
                "Content-Type": "Application/json"
            }
        })
        const data = await response.json();
        const listComment = data._embedded.comments;

        const listPromise =  listComment.map(async (comment) => {
            return  {
                description: comment.description,
                user: await loadUserByUrl(comment._links.user.href)
            }
        })
        const result = Promise.all(listPromise)

        return result
    } catch (error) {
        console.log(error);
    }
}

const loadUserByUrl = async (url) => {

    const urlObject = new URL(url);
    const path = urlObject.pathname;
    const response = await fetch(`${HOST_NAME}${path}`);
    const data = await response.json();
    return data;
};