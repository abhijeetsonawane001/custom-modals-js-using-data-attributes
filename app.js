// Open modal function
function openModal(modalId) {
  const modal = document.querySelector(`[data-modal="${modalId}"]`);
  modal.style.display = "block";
}

// Close modal function
function closeModal(modalId) {
  const modal = document.querySelector(`[data-modal="${modalId}"]`);
  modal.style.display = "none";
}

// Close modal when close button is clicked
document.querySelectorAll("[data-close-modal]").forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    const modalId = closeButton.getAttribute("data-close-modal");
    closeModal(modalId);
  });
});

// Open modal when trigger button is clicked
document.querySelectorAll("[data-open-modal]").forEach((triggerButton) => {
  triggerButton.addEventListener("click", () => {
    const modalId = triggerButton.getAttribute("data-open-modal");
    openModal(modalId);
  });
});
