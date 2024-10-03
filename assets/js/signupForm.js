const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", (e) => {
  //evitar que se recargue la página
  e.preventDefault();

  console.log("Formulario enviado");
});
