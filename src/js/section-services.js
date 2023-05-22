import {plans, persTrener, progPlans} from './data-training-plans'
const trainingList = document.querySelector('[dataType="training"]');
const trenerPlan = document.querySelector('[dataType="coach"]');
const programPlan = document.querySelector('[dataType="program-plan"]');
const divMoreTraining = document.querySelector('.js-training')
const divMoreCoach = document.querySelector('.js-coach')
const divMorePlan = document.querySelector('.js-plan')

trainingList.addEventListener('click', (event) => {divMoreTraining.insertAdjacentHTML('beforeEnd', OnLoadMore(event, plans))});
trenerPlan.addEventListener('click', (event) => {divMoreCoach.insertAdjacentHTML('beforeEnd', OnLoadMore(event, persTrener))});
programPlan.addEventListener('click', (event) => {divMorePlan.insertAdjacentHTML('beforeEnd', OnLoadMore(event, progPlans))});



function OnLoadMore(event, data) {
    event.target.setAttribute('disabled', 'disabled');
    // console.log('привіт')
    return data.map(({name, duration, numbers, cost}) => {
        return  `<ul class="service-item-more">
                    <li>${name}</li>
                    <li><span>Тривалість:</span> ${duration}</li> 
                    <li><span>Кількість:</span> ${numbers}</li>
                    <li><span>Вартість:</span> ${cost}</li>
                </ul>
                <button class="" type="button">Почати зараз</button>
                `
                
    }).join("")
}






// function hideButtonMore (event){
//     // console.log(event.target.getAttribute('dataType'))
//     // if (event.target.getAttribute('dataType')=== "training") {
//     //     event.target.setAttribute('disabled', 'disabled');
//     //     return;
//     //   }
//     //   if (event.target.getAttribute('dataType')=== "trainer") {
//     //     event.target.setAttribute('disabled', 'disabled');
//     //     return;
//     //   }
//     //   if (event.target.getAttribute('dataType')=== "program-plan") {
//     //     event.target.setAttribute('disabled', 'disabled');
//     //     return;
//     //   }
      
//     //   switch (event.target.getAttribute('dataType')) {
//     //     case "training":
//     //         event.target.setAttribute('disabled', 'disabled');
//     //         break;
//     //     case "trainer":
//     //         event.target.setAttribute('disabled', 'disabled');
//     //         break;
//     //     case "program-plan":
//     //         event.target.setAttribute('disabled', 'disabled');
//     //         break;
//     //     default:
//     //         break;
//     //   }
//     event.target.setAttribute('disabled', 'disabled');
// }