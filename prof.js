// Simulating user data
const userData = {
    name: "Example",
    email: "example@gmail.com",
    age: 19,
    height: 188, // height in cm
    weight: 99   // weight in kg
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('userName').textContent = userData.name;
    document.getElementById('userEmail').textContent = userData.email;
    document.getElementById('userAge').textContent = userData.age;
    document.getElementById('userHeight').textContent = userData.height + ' cm';
    document.getElementById('userWeight').textContent = userData.weight + ' kg';
});

function calculateBMI() {
    const heightInMeters = userData.height / 100;
    const bmi = (userData.weight / (heightInMeters * heightInMeters)).toFixed(2);
    document.getElementById('bmiResult').textContent = 'BMI: ' + bmi;

    let calorieIntake;
    if (bmi < 18.5) {
        calorieIntake = '2500-3000 calories per day';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        calorieIntake = '2000-2500 calories per day';
    } else if (bmi >= 25 && bmi < 29.9) {
        calorieIntake = '1500-2000 calories per day';
    } else {
        calorieIntake = '1200-1500 calories per day';
    }

    document.getElementById('calorieIntake').textContent = calorieIntake;
}

function showPopup(message) {
    document.getElementById('popup-text').textContent = message;
    document.getElementById('popup-message').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup-message').style.display = 'none';
}
