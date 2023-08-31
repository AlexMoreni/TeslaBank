const btnLogin = document.querySelector("#btn-login");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email-login").value;
  const password = document.getElementById("password-login").value;

  if (email.trim() === "" || password.trim() === "") {
    document.getElementById("alert-null").style.display = "block";

    setTimeout(() => {
      document.getElementById("alert-null").style.display = "none";
    }, 4000);
    return;
  } else {
    document.getElementById("meuFormulario").submit();
  }
});
