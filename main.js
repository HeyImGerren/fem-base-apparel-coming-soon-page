const emailField = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener('click', () => {
  if (!emailField.checkValidity()) {
    console.log('invalid email')
  } else {
    console.log('valid email');
  } 
})
// if (!emailField.checkValidity()) {
//   console.log('invalid email');
// } else {
//   console.log('valid email');
// } 