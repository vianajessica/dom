var contador = document.getElementById("count");


var decrementar = document.getElementById("decrement");
var resetar = document.getElementById("reset");
var incrementar = document.getElementById("increment");

var number = 0;

color();

decrementar.addEventListener("click", function(){
    number--;
    color();
});

resetar.addEventListener("click", function(){
    number = 0;
    color();
});

incrementar.addEventListener("click", function(){
    number++;
    color();
});

function color(){
    contador.innerText = number

    if(number > 0){
        contador.style.color = "#F0F";
        return;
    } else if(number < 0){
        contador.style.color = "#F00";
        return;
    }

    contador.style.color = "#F5F5F5";
}




