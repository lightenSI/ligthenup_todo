const title = document.querySelector("body");
const CHANGE_COLOR1 = "violet";
const CHANGE_COLOR2 = "lightblue";

function change(){
    const wb = window.innerWidth;
    if(wb<320){
        title.style.color = CHANGE_COLOR1;
    } else if(wb>=320 && wb<480){
        title.style.color = CHANGE_COLOR2;
    }
}

title.addEventListener("resize", change);
