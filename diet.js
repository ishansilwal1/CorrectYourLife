document.addEventListener('DOMContentLoaded', () => {
    const foodTableBody = document.getElementById('food-table-body');
    const addMoreButton = document.getElementById('add-more');
    const totalCaloriesDisplay = document.getElementById('total-calories');

    
    const foodItems = [
        { name: 'Apple', quantity: '1', calories: 95 },
        { name: 'Banana', quantity: '1', calories: 105 },
        { name: 'Broccoli', quantity: '100g', calories: 35 }
    ];

    function renderFoodItems() {
        foodTableBody.innerHTML = '';
        let totalCalories = 0;
        foodItems.forEach((item, index) => {
            totalCalories += item.calories;
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${item.calories}</td>
                <td class="actions">
                    <button class="add-button" onclick="addItem(${index})">Add</button>
                    <button class="delete-button" onclick="deleteItem(${index})">Delete</button>
                </td>
            `;
            foodTableBody.appendChild(row);
        });
        totalCaloriesDisplay.textContent = `Total Calories: ${totalCalories}`;
    }

    window.addItem = function(index) {
        // add itema
        const item = foodItems[index];
        foodItems.push(item);
        renderFoodItems();
    };

    window.deleteItem = function(index) {
        foodItems.splice(index, 1);
        renderFoodItems();
    };

    addMoreButton.addEventListener('click', () => {
        // Redirect to another page
        window.location.href = 'add_food.html';
    });

    renderFoodItems();
});
