
let bottone = document.getElementById('calcolo');

const calcolatore = function(){
    let km = document.getElementById('Km').value;
    let age = document.getElementById('age').value;
    const costoalKm = 0.21;
    const minorenni = 18;
    const over65 = 65;
    let costoKm = km * costoalKm;
    let costo = Math.ceil(costoKm)
    let costoIntero = costo.toFixed(2)
    console.log(costoIntero)    
    if(isNaN(km)|| isNaN(age)){
        alert('ricarica la pagina')
    }
    console.log(km , age)
    if(age <= minorenni){
        let scontoMinorenni = (costoIntero * 20) / 100;
        let costoMinorenni = costoIntero - scontoMinorenni;
        console.log(costoMinorenni)
        document.getElementById('prezzoriservato').innerHTML = 
        `
        ${costoMinorenni} €
        `
        document.getElementById('eta').innerHTML = age
        document.getElementById('scontoriservato').innerHTML =
        `
        ${scontoMinorenni} €
        `
        
    
        
    } else if( age >= over65){
        let scontoOver65 = (costoIntero * 40) / 100;
        let costoOver65 = costoIntero - scontoOver65;
        console.log(costoOver65)
        document.getElementById('prezzoriservato').innerHTML = 
        `
        ${costoOver65} €
        `
        document.getElementById('eta').innerHTML = age
        document.getElementById('scontoriservato').innerHTML =
        `
        ${scontoOver65} €
        `
    
    }else if( (age > minorenni) || (age < over65)){
        document.getElementById('prezzoriservato').innerHTML = 
        `
        ${costoIntero} €
        `
        document.getElementById('eta').innerHTML = age
        document.getElementById('scontoriservato').innerHTML =
        `
        0 €
        `        
    }

}
bottone.addEventListener('click', calcolatore);