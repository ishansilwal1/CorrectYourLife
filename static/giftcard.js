document.addEventListener('DOMContentLoaded', () => {
    let userPoints = 100; // Assuming initial points

    const pointsDisplay = document.getElementById('points');
    const giftCards = document.querySelectorAll('.giftcard');
    const popupMessage = document.getElementById('popup-message');
    const popupText = document.getElementById('popup-text');

    pointsDisplay.textContent = userPoints;

    giftCards.forEach(giftCard => {
        giftCard.addEventListener('click', () => {
            const requiredPoints = parseInt(giftCard.dataset.points);
            
            if (userPoints >= requiredPoints) {
                userPoints -= requiredPoints;
                pointsDisplay.textContent = userPoints;
                showPopup('Gift card successfully redeemed');
            } else {
                showPopup('Not enough points');
            }
        });
    });

    function showPopup(message) {
        popupText.textContent = message;
        popupMessage.style.display = 'block';
    }

    window.closePopup = function() {
        popupMessage.style.display = 'none';
    }
});
