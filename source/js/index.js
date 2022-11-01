var popup = document.querySelector('.popup')
var popupbtn = document.querySelector('.btn-js')
var popupclose = document.querySelector('.popup__cross')
var input = popup.querySelector('input')

popupbtn.addEventListener('click', function() {
    popup.classList.add('popup-open')
    input.focus()
})

popupclose.addEventListener('click', function() {
    popup.classList.remove('popup-open')
})

window.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && popup.classList.contains("popup-open")) {
        popup.classList.remove('popup-open');
        console.logo("Закрытие формы")
    }
})