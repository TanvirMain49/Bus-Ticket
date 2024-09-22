const selectedSeat = document.getElementById('selected-seat');
const seatCnt = document.getElementById('seat-cnt');
const availableSeat = document.getElementById('available-seat');
const totalTicketPrice = document.getElementById('total-price');
const copuponField = document.getElementById('copupon-field');
const copuponBtn = document.getElementById('copupon-btn');
const copuponPrice = document.getElementById('copupon-price');
const defaultText = document.getElementById('default-text');
const numberField = document.getElementById('number-field');
const nextBtn = document.getElementById('next-btn');
const modal = document.getElementById('my-modal-1');
const btnContinue = document.getElementById('btn-continue');
let cnt = 0;
let totalPrice = 0;

function handleSelectedSit(event) {

    // Check if the seat is already selected
    if (event.classList.contains("bg-[#1DD100]")) {
        alert("This seat is already selected!");
        return;
    }

    else {


        defaultText.classList.add('hidden')

        // Check if the user has already selected 4 seats
        if (cnt >= 4) {
            alert('You can book only 4 seats');
            return;
        }

        // add background color after click
        event.classList.add("bg-[#1DD100]")
        event.classList.add("text-white")

        // increase seat Number
        cnt++;
        seatCnt.innerText = cnt;

        //decrease seat Number
        const availableSeatRemains = Number(availableSeat.innerText)
        availableSeat.innerText = availableSeatRemains - 1;

        // which seat you buy record
        selectedSeat.innerHTML += `
        <li class="text-base font-normal flex justify-between">
        <span>${event.innerText}</span>
        <span>Economics</span>
        <span>550TK</span>
        </li>
        `

        // update Total price
        totalPrice += 550;
        totalTicketPrice.innerText = totalPrice.toFixed(2);

        // copupon code
        if (cnt > 3) {
            copuponField.removeAttribute('disabled')
            copuponBtn.removeAttribute('disabled')
        }
    }

}

// Coupon button event listener
copuponBtn.addEventListener('click', function () {
    const couponCode = copuponField.value;
    const totalTicketPriceNum = parseFloat(totalTicketPrice.innerText);
    let discount = 0;

    if (couponCode !== 'NEW 15' && couponCode !== 'Couple 20') {
        alert('Invalid coupon code!');
        return;
    }

    if (couponCode === 'NEW 15') {
        discount = totalTicketPriceNum * 0.15;

    }
    else if (couponCode === 'Couple 20') {
        discount = totalTicketPriceNum * 0.20;
    }
    const showCopuponPrice = document.getElementById('show-copupon-price');
    showCopuponPrice.innerHTML = `
    <p>Discount</p>
        <p>
            <span>-BDT:</span>
            <span>${discount.toFixed(2)}</span>
        </p>
    
    `
    copuponPrice.innerText = (totalTicketPriceNum - discount).toFixed(2);
});

numberField.addEventListener('input', function (e) {

    const inputValue = e.target.value;
    if (inputValue.length >= 11) {
        nextBtn.removeAttribute('disabled')
    }

})

// Add event listener to the "Next" button
nextBtn.addEventListener('click', function () {
    modal.showModal();
});

btnContinue.addEventListener('click', function () {
    window.location.reload();
});
