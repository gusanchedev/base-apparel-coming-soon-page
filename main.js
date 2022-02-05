import "./style.css";

const emailContainer = document.getElementById("email-container");
const emailInput = document.getElementById("email");
const errorIcon = document.getElementById("error-icon");
const emailErrorLabel = document.getElementById("email-error-label");
const submitButton = document.getElementById("submit-button");

const validEmailFormat = /^\D\w*[.]*\w*@\w*[.]\w*/;

emailInput.addEventListener("focus", (e) => {
  errorIcon.classList.replace("block", "hidden");
  emailErrorLabel.classList.replace("block", "hidden");
  emailContainer.style.borderColor = "rgb(156 163 175)";
});

submitButton.addEventListener("click", (e) => {
  if (!emailInput.value) {
    emailContainer.style.borderColor = "hsl(0, 93%, 68%)";
    errorIcon.classList.replace("hidden", "block");
    emailErrorLabel.classList.replace("hidden", "block");
  } else if (!validEmailFormat.test(emailInput.value)) {
    emailContainer.style.borderColor = "hsl(0, 93%, 68%)";
    errorIcon.classList.replace("hidden", "block");
    emailErrorLabel.classList.replace("hidden", "block");
  } else {
    emailInput.value = "";
  }
});
