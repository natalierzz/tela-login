// Seleciona o formulário e os campos
const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const senhaInput = document.querySelector("#senha");
const errorBox = document.querySelector(".error-message");

// Cria (ou usa) uma mensagem de sucesso
let successBox = document.querySelector(".success-message");
if (!successBox) {
  successBox = document.createElement("div");
  successBox.classList.add("success-message");
  successBox.style.display = "none";
  successBox.style.background = "#22c55e"; // verde
  successBox.style.color = "#fff";
  successBox.style.padding = "10px 12px";
  successBox.style.borderRadius = "8px";
  successBox.style.margin = "0 0 16px";
  successBox.style.textAlign = "left";
  successBox.style.fontSize = "14px";
  form.prepend(successBox);
}

// Função para exibir mensagens
function showMessage(type, message) {
  if (type === "error") {
    errorBox.style.display = "block";
    errorBox.textContent = message;
    successBox.style.display = "none";
  } else if (type === "success") {
    successBox.style.display = "block";
    successBox.textContent = message;
    errorBox.style.display = "none";
  }
}

// Validação básica
function validarLogin(event) {
  event.preventDefault(); // evita envio real

  const emailVal = emailInput.value.trim();
  const senhaVal = senhaInput.value.trim();

  // Regex simples de e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailVal)) {
    showMessage("error", "Digite um e-mail válido (ex: usuario@dominio.com).");
    return;
  }

  if (senhaVal.length < 6) {
    showMessage("error", "A senha deve ter pelo menos 6 caracteres.");
    return;
  }

  // Simulação de login bem-sucedido
  showMessage("success", "Login realizado com sucesso!");
}

// Ativa validação no submit
form.addEventListener("submit", validarLogin);
