const wrp = input.closest('.password__inner')
const submitBtn = password.querySelector('button[type="submit"]')
const showBtn = document.getElementById('show')

const regExp = /^(?=\S*?[a-z])(?=\S*?[A-Z])(?=\S*?[\d])\S{8,20}$/

const updateSubmitBtn = (e) => submitBtn.disabled = e.type == 'reset' || !input.value

input.addEventListener('input', updateSubmitBtn)
password.addEventListener('reset', updateSubmitBtn)

const getPasswordValidity = () => regExp.test(input.value)

const updateFormState = (isValid) => wrp.dataset.state = isValid ? 'valid' : 'invalid'

const onPasswordInput = () => password.hasAttribute('data-submitted') && updateFormState(getPasswordValidity())

const onPasswordSubmit = (e) => {
  const isValid = getPasswordValidity()
  if (!isValid) e.preventDefault()
  updateFormState(isValid)
  password.setAttribute('data-submitted', true)
}

input.addEventListener('input', onPasswordInput)
password.addEventListener('submit', onPasswordSubmit)

password.addEventListener('reset', () => {
  wrp.removeAttribute('data-state');
  password.removeAttribute('data-submitted')
})

showBtn.addEventListener('click', () => {
  if (showBtn.textContent == 'Show password') {
    input.type = 'text'
    showBtn.textContent = 'Hide password'
  } else {
    input.type = 'password'
    showBtn.textContent = 'Show password'
  }
})
