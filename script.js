document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById('login');
  const signupForm = document.getElementById('newuser');

  const toSignupLink = document.querySelector('a#signup');
  const toLoginLink = document.querySelector('a#login');

  
  toSignupLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  });

  
  toLoginLink.addEventListener("click", (e) => {
    e.preventDefault();
    signupForm.style.display = "none";
    loginForm.style.display = "block";
  });

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

  
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginForm.querySelector("#username").value.trim();
    const password = loginForm.querySelector("#password").value;

    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters and include uppercase, lowercase, number, and special character.");
      return;
    }

    window.location.href = "index.html";
  });

  
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = signupForm.querySelector("#username").value.trim();
    const password = signupForm.querySelector("#password").value;
    const confirm = signupForm.querySelector("#Confirm").value;

    if (!email || !password || !confirm) {
      alert("Please fill in all fields.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters and include uppercase, lowercase, number, and special character.");
      return;
    }

    if (password !== confirm) {
      alert("Passwords do not match.");
      return;
    }

    window.location.href = "index.html";
  });

  
  const passwordInput = signupForm.querySelector("#password");
  const strengthText = document.getElementById("strengthText");

  passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;

    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[@#$%^&+=!]/.test(password)) strength++;

    if (strength <= 2) {
      strengthText.textContent = "Weak";
      strengthText.className = "weak";
    } else if (strength === 3 || strength === 4) {
      strengthText.textContent = "Medium";
      strengthText.className = "medium";
    } else if (strength === 5) {
      strengthText.textContent = "Strong";
      strengthText.className = "strong";
    } else {
      strengthText.textContent = "";
      strengthText.className = "";
    }
  });
});
