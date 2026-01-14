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
