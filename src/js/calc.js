import debounce from 'lodash.debounce';

const indexBodyWeight = document.querySelector('.calc-imt')

indexBodyWeight.addEventListener('input', debounce(addStorage, 500))



    
function addStorage(e) {
   const nameInput = e.target.name;
//    console.dir(e.target)
   
    let selectedWeight = 0;
    let selectedHeight = 0;
    let resultImt = 0;
    
   switch (nameInput) {
    case "weight":
        e.target.form[1].value =  e.target.value;
        selectedWeight = e.target.value;
        
        break;
    case "weight-size-control":
        e.target.form[0].value =  e.target.value;
        selectedWeight = e.target.value;
        
        // e.target.form.children[5].textContent +=`${resultImt}`
        // console.log(e.target.form.children[5].textContent)
        break;
    case "height":
        e.target.form[3].value =  e.target.value;
        selectedHeight = e.target.value;
        break;
    case "height-size-control":
        e.target.form[2].value =  e.target.value;
        selectedHeight = e.target.value;
        break;
    default:
        break;
  }
    

    //   let userValues = localStorage.getItem(STORAGE_FORM_KEY);
    //   userValues = userValues ? JSON.parse(userValues) : {};
    //     userValues[e.target.name] = e.target.value;
       
    //   localStorage.setItem(STORAGE_FORM_KEY, JSON.stringify(userValues));
    // }
    console.log(selectedWeight);
    console.log(selectedHeight);
    if (selectedWeight && selectedWeight) {
        resultImt = selectedWeight / ((selectedHeight/100)**2)
    }
        console.log(resultImt);
    
}







// indexBodyWeight.textContent= weightInput.value / ((heightInput.value/100)**2);


