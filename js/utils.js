const HOST_NAME = "https://anime-web-production-996b.up.railway.app";
function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

const getParamUrl = (param)=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const result = urlParams.get(param)
    return result;
}

const debounce = (callBack, delay) =>{
    let timeout;
    return (...args)=>{
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callBack(...args);
        }, delay);
    }
}
export {HOST_NAME, parseJwt, getParamUrl, debounce};
