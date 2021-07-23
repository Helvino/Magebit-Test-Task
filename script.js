const form = document.getElementById('form');
const email = document.getElementById('email');
const checkbox = document.getElementById('checkbox');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
  // trim to remove whitespaces
  const emailValue = email.value.trim();

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

  //Not ideal but I couldn't figure out the exact regex syntax needed
  let isEmailColombian = emailValue.slice(-2);
    
  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  }
    
  if(emailValue === '' || emailValue === null) {
    setErrorFor(email, 'Email address is required');
  } else if (!isEmail(emailValue)) {
     setErrorFor(email, 'Please provide a valid e-mail address');
  } else if (isEmailColombian === 'co'){
    setErrorFor(email, 'We are not accepting subscriptions from Colombia emails');
  } else {
    setSuccessFor(email);
  }

  if (checkbox.checked == true) {
    setSuccessFor(checkbox);
  } else {
    setErrorFor(checkbox, 'You must accept the terms and conditions')
  }
}