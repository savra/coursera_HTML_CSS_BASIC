'use strict';

function validateForm(data) {
    let form = document.getElementById(data.formId);
    form.addEventListener("submit", (event) => {
        let inputs = Array.from(document.querySelectorAll("input"));
        inputs.forEach(input => {
            if (input.hasAttribute("data-required") && input.value.length === 0) {
                input.classList.add(data.formInvalidClass)
            }
        });
    });
}