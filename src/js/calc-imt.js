const indexBodyWeight = document.querySelector('.calc-imt');

indexBodyWeight.addEventListener('input', addStorage)
// console.log(indexBodyWeight)
// const IMT_CALC = "calc_1";
const calc_value = {
    weight: 0,
    height: 0,
}

    
function addStorage(e) {
   const nameInput = e.target.name;
//    console.dir( e.target)
   
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
    const {children} = e.target.form

    if (calc_value.weight && calc_value.height) {
        resultImt = calc_value.weight / ((calc_value.height/100)**2)
        children[3].children[0].textContent = `${resultImt.toFixed(1)}`;
        

        if (resultImt < 18.5) {children[3].children[2].textContent = 'Вам слід набрати вагу! Вага недостатня, щоб бути здоровим!'};

        if (24.9 > resultImt && resultImt >= 18.5) {children[3].children[2].textContent = 'Ви молодець, Ваша вага в нормі!'}
        
        if (29.9 > resultImt && resultImt >= 25) {children[3].children[2].textContent = 'Вага надмірна! Контролюйте раціон і займайтеся спортом!'}

        if (resultImt >= 30) {children[3].children[2].textContent = 'Велика надмірна вага! Вам треба худнути! Полюбіть себе, життя чудове! '};
    }
    

}


