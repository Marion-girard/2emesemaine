document.addEventListener('DOMContentLoaded', ()=>{

    function ttc(prix, Tva){
        
        let prixTtc = parseFloat(prix) + (parseFloat(prix) * parseFloat(Tva))
        return console.log(prixTtc)
    
    }
    
    ttc(100, 0.2); // 120
    ttc(100.50, 0.2); // 144.72
    ttc("hello", 0.2); // Erreur de type
    ttc(100.50, "hello"); // Erreur de type
    ttc("100", ".3"); // 130
})

