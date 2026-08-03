const service_card = document.querySelectorAll(".service-card");
service_card.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("open");
  });
});
