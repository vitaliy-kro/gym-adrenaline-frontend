const indexBodyWeight = document.querySelector('.calc-imt')

indexBodyWeight.addEventListener('input', addStorage)

// const IMT_CALC = "calc_1";
const calc_value = {
    weight: 0,
    height: 0,
}

    
function addStorage(e) {
   const nameInput = e.target.name;
//    console.dir(e.target)
   
    let resultImt = 0;
    const targetValue = e.target.value;

   switch (nameInput) {
    case "weight":
        e.target.form[1].value =  targetValue;
        calc_value.weight = targetValue;
        break;
    case "weight-size-control":
        e.target.form[0].value =  targetValue;
        calc_value.weight = targetValue;
        break;
    case "height":
        e.target.form[3].value =  targetValue;
        calc_value.height = targetValue;
        break;
    case "height-size-control":
        e.target.form[2].value =  targetValue;
        calc_value.height = targetValue;
        break;
    default:
        break;
  }

    // localStorage.setItem(IMT_CALC, JSON.stringify(calc_value) )
    // const savedSettings = localStorage.getItem(IMT_CALC);
    // const parsedSettings = JSON.parse(savedSettings);
        
    calcImt (e);
                
    
}

function calcImt (e) {
     if (calc_value.weight && calc_value.height) {
        resultImt = calc_value.weight / ((calc_value.height/100)**2)
        e.target.form.children[3].textContent = `Індекс маси тіла:${resultImt.toFixed(1)}`
    }
}


