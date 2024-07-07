function openPopup(type) {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popupTitle');
    const popupForm = document.getElementById('popupForm');
    const socialButtons = document.getElementById('socialButtons');
    const socialLoginButtons = document.getElementById('socialLoginButtons');
    const forgotPassword = document.getElementById('forgotPassword');

    if (type === 'register') {
        popupTitle.textContent = 'Register';
        popupForm.innerHTML = `
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
            <label for="age">Age</label>
            <input type="number" id="age" name="age" min="1" required>
            <label for="weight">Weight</label>
            <input type="number" id="weight" name="weight" min="1" required>
            <label for="height">Height</label>
            <input type="number" id="height" name="height" min="1" required>
            <button type="submit" class="btn">Sign up</button>
        `;
        socialButtons.style.display = 'flex';
        socialLoginButtons.style.display = 'none';
        forgotPassword.style.display = 'none';
    } else {
        popupTitle.textContent = 'Login';
        popupForm.innerHTML = `
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>
            <div class="forgot-password"><a href="#">Forgot password?</a></div>
            <button type="submit" class="btn">Login</button>
        `;
        socialButtons.style.display = 'none';
        socialLoginButtons.style.display = 'flex';
        forgotPassword.style.display = 'block';
    }

    popupForm.onsubmit = function(event) {
        event.preventDefault();
        alert(`${type.charAt(0).toUpperCase() + type.slice(1)} form submitted`);
        closePopup();
    };

    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function handleSocialSignup(platform) {
    alert(`Sign up with ${platform} clicked`);
    closePopup();
}

function handleSocialLogin(platform) {
    alert(`Login with ${platform} clicked`);
    closePopup();
}

document.addEventListener("DOMContentLoaded", function() {
    var registerBtn = document.getElementById("registerBtn");
    var loginBtn = document.getElementById("loginBtn");
    var popup = document.getElementById("popup");
    var closePopup = document.getElementById("closePopup");

    registerBtn.addEventListener("click", function() {
        openPopup('register');
    });

    loginBtn.addEventListener("click", function() {
        openPopup('login');
    });

    closePopup.addEventListener("click", function() {
        popup.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });

    // Social button handlers
    document.querySelector('.facebook-btn').addEventListener('click', function() {
        if (document.getElementById('popupTitle').innerText === 'Register') {
            handleSocialSignup('Facebook');
        } else {
            handleSocialLogin('Facebook');
        }
    });

    document.querySelector('.google-btn').addEventListener('click', function() {
        if (document.getElementById('popupTitle').innerText === 'Register') {
            handleSocialSignup('Google');
        } else {
            handleSocialLogin('Google');
        }
    });
});
