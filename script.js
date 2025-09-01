// Ajusta o layout dinamicamente com base na largura da tela
function ajustarLayout() {
  const container = document.querySelector('.container');
  const h1 = document.querySelector('h1');
  const inputs = document.querySelectorAll('input');
  const btns = document.querySelectorAll('.btn');

  if (window.innerWidth < 360) {
    container.style.padding = '12px';
    h1.style.fontSize = '20px';
    inputs.forEach(input => input.style.padding = '10px');
    btns.forEach(btn => btn.style.padding = '10px');
  } else {
    container.style.padding = '24px';
    h1.style.fontSize = '24px';
    inputs.forEach(input => input.style.padding = '12px');
    btns.forEach(btn => btn.style.padding = '12px 14px');
  }
}

// Executa ao carregar a página e ao redimensionar a janela
window.addEventListener('load', ajustarLayout);
window.addEventListener('resize', ajustarLayout);
