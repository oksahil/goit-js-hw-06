const form = document.querySelector(".login-form");

form.addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;


  if (email === "" || password === "") {
      return console.log("Please fill in all the fields!");
  }
    const formData = {
        email,
        password,
    };

  console.log(formData);
  console.log(`Email: ${email}, Password: ${password}`);
  event.currentTarget.reset();
}