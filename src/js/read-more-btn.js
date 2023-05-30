
function readMore(btn){
    let post = btn.parentElement;
   
    post.querySelector(".content").classList.toggle("active");


    btn.textContent == "Читати більше" ? btn.textContent = "Показувати менше" : btn.textContent = "Читати більше";
}