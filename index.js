var passwordPrimaryInput = document.querySelector(".form-content-inputs-container input#password-primary");
var passwordSecondaryInput = document.querySelector(".form-content-inputs-container input#password-secondary");
passwordPrimaryInput.addEventListener('input', passwordChanged);
passwordSecondaryInput.addEventListener('input', passwordChanged);

function passwordChanged(e) {

    if(!passwordPrimaryInput.validity.patternMismatch &&
        passwordSecondaryInput.value !== passwordPrimaryInput.value &&
        passwordPrimaryInput.value !== ''
    ){
        passwordPrimaryInput.classList.add("error");
    } else {
        passwordPrimaryInput.classList.remove("error");
    }

    if(!passwordSecondaryInput.validity.patternMismatch &&
        passwordSecondaryInput.value !== passwordPrimaryInput.value &&
        passwordSecondaryInput.value !== ''
    ){
        passwordSecondaryInput.classList.add("error");
    } else {
        passwordSecondaryInput.classList.remove("error");
    }


}