const emailField = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");
const errorIcon = document.querySelector(".icon-error");
const errorMessage = document.querySelector(".email-error-msg");

submitBtn.addEventListener('click', () => {
  if (!emailField.checkValidity()) {
    // email is not valid so we must display the error icon and message
    errorIcon.toggleAttribute('data-visible');
    errorMessage.toggleAttribute('data-visible');
  } else {
    // 
    console.log("valid email");
  }
})
// if (!emailField.checkValidity()) {
//   console.log('invalid email');
// } else {
//   console.log('valid email');
// } 