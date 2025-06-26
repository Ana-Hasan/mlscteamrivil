const cards = document.querySelectorAll(".member-card");
const popup = document.getElementById("popup");
const popupName = document.getElementById("popupName");
const popupRole = document.getElementById("popupRole");
const popupInfo = document.getElementById("popupInfo");
const closeBtn = document.getElementById("closeBtn");

cards.forEach(card => {
  card.addEventListener("click", () => {
    popupName.textContent = card.dataset.name;
    popupRole.textContent = card.dataset.role;
    popupInfo.textContent = card.dataset.info;
    popup.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
