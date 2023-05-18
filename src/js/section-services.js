const trainingList = document.querySelector('.js-training');
const trenerPlan = document.querySelector('.js-trener');
const programPlan = document.querySelector('.js-program-plan');
const divMore = document.querySelector('.js-more')

addEventListener.trainingList('click', OnLoadMore);
addEventListener.trenerPlan('click', OnLoadMore);
addEventListener.programPlan('click', OnLoadMore);



function OnLoadMore() {
divMore.insertAdjacentHTML("beforeend", makupTraining)
}
const makupTraining = "";