document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.querySelector("form");
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();
        e.stopPropagation();
        
        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phn").value.trim();
        const genre = document.getElementById("genre").value;
        const movieName = document.getElementById("mname").value.trim();
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const seats = document.getElementById("seat").value;
        const seatType = document.querySelector('input[name="seating"]:checked');
        const payment = document.querySelector('input[name="payment"]:checked');
        const includeFnb = document.getElementById("include-fnb").checked;
        const foodOption = document.getElementById("food-options").value;
        
        const nameRegex = /^[A-Za-z ]+$/;
        const phoneRegex = /^[6-9]\d{9}$/;
        
        // Name validation
        if (!nameRegex.test(name)) {
            alert("Enter a valid name (letters and spaces only).");
            return false;
        }
        
        // Phone number validation
        if (!phoneRegex.test(phone)) {
            alert("Enter a valid 10-digit phone number starting with 6-9.");
            return false;
        }
        
        // Genre validation
        if (genre === "select") {
            alert("Please select a movie genre.");
            return false;
        }
        
        // Movie name validation
        if (movieName.length < 1) {
            alert("Enter a movie name.");
            return false;
        }
        
        // Date & Time validation
        if (!date) {
            alert("Select a date for the show.");
            return false;
        }
        
        if (!time) {
            alert("Select a show time.");
            return false;
        }
        
        // Seats validation
        if (seats < 1 || seats > 15) {
            alert("Choose between 1 and 15 seats.");
            return false;
        }
        
        // Seat Type validation
        if (!seatType) {
            alert("Select a seat type.");
            return false;
        }
        
        // Food & Beverages validation
        if (includeFnb && foodOption === "Select Food and Beverages") {
            alert("Please select a food & beverage option.");
            return false;
        }
        
        // Payment validation
        if (!payment) {
            alert("Please select a payment method.");
            return false;
        }
        
        // ✅ All validations passed - redirect to success page
        window.location.href = "end.html";
    });
});