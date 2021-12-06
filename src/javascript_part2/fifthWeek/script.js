'use strict';

function validateForm(data) {
    let form = document.getElementById(data.formId);
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let inputs = Array.from(document.querySelectorAll("input"));
        let formIsValid = [];

        inputs.forEach(input => {
            formIsValid.push(validateInput(input, data.inputErrorClass));
        });

        if (form.classList.contains(data.formValidClass)) {
            form.classList.remove(data.formValidClass);
        }

        if (form.classList.contains(data.formInvalidClass)) {
            form.classList.remove(data.formInvalidClass);
        }

        if (!formIsValid.includes(false)) {
            form.classList.add(data.formValidClass);
        } else {
            form.classList.add(data.formInvalidClass);
        }
    });

    form.addEventListener("blur", (event) => {
        if (event.target.tagName === "INPUT") {
            validateInput(event.target, data.inputErrorClass);
        }
    }, true);

    form.addEventListener("focus", (event) => {
        if (event.target.tagName === "INPUT") {
            if (event.target.classList.contains("input_error")) {
                event.target.classList.remove("input_error");
            }
        }
    }, true);
}

function validateInput(input, inputErrorClass) {
    let isValid = true;
    if (input.hasAttribute("data-required") && input.value.length === 0) {
        input.classList.add(inputErrorClass);
        isValid = false;
    }

    if (input.dataset.hasOwnProperty("validator")) {
        switch (input.dataset.validator) {
            case "letters":
                if (input.value.match("^(?:[a-z]|[A-Z]|[а-я]|[А-Я])+$") === null) {
                    input.classList.add(inputErrorClass);
                    isValid = false;
                }
                break;
            case "number":
                if (input.value.match("^[0-9]+$") === null) {
                    input.classList.add(inputErrorClass);
                    isValid = false;
                    break;
                }

                if (input.dataset.validatorMin && (Number(input.value) < Number(input.dataset.validatorMin))) {
                    input.classList.add(inputErrorClass);
                    isValid = false;
                    break;
                }

                if (input.dataset.validatorMax && Number(input.value) > Number(input.dataset.validatorMax)) {
                    input.classList.add(inputErrorClass);
                    isValid = false;
                    break;
                }

                break;
            case "regexp":
                if (input.value.match(input.dataset.validatorPattern) === null) {
                    input.classList.add(inputErrorClass);
                    isValid = false;
                }

                break;
        }
    }

    return isValid;
}