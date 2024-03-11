import {parseJwt} from './utils.js'

window.addEventListener('load', ()=>{
      // kiểm tra quyền đăng nhập
      const token = localStorage.getItem('token')
      if (!token) {
          alert('Vui lòng đăng nhập!')
          window.location.href = './login.html';
      }
      const tokenDecode = parseJwt(token);
      if (!tokenDecode.isAdmin) {
          alert('Bạn không có quyền truy cập!')
          window.location.href = './home.html';
      }
})