// function openPopup(type) {
//     const popup = document.getElementById('popup');
//     const popupTitle = document.getElementById('popup-title');
//     const popupForm = document.getElementById('popup-form');

//     popupTitle.textContent = type === 'register' ? 'Register' : 'Login';
//     popupForm.onsubmit = function(event) {
//         event.preventDefault();
//         alert(`${type.charAt(0).toUpperCase() + type.slice(1)} form submitted`);
//         closePopup();
//     };

//     popup.style.display = 'flex';
// }

// function closePopup() {
//     const popup = document.getElementById('popup');
//     popup.style.display = 'none';
// }


document.addEventListener("DOMContentLoaded", function() {
    var registerBtn = document.getElementById("registerBtn");
    var loginBtn = document.getElementById("loginBtn");
    var popup = document.getElementById("popup");
    var closePopup = document.getElementById("closePopup");
    var popupTitle = document.getElementById("popupTitle");
    var popupForm = document.getElementById("popupForm");

    registerBtn.addEventListener("click", function() {
        popupTitle.innerText = "Register";
        popupForm.innerHTML = `
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required>
            <button type="submit" class="btn">Sign up</button>
        `;
        popup.style.display = "flex";
    });

    loginBtn.addEventListener("click", function() {
        popupTitle.innerText = "Login";
        popupForm.innerHTML = `
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>
            <button type="submit" class="btn">Sign in</button>
        `;
        popup.style.display = "flex";
    });

    closePopup.addEventListener("click", function() {
        popup.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });
});

