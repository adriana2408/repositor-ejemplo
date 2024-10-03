import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js"
import { showMessage } from "./toastMessage.js";

const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", async (e) => {
  //evitar que se recargue la página
  e.preventDefault();

  console.log("Formulario enviado");

  //Obtener los datos del formulario mediante sus id
  const email = signUpForm["signup-email"].value;
  const password = signUpForm["signup-password"].value;
  //Manejo de errores
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    //Registro exitoso
    console.log(userCredentials);
    showMessage("Usuario registrado", "success");
  } catch (error) {
    //Mostrar mensaje de error
    showMessage(error.code, "error");
  }
});
