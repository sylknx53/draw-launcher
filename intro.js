setTimeout(() => {
  const intro = document.getElementById("intro");
  if (intro) intro.remove();
  document.body.classList.remove("locked");
}, 3000); // 3 saniye
