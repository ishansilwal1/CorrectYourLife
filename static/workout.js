document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.task-checkbox');
    const pointsDisplay = document.getElementById('points');
    let points = 0;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const taskPoints = parseInt(this.dataset.points);

            if (this.checked) {
                points += taskPoints;
            } else {
                points -= taskPoints;
            }

            pointsDisplay.textContent = points;
        });
    });
});
