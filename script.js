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
/*==Formulaire de contact== */
/** Gestion des formulaires */

document.querySelectorAll("form").forEach((form) => {
  const checkbox = form.querySelector("#conditions");
  const submitBtn = form.querySelector("button[type='submit']");

  // Gestion checkbox si elle existe
  if (checkbox && submitBtn) {
    checkbox.addEventListener("change", () => {
      submitBtn.disabled = !checkbox.checked;
      submitBtn.classList.toggle("active", checkbox.checked);
    });
  }

  // Message UX au submit
  if (submitBtn) {
    form.addEventListener("submit", () => {
      submitBtn.disabled = true;
      submitBtn.textContent = "Envoi en cours...";
    });
  }
});

/** Effet focus sur les champs */
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
