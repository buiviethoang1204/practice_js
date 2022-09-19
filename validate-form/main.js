const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#password_confirmation');
const form = document.querySelector('.form');
const userApi = 'http://localhost:3000/user';

function showError(input, message) {
    const parent = input.parentElement;
    const errorMessage = parent.querySelector('.form-message');
    errorMessage.classList.add('error');
    errorMessage.innerText = message;
}

function showSuccess(input) {
    const parent = input.parentElement;
    const errorMessage = parent.querySelector('.form-message');
    errorMessage.classList.remove('error');
    errorMessage.innerText = '';
}

function checkEmptyError(listInputs) {
    let isEmptyError = false;
    listInputs.forEach(input => {
        input.value = input.value.trim();
        if (!input.value) {
            isEmptyError = true;
            showError(input, 'Không được bỏ trống');
        } else {
            showSuccess(input);
        }
    })
    return isEmptyError;
}

function checkEmail(input) {
    const regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value = input.value.trim();
    let isEmailError = !regex.test(input.value);
    if (!isEmailError) {
        showSuccess(input);
    } else {
        showError(input, 'Email không hợp lệ');
    }
    return isEmailError;
}

function checkLengthError(input, min, max) {
    input.value = input.value.trim();
    if (input.value.length < min) {
        showError(input, `Vui lòng nhập tối thiểu ${min} ký tự`);
    }
    if (input.value.length > max) {
        showError(input, `Vui lòng không nhập quá ${max} ký tự`);
    }
}

function checkMatchPasswordError(passwordInput, cfPasswordInput) {
    if (passwordInput.value !== cfPasswordInput.value) {
        showError(cfPasswordInput, 'Mật khẩu không trùng khớp');
    }
}

function createUser(data, callback) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(userApi, options)
    .then(res => res.json())
    .then(callback);
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const isEmptyError = checkEmptyError([fullname, email, password, passwordConfirmation]);
    const isEmailError = checkEmail(email);
    const isFullnameLengthError = checkLengthError(fullname, 3, 20);
    const isPasswordLengthError = checkLengthError(password, 6, 18);
    const isCheckMatchError = checkMatchPasswordError(password, passwordConfirmation);
    if (isEmptyError || isEmailError || isFullnameLengthError || isPasswordLengthError || isCheckMatchError) {
        console.log("Có lỗi");
    } else {
        const enableInputs = document.querySelectorAll('[name]');
        const formValues = Array.from(enableInputs).reduce((value, input) => {
            value[input.name] = input.value;
            return value;
        }, {})
        console.log(formValues);
        createUser(formValues);
    }
})