const cards = document.querySelectorAll('.member-card');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
const popupName = document.getElementById('popupName');
const popupRole = document.getElementById('popupRole');
const popupInfo = document.getElementById('popupInfo');
const popupImg = document.getElementById('popupImg');

cards.forEach(card => {
  card.addEventListener('click', () => {
    popupName.textContent = card.dataset.name;
    popupRole.textContent = card.dataset.role;
    popupImg.src = card.dataset.img;
    popupInfo.textContent = `Details about ${card.dataset.name} as ${card.dataset.role}.`;
    popup.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
