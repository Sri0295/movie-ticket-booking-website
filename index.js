document.addEventListener("DOMContentLoaded", function () {
    
    const cancelBtn = document.getElementById("cancelBooking");
    cancelBtn && cancelBtn.addEventListener("click", function () {
        location.reload();
    });
    const form = document.getElementById("bookingForm");
    const foodCheckbox = document.getElementById("include-fnb");
    const foodOptions = document.getElementById("fnb-options");
    const upiSection = document.getElementById("upi");
    const paymentRadios = document.getElementsByName("payment");
    const errorContainer = document.getElementById("errorMessages");

    
    const highlightErrorField = (field, isError) =>
        field && field.style && (field.style.border = isError ? "2px solid red" : "1px solid #ccc");

    const toggleGroupError = (groupEl, hasError) =>
        groupEl && groupEl.classList && groupEl.classList[hasError ? "add" : "remove"]("input-group-error");


    foodCheckbox.addEventListener("change", function () {
        foodOptions.style.display = this.checked ? "block" : "none";

        !this.checked && document.querySelectorAll('input[name="fnb"]').forEach(cb => cb.checked = false);

    });

    paymentRadios.forEach(radio => {
        radio.addEventListener("change", function () {
            upiSection.style.display = this.value === "UPI Payment" ? "block" : "none";
        });
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const Seterrors = [];
        errorContainer.innerHTML = "";

        const nameInput = document.getElementById("name");
        const phoneInput = document.getElementById("phn");
        const genreSelect = document.getElementById("genre");
        const movieInput = document.getElementById("mname");
        const dateInput = document.getElementById("date");
        const timeInput = document.getElementById("time");
        const seatInput = document.getElementById("seat");

        const seatTypeGroup = document.getElementById("seatTypeGroup");
        const seatTypeChecked = document.querySelector('input[name="seating"]:checked');

        const paymentGroup = document.getElementById("paymentGroup");
        const paymentChecked = document.querySelector('input[name="payment"]:checked');

        const fnbGroup = document.getElementById("fnbGroup");
        const includeFnb = foodCheckbox.checked;
        const selectedFood = document.querySelectorAll('input[name="fnb"]:checked');

        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        const genre = genreSelect.value;
        const movieName = movieInput.value.trim();
        const date = dateInput.value;
        const time = timeInput.value;
        const seats = seatInput.value;

        const nameValid = /^[A-Za-z ]+$/.test(name);
        const phoneValid = /^[6-9]\d{9}$/.test(phone);
        const genreValid = genre !== "select";
        const movieValid = !!movieName;
        const dateValid = !!date;
        const timeValid = !!time;
        const seatValid = seats >= 1 && seats <= 15;
        const seatTypeValid = !!seatTypeChecked;
        const paymentValid = !!paymentChecked;
        const fnbValid = !includeFnb || selectedFood.length > 0;

        
        const validations = [
            {
                valid: nameValid,
                msg: "❌ Name must contain only letters and spaces.",
                action: (isValid) => highlightErrorField(nameInput, !isValid)
            },

            {
                valid: phoneValid,
                msg: "❌ Phone number must start with 6-9 and be 10 digits.",
                action: (isValid) => highlightErrorField(phoneInput, !isValid)
            },

            {
                valid: genreValid,
                msg: "❌ Please select a movie genre.",
                action: (isValid) => highlightErrorField(genreSelect, !isValid)
            },

            {
                valid: movieValid,
                msg: "❌ Movie name is required.",
                action: (isValid) => highlightErrorField(movieInput, !isValid)
            },

            {
                valid: dateValid,
                msg: "❌ Date is required.",
                action: (isValid) => highlightErrorField(dateInput, !isValid)
            },

            {
                valid: timeValid,
                msg: "❌ Time is required.",
                action: (isValid) => highlightErrorField(timeInput, !isValid)
            },

            {
                valid: seatValid,
                msg: "❌ Choose between 1 and 15 seats.",
                action: (isValid) => toggleGroupError(seatInput, !isValid)
            },

            {
                valid: seatTypeValid,
                msg: "❌ Please select a seating type.",
                action: (isValid) => toggleGroupError(seatTypeGroup, !isValid)
            },

            {
                valid: fnbValid,
                msg: "❌ Please choose at least one food/beverage option.",
                action: (isValid) => toggleGroupError(fnbGroup, !isValid)
            },

            {
                valid: paymentValid,
                msg: "❌ Please select a payment method.",
                action: (isValid) => toggleGroupError(paymentGroup, !isValid)
            },


        ];

        const errors = validations.filter(v => !v.valid);
        errorContainer.innerHTML = errors.map(e => `<div>${e.msg}</div>`).join("");
        validations.map(v => v.action(v.valid)); 

        errors.length === 0 && (window.location.href = "end.html");
        errors.length > 0 && errorContainer.scrollIntoView({ behavior: "smooth" });


       
    });
});
