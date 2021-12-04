const popup = document.getElementById("js-modal-popup");
const overlay = document.getElementById("js-modal-overlay");
const closeButton = document.getElementById("js-close-button");
const acceptButton = document.getElementById("js-accept-button");
const buttonContainer = document.getElementById("js-button-container");
const successContainer = document.getElementById("js-success-container");
function acceptOffer() {
  buttonContainer.hidden = true;
  successContainer.hidden = null;
  closeModal();
}

function closeModal() {
  overlay.hidden = true;
}

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closeModal();
  }
});
popup.addEventListener("click", () => {
  overlay.hidden = null;
});

closeButton.addEventListener("click", () => {
  closeModal();
});

acceptButton.addEventListener("click", acceptOffer);
