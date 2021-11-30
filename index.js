const submitBtn = password.querySelector('button[type="submit"]')

const updateSubmitBtn = (e) => submitBtn.disabled = e.type == 'reset' || !input.value

input.addEventListener('input', updateSubmitBtn)
password.addEventListener('reset', updateSubmitBtn)
