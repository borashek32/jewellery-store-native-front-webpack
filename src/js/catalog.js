const cardDetails = document.getElementsByClassName('card__details')
const modalCard = document.querySelector('.cardModal')
const overflow = document.querySelector('.overflow')
const closeButton = document.querySelector('.cardModal__close')
const header = document.getElementById('header')

for (let i = 0; i < cardDetails.length; i++) {
  cardDetails[i].addEventListener('click', function () {
    header.style.display = 'none'
    modalCard.classList.add('active')
    overflow.classList.add('active')
  })
}

closeButton.addEventListener('click', function () {
  header.style.display = 'flex'
  modalCard.classList.remove('active')
  overflow.classList.remove('active')
})
