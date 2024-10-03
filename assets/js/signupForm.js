const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", (e) => {
  //evitar que se recargue la página
  e.preventDefault();

  console.log("Formulario enviado");

  //Obtener los datos del formulario mediante sus id
  const email = signUpForm["signup-email"].value;
  const password = signUpForm["signup-password"].value;

  console.log(email);
  console.log(password);
});
