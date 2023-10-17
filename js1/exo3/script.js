document.addEventListener('DOMContentLoaded', ()=>{
    

    function sumTTC(x, y, z, taxe = 0.2){
        
      return  (parseFloat (x) +parseFloat ( y) +parseFloat ( z)) + (parseFloat (x) +parseFloat ( y) +parseFloat ( z)) * (taxe)
        
        
    }
    const priceHT = [100.50, 200.8, 55.7];
console.log(sumTTC(...priceHT));
console.log(sumTTC(...priceHT, .3));
const badPriceHT = [100.50, "hello", 55.7];
console.log(sumTTC(...badPriceHT, .3));


})


//exo 4


const myFunc = function(){
    console.log("Expression");
}
myFunc(); 

function bar(){
    console.log("bar");
  }

  bar();



  //Est ce que le code qui suit vous semble correcte ? Répondre sans exécuter le code. Si ce dernier n'est pas valide modifiez-le afin qu'il puisse s'exécuter correctement.

  let a = 1;
  
function calcul() {
    let c = 2 + a;

    console.log(c, "calcul");

    function sub_calcul() {
        let b = c + 1;
  
        console.log(b, "sub_calcul");
    }
  
    sub_calcul();
  }
  
  calcul();

  function tdz() {
      
      let tdz_val = "Temporal Dead Zone";
      console.log(tdz_val);
    }
  
  tdz();

  let i = 100;

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i);

