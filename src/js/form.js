import IMask from 'imask'

const form = document.querySelector('.form')
const formInputs = document.querySelectorAll('.form__input')
const name = document.getElementById('name')
const phone = document.getElementById('phone')
const nameError = document.getElementById('name-error')
const phoneError = document.getElementById('phone-error')
const phoneMaskError = document.getElementById('phone-mask-error')
const closeButton = document.querySelector('.modal__close')
const formButton = document.querySelector('.form__button')
const modalData = document.querySelector('.modal__data')
const modalSent = document.querySelector('.modal__sent')

name.onfocus = function () {
  name.classList.remove('form__input_error')
  nameError.style.display = 'none'
}

phone.onfocus = function () {
  phone.classList.remove('form__input_error')
  phoneError.style.display = 'none'
  phoneMaskError.style.display = 'none'
}

phone.oninput = function () {
  if ((phoneMask.unmaskedValue.length !== 11) & (name.value === '')) {
    phone.classList.add('form__input_error')
    phoneMaskError.style.display = 'flex'
    formButton.classList.remove('active')
  } else {
    formButton.classList.add('active')
    phone.classList.remove('form__input_error')
    phoneMaskError.style.display = 'none'
  }
}

const maskOptions = {
  mask: '+{7}(000)000-00-00',
}
const phoneMask = IMask(phone, maskOptions)

function validation() {
  let result = true

  if (name.value === '') {
    name.classList.add('form__input_error')
    nameError.style.display = 'flex'

    result = false
  } else if (phone.value === '') {
    phone.classList.add('form__input_error')
    phoneError.style.display = 'flex'

    result = false
  }

  return result
}

form.addEventListener('submit', function (e) {
  e.preventDefault()

  if (validation(this) === true) {
    formButton.classList.remove('active')
    modalData.classList.remove('active')
    modalSent.classList.add('active')
  }
})

closeButton.addEventListener('click', function () {
  name.classList.remove('form__input_error')
  nameError.style.display = 'none'
  phone.classList.remove('form__input_error')
  phoneError.style.display = 'none'
  phoneMaskError.style.display = 'none'
  phone.value = ''
  name.value = ''
})
