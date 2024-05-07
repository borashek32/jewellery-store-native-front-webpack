const burger = document.querySelector('.burger')
const line = document.querySelector('.line')
const menu = document.querySelector('.menu')
const mobileContacts = document.querySelector('.mobile__contacts')
const overflow = document.querySelector('.overflow')
const menuItems = document.getElementsByClassName('menu__item')
const activeMenuItem = document.querySelector('.active.menu__item')
const orderCall = document.querySelector('.button')
const logo = document.querySelector('.logo')

const order = document.getElementById('order')

burger.addEventListener('click', function () {
  line.classList.toggle('active')
  menu.classList.toggle('active')
  mobileContacts.classList.add('active')
  overflow.classList.toggle('active')
  orderCall.classList.toggle('active')

  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.toggle('active')
  }
})

menu.addEventListener('click', function (e) {
  const clickedElement = e.target
  const paragraph = clickedElement.querySelector('a')
  const button = clickedElement.querySelector('button')

  if (
    clickedElement.classList.contains('active') ||
    clickedElement.classList.contains('menu__item') ||
    menu.classList.contains('active') ||
    line.classList.contains('active') ||
    mobileContacts.classList.contains('active') ||
    paragraph
  ) {
    menu.classList.remove('active')
    overflow.classList.remove('active')
    line.classList.remove('active')
    orderCall.classList.remove('active')
    mobileContacts.classList.toggle('active')
  }

  if (button) {
    overflow.classList.add('active')
  }
})

logo.addEventListener('click', function () {
  menu.classList.remove('active')
  overflow.classList.remove('active')
  orderCall.classList.remove('active')
  line.classList.remove('active')
})
