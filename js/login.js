
    (() => {
        let arrayEmail = ['reinn@gmail.com'];
        let arrayPassword = ['reinn'];
        const forms = document.querySelectorAll('.sign-in-form');
        const userEmail = document.querySelector('#UserEmail');
        const userPassword = document.querySelector('#Userpass');
        let valid = true;
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {

            let emailIndex = arrayEmail.indexOf(userEmail.value);
            if (emailIndex === -1) {
                userEmail.classList.add('is-invalid');
                valid = false; // email not found
            } else if (userPassword.value !== arrayPassword[emailIndex]) {
                userPassword.classList.add('is-invalid');
                valid = false; // password incorrect
            }
                if (!valid) {
                event.preventDefault();
                event.stopPropagation();
                }
            })
        })



    })();