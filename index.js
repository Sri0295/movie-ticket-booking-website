
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("bookingForm");
    const foodCheckbox = document.getElementById("include-fnb");
    const foodOptions = document.getElementById("food-options");
    const upiSection = document.getElementById("upi");
    const paymentRadios = document.getElementsByName("payment");

    foodCheckbox.addEventListener("change", function () {
        foodOptions.style.display = this.checked ? "block" : "none";
        foodOptions.required = this.checked;
    });

    paymentRadios.forEach(radio => {
        radio.addEventListener("change", function () {
            upiSection.style.display = this.value === "UPI Payment" ? "block" : "none";
        });
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phn").value.trim();
        const genre = document.getElementById("genre").value;
        const movieName = document.getElementById("mname").value.trim();
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const seats = document.getElementById("seat").value;
        const seatType = document.querySelector('input[name="seating"]:checked');
        const payment = document.querySelector('input[name="payment"]:checked');
        const includeFnb = foodCheckbox.checked;
        const selectedFood = foodOptions.value;

        const nameRegex = /^[A-Za-z ]+$/;
        const phoneRegex = /^[6-9]\d{9}$/;

        if (!nameRegex.test(name)) {
            alert("Enter a valid name (letters and spaces only).");
            return;
        }

        if (!phoneRegex.test(phone)) {
            alert("Enter a valid 10-digit phone number starting with 6-9.");
            return;
        }

        if (genre === "select") {
            alert("Please select a movie genre.");
            return;
        }

        if (!movieName) {
            alert("Please enter a movie name.");
            return;
        }

        if (!date) {
            alert("Please select a date.");
            return;
        }

        if (!time) {
            alert("Please select a time.");
            return;
        }

        if (seats < 1 || seats > 15) {
            alert("Please choose between 1 and 15 seats.");
            return;
        }

        if (!seatType) {
            alert("Please select a seat type.");
            return;
        }

        if (includeFnb && selectedFood === "Select Food and Beverages") {
            alert("Please select a food and beverage option.");
            return;
        }

        if (!payment) {
            alert("Please select a payment method.");
            return;
        }


        window.location.href = "end.html";
    });
});
