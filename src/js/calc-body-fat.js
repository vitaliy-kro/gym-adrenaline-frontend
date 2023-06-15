const indexBodyFat = document.querySelector('.calc-body-fat');

indexBodyFat.addEventListener('input', addData);


const calc_value = {
    sex: '',
    age: 0,
    weight: 0,
    skinFold: 0,
    skinFoldW: 0,
    skinFoldLeg: 0
}


function addData (e) {
    const nameInput = e.target.name;
    const targetValue = e.target.value;
    const {children} = e.target.form
//    console.dir (e.target)
    if (targetValue==='Жінка') {
        children[4].children[0].textContent = 'Шкірна складка трицепса (мм):';
        children[5].children[0].textContent = 'Шкірна складка стегна (мм):';
        children[6].children[0].textContent = 'Бокова шкірна складка (мм):';
        calc_value.sex = targetValue;
    } else if (targetValue==='Чоловік') {
        children[4].children[0].textContent = 'Шкірна складка на грудях (мм):';
        children[5].children[0].textContent = 'Шкірна складка на животі (мм):';
        children[6].children[0].textContent = 'Шкірна складка стегна (мм):';
        calc_value.sex = targetValue;
    }
    

   switch (nameInput) {
    case "age":
        e.target.form[3].value =  targetValue;
        calc_value.age = targetValue;
        break;
    case "age-size-control":
        e.target.form[2].value =  targetValue;
        calc_value.age = targetValue;
        break;
    case "weight":
        e.target.form[5].value =  targetValue;
        calc_value.weight = targetValue;
        break;
    case "weight-size-control":
        e.target.form[4].value =  targetValue;
        calc_value.weight = targetValue;
        break;
    
    case "skin-fold":
        e.target.form[7].value =  targetValue;
        calc_value.skinFold = targetValue;
        break;
    case "skin-fold-control":
        e.target.form[6].value =  targetValue;
        calc_value.skinFold = targetValue;
        break;
    case "skin-fold-w":
        e.target.form[9].value =  targetValue;
        calc_value.skinFoldW = targetValue;
        break;
    case "skin-fold-w-control":
        e.target.form[8].value =  targetValue;
        calc_value.skinFoldW = targetValue;
        break;
    case "skin-fold-l":
        e.target.form[11].value =  targetValue;
        calc_value.skinFoldLeg = targetValue;
        break;
    case "skin-fold-l-control":
        e.target.form[10].value =  targetValue;
        calc_value.skinFoldLeg = targetValue;
        break;
    default:
        break;
  }

    // localStorage.setItem(IMT_CALC, JSON.stringify(calc_value) )
    // const savedSettings = localStorage.getItem(IMT_CALC);
    // const parsedSettings = JSON.parse(savedSettings);
        
    calcFatFormula (e)
                
}

function calcFatFormula (e) {
    const {children} = e.target.form
    const sumOfFold = Number(calc_value.skinFoldLeg) + Number(calc_value.skinFoldW) + Number(calc_value.skinFold);
    
    if (!Object.values(calc_value).includes(0) & calc_value.sex=== 'Чоловік') {
        const BodyDensity = 1.10938 - (0.0008267 * sumOfFold) + (0.0000016 * (sumOfFold **2)) - (0.0002574 * Number(calc_value.age))

        const BodyFatPercentage = (495 / BodyDensity) - 450;
              
        children[7].children[0].textContent = `${BodyFatPercentage.toFixed(1)}%`;
        children[7].children[2].textContent = `Маса жиру:`;
        children[7].children[3].textContent = `${(Number(calc_value.weight) * (BodyFatPercentage / 100)).toFixed(1)}кг`;
        // if (resultImt < 18.5) {children[3].children[2].textContent = 'Вам слід набрати вагу! Вага недостатня, щоб бути здоровим!'};
        // if (24.9 > resultImt && resultImt >= 18.5) {children[3].children[2].textContent = 'Ви молодець, Ваша вага в нормі!'}
        // if (29.9 > resultImt && resultImt >= 25) {children[3].children[2].textContent = 'Вага надмірна! Контролюйте раціон і займайтеся спортом!'}
        // if (resultImt >= 30) {children[3].children[2].textContent = 'Велика надмірна вага! Вам треба худнути! Полюбіть себе, життя чудове! '};
    }
    
    if (!Object.values(calc_value).includes(0) & calc_value.sex=== 'Жінка') {
        const BodyDensity = 1.0994921 - (0.0009929 * sumOfFold) + (0.0000023 * (sumOfFold **2)) - (0.0001392 * Number(calc_value.age))
        
        const BodyFatPercentage = (495 / BodyDensity) - 450;
                    
        children[7].children[0].textContent = `${BodyFatPercentage.toFixed(1)}%`;
        children[7].children[2].textContent = `Маса жиру:`;
        children[7].children[3].textContent = `${(Number(calc_value.weight) * (BodyFatPercentage / 100)).toFixed(1)}кг`;
        // if (resultImt < 18.5) {children[3].children[2].textContent = 'Вам слід набрати вагу! Вага недостатня, щоб бути здоровим!'};
        // if (24.9 > resultImt && resultImt >= 18.5) {children[3].children[2].textContent = 'Ви молодець, Ваша вага в нормі!'}
        // if (29.9 > resultImt && resultImt >= 25) {children[3].children[2].textContent = 'Вага надмірна! Контролюйте раціон і займайтеся спортом!'}
        // if (resultImt >= 30) {children[3].children[2].textContent = 'Велика надмірна вага! Вам треба худнути! Полюбіть себе, життя чудове! '};
    }
}



