function Validator(options) {
    const selectorRules = {};
    function validate(inputElement, rule) {
        const btnSubmit = document.querySelector('.form-submit');
        let errorMessage;
        const errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        const rules = selectorRules[rule.selector];
        for (let i = 0; i < rules.length; ++i) {
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) {
                btnSubmit.classList.add('disabled');
                break;
            }
        }
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            errorElement.classList.add('error');
        } else {
            errorElement.innerText = '';
            errorElement.classList.remove('error');
            btnSubmit.classList.remove('disabled');
        }
        return !errorMessage;
    }
    const formElement = document.querySelector(options.form);
    if (formElement) {
        formElement.onsubmit = e => {
            e.preventDefault();
            let isFormValid = true;
            options.rules.forEach(rule => {
                const inputElement = formElement.querySelector(rule.selector);
                let isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            })
            if (isFormValid) {
                console.log("Không có lỗi");
                if (typeof options.onSubmit === 'function') {
                    const enableInputs = formElement.querySelectorAll('[name]');
                    const formValues = Array.from(enableInputs).reduce((value, input) => {
                        value[input.name] = input.value;
                        return value;
                    }, {})
                    options.onSubmit(formValues);
                }
            } else {
                console.log("Có lỗi");
            }
        }
        options.rules.forEach(rule => {
            if (!Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector] = [rule.test];
            } else {
                selectorRules[rule.selector].push(rule.test);
            }
            const inputElement = formElement.querySelector(rule.selector);
            if (inputElement) {
                inputElement.onblur = () => {
                    validate(inputElement, rule);
                }
                inputElement.oninput = () => {
                    validate(inputElement, rule);
                }
            }
        })
    }
}

function showPassword(input, selector) {
    selector.addEventListener('click', () => {
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        selector.classList.toggle('bi-eye');
    })
}
showPassword(document.querySelector('#password'), document.querySelector('.toggle-password'));
showPassword(document.querySelector('#password_confirmation'), document.querySelector('.toggle-password-confirmation'));

Validator.isRequired = selector => {
    return {
        selector: selector,
        test: value => {
            return value.trim() ? undefined : 'Vui lòng nhập trường này';
        }
    }
}

Validator.isEmail = selector => {
    return {
        selector: selector,
        test: value => {
            const regexEmail =
            /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
            return regexEmail.test(value) ? undefined : 'Nhập đúng địa chỉ email';
        }
    }
}

Validator.isPassword = selector => {
    return {
        selector: selector,
        test: value => {
            const regexPassword = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
            return value.match(regexPassword) ? undefined : 'Mật khẩu tối thiểu 8 ký tự, có ít nhất 1 chữ cái, 1 số và 1 ký tự đặc biệt';
        }
    }
}

Validator.isConfirmed = (selector, getPassword) => {
    return {
        selector: selector,
        test: value => {
            return value === document.querySelector(getPassword).value ? undefined : 'Mật khẩu không trùng khớp';
        }
    }
}
