
    (() => {
        'use strict'
        const feedback = document.querySelector('.password-feedback');
        const feedback2 = document.querySelector('.confirm-password-feedback');
        const emailFeedback = document.querySelector('.email-feedback')
        const forms = document.querySelectorAll('.needs-validation');
        const email = document.querySelector('#inputEmail');
        const passwrd = document.querySelector('#password');
        const confirmPasswrd = document.querySelector('#confirmPassword');
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                let valid = form.checkValidity();
                if(passwrd.value !== "" && confirmPasswrd.value === "") {
                    confirmPasswrd.classList.add('is-invalid');    
                    console.log('1');
                    feedback.style.display = 'none';
                    feedback2.textContent = 'confirm password is empty';
                    valid = false;
                }else if(passwrd.value === "" && confirmPasswrd.value !== "") {
                    passwrd.classList.add('is-invalid');
                    console.log('2');

                    feedback2.style.display = 'none';
                    feedback.style.display = 'block';
                    feedback.textContent = 'password is empty';
                    valid = false;
                }else if (passwrd.value !== confirmPasswrd.value) {
                    console.log('3');
                    feedback.style.display = 'none';
                    feedback2.style.display = 'block';
                    feedback2.textContent = 'there is a typo between password or confirm password';
                    // add invalid styling
                     valid = false;
                }else {
                    console.log('4');
                }
                if (!email.value.includes('@') && email.value !== '') {
                    emailFeedback.textContent = 'it should be valid email address';
                    valid = false;
                }else if (email.value === '') {
                    emailFeedback.textContent = 'enter email address';
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