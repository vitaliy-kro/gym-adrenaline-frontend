const changeRangeEl = document.querySelector('#weight-size-control')
const weightSizeEl = document.querySelector('#weight')

changeRangeEl.addEventListener('input', changerWeight)
let weightIMT = 0;

function changerWeight() {
    weightIMT = changeRangeEl.value;
    weightSizeEl.textContent = `${weightIMT}`;
    console.log(weightIMT)
}


