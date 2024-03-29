const HOST_NAME = "https://anime-web-production-996b.up.railway.app";
function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
const getParamUrl = (param) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const result = urlParams.get(param)
    return result;
}

const debounce = (callBack, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callBack(...args);
        }, delay);
    }
}
const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function (error) {
        reject(error);
      };
    });
  };

const getAllCategories = async () => {
    try {
        const response = await fetch(`${HOST_NAME}/the-loai`, {
            method:"GET",
            headers:{
                "Content-Type": "Application/json"
            }
        })
        const data = await response.json();
        return data._embedded.categories;
    } catch (error) {
        console.log(error);
    }
}

const getCategoriesOfAnime = async (animeId)=>{
    try {
        const response = await fetch(`${HOST_NAME}/anime/${animeId}/categoryList`, {
            method:"GET",
            headers:{
                "Content-Type": "Application/json"
            }
        })
        const data = await response.json();
        const categories = data._embedded.categories;
        const categoriesId = categories.map(cate=>cate.id);
        return categoriesId;
    } catch (error) {
        console.log(error);
    }
}

export { HOST_NAME, parseJwt, getParamUrl, debounce ,getAllCategories, getCategoriesOfAnime, getBase64,getRndInteger};
