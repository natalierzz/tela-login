// validação dos campos e fluxo de login
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".container");
  const emailInput = document.getElementById("email");
  const senhaInput = document.getElementById("senha");
  const errorMessage = document.querySelector(".error-message");
  const btnEntrar = document.querySelector(".btn.btn-primary");
  const btnCriar = document.querySelector(".btn.btn-secondary");

  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function validarSenha(senha) {
    return senha.length >= 6;
  }

  btnEntrar.addEventListener("click", (e) => {
    e.preventDefault();
    const emailValido = validarEmail(emailInput.value);
    const senhaValida = validarSenha(senhaInput.value);

    if (!emailValido) {
      errorMessage.textContent = "Digite um e-mail válido.";
      errorMessage.style.display = "block";
      return;
    }

    if (!senhaValida) {
      errorMessage.textContent = "A senha deve ter no mínimo 6 caracteres.";
      errorMessage.style.display = "block";
      return;
    }

    // caso passe nas validações (aqui entraria integração com API do Kauã)
    errorMessage.style.display = "none";
    alert("Login enviado para validação!");
  });

  btnCriar.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Redirecionar para tela de cadastro...");
  });
});
