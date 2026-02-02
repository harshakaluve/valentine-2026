const messages = [
    "Are you sure, Spoorthi?",
    "Think about our first meeting on March 2nd... ☕",
    "What about our Bumble match on Feb 26th? 🐝",
    "Remember when I said 'I love you' on March 16th? ❤️",
    "Think about when I proposed on Sept 27th! 💍",
    "Remember our engagement on October 5th? ✨",
    "Our wedding is literally in 31 days! 👰",
    "Think about Thailand on your birthday! 🏝️",
    "I'll be very very very sad...",
    "Just kidding, say yes please! ❤️"
];
let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
