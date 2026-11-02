if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('Service Worker registrado!', reg))
      .catch(err => console.error('Erro ao registrar Service Worker', err));
  });
}

// Atualiza o status de conexão na tela
function atualizarStatus() {
  const statusDiv = document.getElementById('status');
  if (navigator.onLine) {
    statusDiv.textContent = "Status: Online";
    statusDiv.style.color = "green";
  } else {
    statusDiv.textContent = "Status: Offline (Funcionando!)";
    statusDiv.style.color = "orange";
  }
}
window.addEventListener('online', atualizarStatus);
window.addEventListener('offline', atualizarStatus);
atualizarStatus();

