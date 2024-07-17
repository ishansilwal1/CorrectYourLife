document.addEventListener('DOMContentLoaded', () => {
    const foodTableBody = document.getElementById('food-table-body');
    const addMoreButton = document.getElementById('add-more');
    const totalCaloriesDisplay = document.getElementById('total-calories');
    const totalProteinDisplay = document.getElementById('total-protein');
    const totalFatsDisplay = document.getElementById('total-fats');
    const totalCarbsDisplay = document.getElementById('total-carbs');

    // Dummy data 
    const foodItems = [
        { name: 'Apple', quantity: '1', calories: 95, protein: 0.5, fats: 0.3, carbs: 25 },
        { name: 'Banana', quantity: '1', calories: 105, protein: 1.3, fats: 0.4, carbs: 27 },
        { name: 'Broccoli', quantity: '100g', calories: 35, protein: 2.8, fats: 0.4, carbs: 7 }
    ];

    function renderFoodItems() {
        foodTableBody.innerHTML = '';
        let totalCalories = 0;
        let totalProtein = 0;
        let totalFats = 0;
        let totalCarbs = 0;
        foodItems.forEach((item, index) => {
            totalCalories += item.calories;
            totalProtein += item.protein;
            totalFats += item.fats;
            totalCarbs += item.carbs;
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${item.calories}</td>
                <td>${item.protein}g</td>
                <td>${item.fats}g</td>
                <td>${item.carbs}g</td>
                <td class="actions">
                    <button class="add-button" onclick="addItem(${index})">Add</button>
                    <button class="delete-button" onclick="deleteItem(${index})">Delete</button>
                </td>
            `;
            foodTableBody.appendChild(row);
        });
        totalCaloriesDisplay.textContent = totalCalories;
        totalProteinDisplay.textContent = `${totalProtein}g`;
        totalFatsDisplay.textContent = `${totalFats}g`;
        totalCarbsDisplay.textContent = `${totalCarbs}g`;
    }

    window.addItem = function(index) {
        // add items
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
