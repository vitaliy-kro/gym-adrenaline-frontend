import {plans, persTrener, progPlans} from './data-training-plans'
const trainingList = document.querySelector('.js-training');
const trenerPlan = document.querySelector('.js-trener');
const programPlan = document.querySelector('.js-program-plan');
const divMore = document.querySelector('.js-more')

addEventListener.trainingList('click', divMore.insertAdjacentHTML('beforeend', OnLoadMore(plans)));
addEventListener.trenerPlan('click', divMore.insertAdjacentHTML('beforeend', OnLoadMore(persTrener)));
addEventListener.programPlan('click', divMore.insertAdjacentHTML('beforeend', OnLoadMore(progPlans)));



function OnLoadMore(data) {
    return data.map(({ name, duration, numbers, cost }) => {
        return  `<ul class="service-item-more">
                    <li>${name}</li>
                    <li><span>Тривалість:</span> ${duration}</li> 
                    <li><span>Кількість:</span> ${numbers}</li>
                    <li><span>Вартість:</span> ${cost}</li>
                    
                </ul>`
        
        
    }).join("")
}
