const element =     document.querySelectorAll('button')

const bontonFor = document.getElementById('bontonFor')
const bontonColor = document.getElementById('bontonColor')
function Boutonfor() {

    for(items of element ){
        console.log(element)
    }
}
bontonFor.addEventListener("click", (event) => {
    Boutonfor()
    return console.log("bouh")
});





function changeColor(color){
   return bontonColor.style.backgroundColor = color;
}

function processUserInput(callback) {
    let color = "blue";
    callback(color);
  }
  bontonColor.addEventListener("click", () => {
    // Changer la couleur en rouge
    processUserInput(changeColor)
});

const addEventListener = function(){
    
}