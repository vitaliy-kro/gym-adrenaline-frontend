
function readMore(btn){
    let post = btn.parentElement;
   
    post.querySelector(".content").classList.toggle("active");


    btn.textContent == "Читати більше" ? btn.textContent = "Показувати менше" : btn.textContent = "Читати більше";
}

function showMore(btn) {
    let view = btn.parentElement;
   
    view.querySelector(".view").classList.toggle("active");


    btn.textContent == "Порахувати" ? btn.textContent = "Сховати" : btn.textContent = "Порахувати";
}