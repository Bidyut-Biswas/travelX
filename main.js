function handleQuantity(planet,operator){
    const quantity=document.getElementById(`${planet}-input`);
    let quantityNumber=parseInt(quantity.value)
    if(operator==='plus'){
        quantityNumber++;        
    }else{
        if(quantityNumber<1){
            return;
        }
        quantityNumber--;
        
    }
    quantity.value=quantityNumber
    calculation(planet);
    totalCost()
}

function calculation(planet){
    const quantity=document.getElementById(`${planet}-input`);
    let quantityNumber=parseInt(quantity.value);
    
    if(planet=='mars'){
        let marsTotal=quantityNumber*500;
        document.getElementById(`${planet}-span`).innerText=marsTotal
    }else{
        let moonTotal=quantityNumber*200;
        document.getElementById(`${planet}-span`).innerText=moonTotal
    }
    
}

function totalCost(){
    const marsQuantity=document.getElementById('mars-input');
    let marsNumber=parseInt(marsQuantity.value);

    const moonQuantity=document.getElementById('moon-input');   
    let moonNumber=parseInt(moonQuantity.value);
    document.getElementById('total-cost').innerText=marsNumber*500+moonNumber*200
}


