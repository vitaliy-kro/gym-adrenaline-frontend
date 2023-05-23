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
                </ul>
                <button class="" type="button">Почати зараз</button>
                `
                
    }).join("")
}

function hideText (e) {
    console.log(e.currentTarget);
    // e.target.classList.add('hide');
    const dataTipe = e.currentTarget.getAttribute('dataType');
    const buttonMurck = `<button class="services-close-btn hide" dataType='${dataTipe}' type="button">
    <svg  width="32" height="32">
      <use href="./images/icons.svg#icon-circle-up"></use>
    </svg>
  </button> `
    switch (dataTipe) {
        case "training-close":
            e.currentTarget.classList.add('hide');
            divMoreTraining.innerHTML = buttonMurck;
            trainingList.classList.remove('hide');
            break;
        case "coach-close":
            e.currentTarget.classList.add('hide');
            divMoreCoach.innerHTML = buttonMurck;
            trenerPlan.classList.remove('hide');
            break;
        case "program-plan-close":
            e.currentTarget.classList.add('hide');
            divMorePlan.innerHTML = buttonMurck;
            programPlan.classList.remove('hide');
            break;
        default:
            break;
      }
}




function hideButtonMore (event){
      
      switch (event.target.getAttribute('dataType')) {
        case "training":
            event.target.classList.add('hide');
            trainingCloseBtn.classList.remove('hide');
            break;
        case "coach":
            event.target.classList.add('hide');
            coachCloseBtn.classList.remove('hide');
            break;
        case "program-plan":
            event.target.classList.add('hide');
            planCloseBtn.classList.remove('hide');
            break;
        default:
            break;
      }
    // event.target.setAttribute('disabled', 'disabled');
}