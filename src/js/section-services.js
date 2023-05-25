import {plans, persTrener, progPlans} from './data-training-plans'
const trainingList = document.querySelector('[dataType="training"]');
const trenerPlan = document.querySelector('[dataType="coach"]');
const programPlan = document.querySelector('[dataType="program-plan"]');
const divMoreTraining = document.querySelector('.js-training');
const divMoreCoach = document.querySelector('.js-coach');
const divMorePlan = document.querySelector('.js-plan');
const trainingCloseBtn = document.querySelector('[dataType="training-close"]');
const coachCloseBtn = document.querySelector('[dataType="coach-close"]');
const planCloseBtn = document.querySelector('[dataType="program-plan-close"]');



trainingList.addEventListener('click', (event) => {divMoreTraining.insertAdjacentHTML('beforeEnd', OnLoadMore(event, plans))});
trenerPlan.addEventListener('click', (event) => {divMoreCoach.insertAdjacentHTML('beforeEnd', OnLoadMore(event, persTrener))});
programPlan.addEventListener('click', (event) => {divMorePlan.insertAdjacentHTML('beforeEnd', OnLoadMore(event, progPlans))});

trainingCloseBtn.addEventListener('click', (event) => {hideText(event)});
coachCloseBtn.addEventListener('click', (event) => {hideText(event)});
planCloseBtn.addEventListener('click', (event) => {hideText(event)});

function OnLoadMore(event, data) {
    // event.target.setAttribute('disabled', 'disabled');
    hideButtonMore (event);
    // console.log('привіт')
    return data.map(({name, duration, numbers, cost}) => {
        return  `<ul class="service-item-more">
                    <li>${name}</li>
                    <li><span>Тривалість:</span> ${duration}</li> 
                    <li><span>Кількість:</span> ${numbers}</li>
                    <li><span>Вартість:</span> ${cost}</li>
            
                </ul>`
    }).join("")
}

function hideText (e) {
    // console.log(e.currentTarget);
    const dataTipe = e.currentTarget.getAttribute('dataType');
   
    switch (dataTipe) {
        case "training-close":
            e.currentTarget.classList.toggle('hide');
            divMoreTraining.innerHTML = '';
            trainingList.classList.toggle('hide');
            break;
        case "coach-close":
            e.currentTarget.classList.toggle('hide');
            divMoreCoach.innerHTML = '';
            trenerPlan.classList.toggle('hide');
            break;
        case "program-plan-close":
            e.currentTarget.classList.toggle('hide');
            divMorePlan.innerHTML = '';
            programPlan.classList.toggle('hide');
            break;
        default:
            break;
      }
}




function hideButtonMore (event){
      
      switch (event.target.getAttribute('dataType')) {
        case "training":
            event.target.classList.toggle('hide');
            trainingCloseBtn.classList.toggle('hide');
            break;
        case "coach":
            event.target.classList.toggle('hide');
            coachCloseBtn.classList.toggle('hide');
            break;
        case "program-plan":
            event.target.classList.toggle('hide');
            planCloseBtn.classList.toggle('hide');
            break;
        default:
            break;
      }
    // event.target.setAttribute('disabled', 'disabled');
}