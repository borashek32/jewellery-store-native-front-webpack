const orderModal = document.querySelector('.modal')
const orderCall = document.querySelector('.button')
const orderCallMobile = document.querySelector('.mobile__button')
const overflow = document.querySelector('.overflow')
const header = document.getElementById('header')
const closeButton = document.querySelector('.modal__close')
const menu = document.querySelector('.menu')
const burgerLine = document.querySelector('.burger__line')
const mobileContacts = document.querySelector('.mobile__contacts')
const orderButton = document.querySelector('.form__button')
const modalData = document.querySelector('.modal__data')
const modalSent = document.querySelector('.modal__sent')
const returnGoods = document.getElementById('returnGoods')
const itemPurple = document.querySelector('.item_purple')

returnGoods.addEventListener('click', function () {
  header.style.display = 'none'
  orderModal.classList.add('active')
  overflow.classList.add('active')
  modalData.classList.add('active')
  modalSent.classList.remove('active')
})

itemPurple.addEventListener('click', function () {
  header.style.display = 'none'
  orderModal.classList.add('active')
  overflow.classList.add('active')
  modalData.classList.add('active')
  modalSent.classList.remove('active')
})

orderCall.addEventListener('click', function () {
  header.style.display = 'none'
  orderModal.classList.add('active')
  overflow.classList.add('active')
  modalData.classList.add('active')
  modalSent.classList.remove('active')
})

orderCallMobile.addEventListener('click', function () {
  header.style.display = 'none'
  orderModal.classList.add('active')
  overflow.classList.add('active')
  modalData.classList.add('active')
  modalSent.classList.remove('active')
})

closeButton.addEventListener('click', function () {
  header.style.display = 'flex'
  orderModal.classList.remove('active')
  overflow.classList.remove('active')
  menu.classList.remove('active')
  orderCall.classList.remove('active')
  burgerLine.classList.remove('active')
  mobileContacts.classList.remove('active')
})

