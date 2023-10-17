document.addEventListener('DOMContentLoaded', ()=>{
    

    /*let fruits =  ['Apple', 'Orange'];
    console.log(fruits)
    let newFruits = fruits;
    
    newFruits.push('Banana')
    
    console.log(newFruits)
*/

    let fruits =  ['Apple', 'Orange'];

// Utilisation de la méthode slice
    let newFruits = fruits.slice();
    newFruits.push('Banana')
    console.log(newFruits === fruits);


    //Power 3

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i]%2==0){
            let pui = numbers[i]**3
            console.log(pui)
        }
    }
})

//Exercice 3

const populations = [
    { "id": 0, "name": "Alan" },
    { "id": 1, "name": "Albert" },
    { "id": 2, "name": "Jhon" },
    { "id": 3, "name": "Brice" },
    { "id": 4, "name": "Alexendra" },
    { "id": 5, "name": "Brad" },
    { "id": 6, "name": "Carl" },
    { "id": 7, "name": "Dallas" },
    { "id": 8, "name": "Dennis" },
    { "id": 9, "name": "Edgar" },
    { "id": 10, "name": "Erika" },
    { "id": 11, "name": "Isaac" },
    { "id": 12, "name": "Ian" }
];