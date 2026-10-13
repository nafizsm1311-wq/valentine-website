const messages = [
  "Pookie please... 🥺",
  "Are you sure? 💗",
  "Think again! 😭",
  "Please say Yes! ❤️",
  "Ekbar Yes bolo! 🥹",
  "Last chance! 💕"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton =
    document.querySelector(".no-button");

  const yesButton =
    document.querySelector(".yes-button");

  noButton.textContent = messages[messageIndex];

  messageIndex =
    (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );

  yesButton.style.fontSize =
    `${Math.min(currentSize * 1.3, 100)}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
