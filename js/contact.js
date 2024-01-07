window.addEventListener('load', () => {
    // xử lý phần biểu mẫu
    document.querySelector('.icon-close').addEventListener('click', () => closeContact());
    document.querySelector('.show-contact').addEventListener('click', () => showContact());
})
const closeContact = () => {
    document.querySelector('#contact').classList.add('close-contact')
}
const showContact = () => {
    document.querySelector('#contact').classList.remove('close-contact')
}