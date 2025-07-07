document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById('login');
  const signupForm = document.getElementById('newuser');

  const toSignupLink = document.querySelector('a#signup');
  const toLoginLink = document.querySelector('a#login');

  // Toggle to Signup
  toSignupLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  });

  // Toggle to Login
  toLoginLink.addEventListener("click", (e) => {
    e.preventDefault();
    signupForm.style.display = "none";
    loginForm.style.display = "block";
  });

  // Email format regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle Login
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginForm.querySelector("#username").value.trim(); // assuming #username is used for email
    const password = loginForm.querySelector("#password").value;

    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Dummy credentials
    const validEmail = "user@example.com";
    const validPassword = "1234";

    if (email === validEmail && password === validPassword) {
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password.");
    }
  });

  // Handle Signup
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = signupForm.querySelector("#username").value.trim(); // assuming #username is used for email
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

    if (password !== confirm) {
      alert("Passwords do not match.");
      return;
    }

    // Simulate successful signup
    window.location.href = "index.html";
  });
});