const track = document.querySelector(".track");
const dots = document.querySelectorAll(".dot");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    // déplacement horizontal
    track.style.transform = `translateX(-${index * 100}%)`;

    // gestion dot actif
    dots.forEach((d) => d.classList.remove("active"));
    dot.classList.add("active");
  });
});
/*menu hamburger*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

/*menu hamburger
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (!hamburger || !navMenu) {
    console.error("Hamburger ou menu introuvable");
    return;
  }

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});*/

/**Formulaire de contact */
const checkbox = document.getElementById("conditions");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("devisForm");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    submitBtn.disabled = false;
    submitBtn.classList.add("active");
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.remove("active");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Votre demande de devis a bien été envoyée !");
  form.reset();
  submitBtn.disabled = true;
  submitBtn.classList.remove("active");
});
