


(() => {
    'use strict'
    const name = document.querySelector('#inputName')
    const email = document.querySelector('#inputEmail');
    const forms = document.querySelectorAll('.needs-validation');
    const password = document.querySelector('#password');
    const secondPassword = document.querySelector('#confirmPassword');

    

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {

            // password match check FIRST
            if (password.value !== secondPassword.value) {
                password.setCustomValidity("Passwords do not match");
                secondPassword.setCustomValidity("Passwords do not match");
            } else {
                password.setCustomValidity("");
                secondPassword.setCustomValidity("");
            }

            // now check validity
            let valid = form.checkValidity();

            // name validation (visual only)
            if (name.value === "") {
                name.classList.add('is-invalid');
            } else {
                name.classList.remove('is-invalid');
            }

            // email validation (visual only)
            if (email.value === "") {
                email.classList.add('is-invalid');
            } else {
                email.classList.remove('is-invalid');
            }

            if (!valid) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated');
        }, false)
    })
})();