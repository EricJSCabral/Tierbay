function abrirLightbox(src) {
    document.getElementById("imgLightbox").src = src;
    document.getElementById("lightbox").style.display = "flex";
  }

  function fecharLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }

  // Fechar clicando fora da imagem
  document.getElementById("lightbox").addEventListener("click", function(e) {
    if (e.target === this) {
      fecharLightbox();
    }
  });