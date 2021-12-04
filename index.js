// VARIABLES
const popup = document.getElementById("js-modal-popup");
const overlay = document.getElementById("js-modal-overlay");
const closeButton = document.getElementById("js-close-button");
const acceptButton = document.getElementById("js-accept-button");
const buttonContainer = document.getElementById("js-button-container");
const successContainer = document.getElementById("js-success-container");

// FUNCTIONS
function acceptOffer() {
  buttonContainer.hidden = true;
  successContainer.hidden = false;
  closeModal();
}

function closeModal() {
  overlay.hidden = true;
}

// METHODS
// Clicking on overlay will close modal
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closeModal();
  }
});

// Modal Opener/Overlay revealed
popup.addEventListener("click", () => {
  overlay.hidden = false;
});

// Closes Modal after clicking on [x]
closeButton.addEventListener("click", () => {
  closeModal();
});

// Calls acceptOffer function after clicking [Accept Offer] + reveals js-success-container
acceptButton.addEventListener("click", acceptOffer);

// Notes:
// Created functions for
// 1. Close modal button
// 2. Accept offer button

// null = represents the intentional absence of any object value
