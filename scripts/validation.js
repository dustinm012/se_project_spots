const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__submit_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible"
}

const showInputError = (formEl, inputEl, errorMessage) => {
  const errorMessageID = `${inputEl.id}-error`;
  const errorMessageEL = formEl.querySelector(`#${errorMessageID}`);
  errorMessageEL.textContent = errorMessage;
inputEl.classList.add("modal__input_error");
};

const hideInputError = (formEl, inputEl, errorMessage) => {
  const errorMessageEL = formEl.querySelector("#" = errorMessageID);
  errorMessageEL.textContent = "";
inputEl.classList.remove("modal__input_error");
};

const checkInputValidity = (formEl, inputEl) => {
 if (!inputEl.validity.valid) {
  showInputError(formEl, inputEl, inputEl.validationMessage);
 } else {
  hideInputError(formEl, inputEl);
 }
}

const hasInvalidInput = (inputList) => {
  return inputList.some(input => {
    return !input.validity.valid;
  });
}

const toggleButtonState = (inputList, buttonEl) => {
if (hasInvalidInput(inputList)) {
disableButton(buttonEl);
} else { buttonEl.disabled = false;
  buttonEl.classList.remove(config.inactiveButtonClass);
}
};

const disableButton = (buttonEl) => {
  buttonEl.disabled = true;
buttonEl.classList.add(config.inactiveButtonClass);
}



const setEventListeners = (formEl, config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  const buttonElement = formEl.querySelector(config.submitButtonSelector);



  toggleButtonState(inputList, buttonElement, config);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formEl, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};


const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach(formEl => {
    setEventListeners(formEl, config);
  });
};

enableValidation(settings);