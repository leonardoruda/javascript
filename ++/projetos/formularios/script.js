let validator = {
    handleSubmit: (event) => {
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll('input');
        validator.clearErrors();

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let check = validator.checkInput(input);
            if (check !== true) {
                send = false;
                validator.showError(input, check);
            }
        }   

        if(send) {
            form.submit();
        }
    },
    checkInput: (input) => {
        let rules = input.getAttribute('data-rules');
        if (rules !== null) {
            rules = rules.split('|');
            for (let k in rules) {
                let rDetails = rules[k].split('=');
                switch(rDetails[0]) {
                    case 'required':
                        if(input.value == '') {
                            return '*Campo obrigatório';
                        }
                    break;
                    case 'min':
                        if(input.value.length < rDetails[1]) {
                            return `*Mínimo de ${rDetails[1]} caracteres`
                        }
                    break;
                }
            }
        }
        return true;
    },
    showError: (input, error) => {
        input.style.borderColor = 'red';
        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.nextElementSibling) ;
    },
    clearErrors: () => {
        //let inputs = form.querySelectorAll('input');
        //inputs.forEach((item) => item.classList.remove('error'));

        let errorElements = document.querySelectorAll('.error');
        errorElements.forEach((item) => {
            item.previousElementSibling.style.borderColor = 'gray';
            item.remove();
        })
    }
    
}
let form = document.querySelector('.validator');
form.addEventListener('submit', validator.handleSubmit);