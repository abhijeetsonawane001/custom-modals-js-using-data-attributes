// Open modal function
function openModal(modalId) {
  const modal = document.querySelector(`#${modalId}`);
  modal.style.display = "block";
}

// Close modal function
function closeModal(modalId) {
  const modal = document.querySelector(`#${modalId}`);
  modal.style.display = "none";
}

// Open modal when trigger button is clicked
document.querySelectorAll("[data-modal-show]").forEach((triggerButton) => {
  triggerButton.addEventListener("click", () => {
    const modalId = triggerButton.getAttribute("data-modal-show");
    openModal(modalId);
  });
});

// Close modal when close button is clicked
document.querySelectorAll("[data-modal-hide]").forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    const modalId = closeButton.getAttribute("data-modal-hide");
    closeModal(modalId);
  });
});
