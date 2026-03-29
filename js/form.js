
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
                    
                    feedback.style.display = 'none';
                    feedback2.textContent = 'confirm password is required';
                    valid = false;
                }else if(passwrd.value === "" && confirmPasswrd.value !== "") {
                    passwrd.classList.add('is-invalid');
                    

                    feedback2.style.display = 'none';
                    feedback.style.display = 'block';
                    feedback.textContent = 'password is required';
                    valid = false;
                }else if (passwrd.value !== confirmPasswrd.value) {
                    
                    feedback.style.display = 'none';
                    feedback2.style.display = 'block';
                    feedback2.textContent = 'there is a typo between password or confirm password';
                    // add invalid styling
                     valid = false;
                }
                if (email.value === '') {
                    emailFeedback.textContent = 'Email is required';
                    valid = false;
                } else if (!email.value.includes('@')) {
                    emailFeedback.textContent = 'It should be a valid email address';
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