setTimeout(() => {
  const intro = document.getElementById("intro");

  intro.style.opacity = "0";

  setTimeout(() => {
    intro.remove();
    document.body.classList.remove("locked");
  }, 1200);

}, 2200);
