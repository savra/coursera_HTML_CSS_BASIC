"use strict";

// ÐšÐ¾Ð´ Ð²Ð°Ð»Ð¸Ð´Ð°Ñ†Ð¸Ð¸ Ñ„Ð¾Ñ€Ð¼Ñ‹

function validateForm(objectSets) {
    let form = document.getElementById(objectSets.formId);
    let inputs = [...form.querySelectorAll('input')];

    inputs.forEach(element => {
        element.addEventListener("blur", event => {
            if (!validateSelector(event.target)) {
                event.target.classList.add(objectSets.inputErrorClass);
            }
        }, true);
        element.addEventListener("focus", event => {
            event.target.classList.remove(objectSets.inputErrorClass);
        }, true);
    });

    form.addEventListener("submit", event => {
        let isFormValid = [...form.getElementsByTagName('input')]
            .every(inputElement => validateSelector(inputElement));
        let eventTarget = event.target;
        let formValid = objectSets.formValidClass;
        let formInvalid = objectSets.formInvalidClass;
        let formClass = isFormValid ? formValid : formInvalid;
        let formElement = eventTarget.classList;
        formElement.remove(formValid, formInvalid);
        formElement.add(formClass);
        event.preventDefault();
    });

    function validateSelector(selector) {
        let isValid;

        if (!selector.value) {
            return !Object.keys(selector.dataset).includes('required');
        }
        if (selector.dataset.hasOwnProperty("validator")) {
            let validator = selector.dataset.validator;
            switch (validator) {
                case "letters":
                    isValid = validateLetters(selector);
                    break;
                case "number":
                    isValid = validateNumber(selector);
                    break;
                case "regexp":
                    isValid = validateRegexp(selector);
                    break;
                default:
                    isValid = false;
                    break;
            }
        } else {
            isValid = false;
        }

        return isValid;
    }

    function validateLetters(selector) {
        return /^[a-zÐ°-ÑÑ‘]+$/i.test(selector.value);
    }

    function validateNumber(selector) {
        let numValid = !isNaN(selector.value);
        let inputValue = parseInt(selector.value);
        let min = selector.dataset.validatorMin;
        let max = selector.dataset.validatorMax;

        if (numValid && min) numValid = inputValue > min;
        if (numValid && max) numValid = inputValue < max;

        return numValid;
    }

    function validateRegexp(selector) {
        return RegExp(selector.dataset.validatorPattern).test(selector.value);
    }
}