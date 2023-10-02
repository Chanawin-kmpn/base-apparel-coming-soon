let form = document.querySelector('.input-email');

form.addEventListener("submit", function (event) {
    event.preventDefault();

    validateEmail();
});

function validateEmail() {
    let emailSub = document.getElementById("emailSubmit").value;
    let emailInput = document.getElementById("emailSubmit");
    let errorMessage = document.getElementById("error-message");
    let errorIcon = document.querySelector('.error-icon');

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    function emailInputStyle(prop) {
        var viewportWidth = window.innerWidth;


        if (prop === "error") {

            if (viewportWidth < 1199) {
                emailInput.style.paddingBlockStart = "0.6rem";
                emailInput.style.paddingBlockEnd = "0.5rem";
            } else {
                emailInput.style.paddingBlockStart = "0.8rem";
                emailInput.style.paddingBlockEnd = "0.8rem";
            }
            emailInput.style.outlineWidth = "2px"
            emailInput.style.outlineColor = "hsla(0, 92%, 68%, 1)";
            emailInput.style.opacity = "1";
        } else if (prop === "pass") {
            emailInput.style.paddingBlockStart = "";
            emailInput.style.paddingBlockEnd = "";
            emailInput.style.outlineWidth = ""
            emailInput.style.outlineColor = "";
            emailInput.style.opacity = "";
        }
    }


    if (emailSub === "") {
        emailInputStyle("error");
        errorMessage.style.visibility = "revert";
        errorMessage.textContent = "Email address is required";
        errorIcon.style.display = "block";
    } else if (!emailRegex.test(emailSub)) {
        emailInputStyle("error");
        errorMessage.style.visibility = "revert";
        errorMessage.textContent = "Please provide a valid email";
        errorIcon.style.display = "block";
    } else {
        emailInputStyle("pass");
        errorMessage.style.visibility = "hidden";
        errorIcon.style.display = "none";
    }
}