
function readMore(btn){
    let post = btn.parentElement;
   
    post.querySelector(".dots").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");
    btn.textContent == "Читати більше" ? btn.textContent = "Показувати менше" : btn.textContent = "Читати більше";
}