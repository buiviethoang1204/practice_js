function Validator(options) {
    const selectorRules = {};
    function validate(inputElement, rule) {
        let errorMessage;
        const errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        const rules = selectorRules[rule.selector];
        for (let i = 0; i < rules.length; ++i) {
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) break;
        }
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            errorElement.classList.add('error');
        } else {
            errorElement.innerText = '';
            errorElement.classList.remove('error');
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
                    const errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    errorElement.classList.remove('error');
                }
            }
        })
    }
}

function showPassword(input) {
    document.querySelector('.show-password').onclick = (() => {
        if (input.type === 'password') {
            input.type = 'text';
            document.querySelector('.show-password').classList.add('hide-btn');
        } else {
            input.type = 'password';
            document.querySelector('.show-password').classList.remove('hide-btn');
        }
    })
}
showPassword(document.querySelector('#password'));

Validator.isRequired = selector => {
    return {
        selector: selector,
        test: value => {
            return value.trim() ? undefined : 'Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = selector => {
    return {
        selector: selector,
        test: value => {
            const regexEmail =
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
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

Validator.isConfirmed = (selector, getConfirmValue) => {
    return {
        selector: selector,
        test: value => {
            return value === getConfirmValue() ? undefined : 'Mật khẩu không trùng khớp';
        }
    }
}
