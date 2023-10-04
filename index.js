const billEl = document.getElementById("bill");
const tipEl = document.getElementById("tip");
const btnEl = document.getElementById("calculate");
const totalEl = document.getElementById("total");


function calculateTip() {
    let billValue = billEl.value;
    let tipValue = tipEl.value;
    let totalValue = billValue * (1 + tipValue / 100);
    totalEl.innerText = totalValue.toFixed(2);
    

}
btnEl.addEventListener("click", calculateTip)