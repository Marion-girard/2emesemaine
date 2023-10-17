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
    for(let person of populations){
        let countA = 0
        let countL = 0
        for ( let char of person.name.toLocaleLowerCase()){
            if (char === 'a'){
                countA++
            }
            if (char === 'l'){
                countL++
            }
        }
        person.count = {countA, countL}
    }
    populations.sort((a, b) => {
        if (a.count.countA + a.count.countL < b.count.countA + b.count.countL) {
            return -1;
        }
        if (a.count.countA + a.count.countL > b.count.countA + b.count.countL) {
            return 1;
        }
        return 0;
    });

    console.log(populations);


    const number = [1, 2, 3, 4, 50, 6, 7, 8, 9, 10];

    const max = number.reduce((acc, curr) => {
        return Math.max(acc, curr);
    });

    console.log(max);

    // 155


    const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const sumImpair = n.reduce((accumulator, currentValue) => {
        if (currentValue % 2 === 1) {
            return accumulator + currentValue;
        } else {
            return accumulator;
        }
    }, 0);

    console.log(sumImpair);

    const phones = [
        { name: "iphone XX", priceHT: 900 },
        { name: "iphone X", priceHT: 700 },
        { name: "iphone B", priceHT: 200 },
    ];

    const phonesT = phones.map((phone) => {
        return { name: phone.name, priceTTC: phone.priceHT * 1.2 };
    });

    console.log(phonesT);
        
    const A = [8.3, 7.5];
    const positions = [[1,1], [2, 2], [3, 4.5], [0, 9]];
    const distances = [];

    
    function di(x, y){
        positions.forEach(element => {
            const d = Math.floor( Math.sqrt( (x[0] - element[0] )**2 + (x[1] - element[1] )**2 ) * 100) / 100 ;
            
            distances.push(d)
        });
        return distances



    }

    di(A, positions)
    console.log(distances)
    const maxd = distances.reduce((acc, curr) => {
        return Math.max(acc, curr);
    });

    console.log(maxd);

    
const const sentence = "Bonjour tout le monde, vous aimez JS ?"; ;
 
const reverse = str.split('').reverse().join('');
console.log(reverse);
})
    

