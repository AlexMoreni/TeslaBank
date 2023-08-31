const btnRegister = document.querySelector("#btn-register");
btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name-register").value;
  const age = document.getElementById("age-register").value;
  const email = document.getElementById("email-register").value;
  const password = document.getElementById("password-register").value;

  if (
    name.trim() === "" ||
    age.trim() === "" ||
    email.trim() === "" ||
    password.trim() === ""
  ) {
    document.getElementById("alert-null").style.display = "block";

    setTimeout(() => {
      document.getElementById("alert-null").style.display = "none";
    }, 4000);
    return;
  } else {
    document.getElementById("meuFormularioRegister").submit();
  }
});
