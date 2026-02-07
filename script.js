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
const navMenu = document.querySelector(".menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }),
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

/*page nettoyage de vitres

const cards = document.querySelectorAll(".section-card");

window.addEventListener("scroll", () => {
  cards.forEach((card) => {
    const pos = card.getBoundingClientRect().top;
    if (pos < window.innerHeight - 50) {
      card.style.transform = "translateY(0)";
      card.style.opacity = "1";
    }
  });
});*/
document
  .querySelectorAll(".quote-form input, .quote-form textarea")
  .forEach((el) => {
    el.addEventListener("focus", () => {
      el.style.boxShadow = "0 0 0 3px rgba(255,196,0,0.3)";
    });
    el.addEventListener("blur", () => {
      el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
    });
  });

//fixer le menu au scroll
window.addEventListener("scroll", function () {
  const menu = document.querySelector(".header-menu");

  if (window.scrollY > 100) {
    menu.classList.add("fixed-menu");
  } else {
    menu.classList.remove("fixed-menu");
  }
});
