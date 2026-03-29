
    (() => {
        'use strict'
        const forms = document.querySelectorAll('.needs-validation');
        const email = document.querySelector('#inputEmail');
        const passwrd = document.querySelector('#password');
        const confirmPasswrd = document.querySelector('#confirmPassword');
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                let valid = form.checkValidity();
                if (passwrd.value !== confirmPasswrd.value) {
                    console.log("password is not correct")
                    // remove Bootstrap valid styling
                    passwrd.classList.remove('is-valid');
                    confirmPasswrd.classList.remove('is-valid');

                    // add invalid styling
                    passwrd.classList.add('is-invalid');
                    confirmPasswrd.classList.add('is-invalid');
                    valid = false;
                }
                if (!valid) {
                    
                    event.preventDefault();
                    event.stopPropagation();
                }
            form.classList.add('was-validated');
            }, false)
        })
    })();