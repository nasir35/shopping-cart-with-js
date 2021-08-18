function updatePrice(productName, isIncreasing, price){
    let totalQuantity = document.getElementById(productName+'Quantity');
    let totalPrice = document.getElementById(productName+'Price');
    let quantity = parseInt(totalQuantity.value);
    if(isIncreasing){
        quantity += 1;
        totalQuantity.value = quantity;
    }
    else{
        if(quantity>0){
            quantity-=1;
            totalQuantity.value = quantity;
        }        
    }
    // updatePrice 
    let productPrice = quantity * price;        
    totalPrice.innerText = productPrice;
    // get total phone and case price 
    let phonePrice = document.getElementById('phonePrice').innerText;
    let casePrice = document.getElementById('casePrice').innerText;
    // catch subTotal, tax and total with id 
    let subTotal = document.getElementById('sub-total');
    let tax = document.getElementById('tax');
    let grandTotal = document.getElementById('grand-total');
    // update Sub total, tax and Total 
    subTotal.innerText = parseFloat(phonePrice)+parseFloat(casePrice);    
    tax.innerText = Math.round((subTotal.innerText)*0.1);    
    grandTotal.innerText = parseInt(subTotal.innerText) + parseInt(tax.innerText);
}

document.getElementById('plusPhone').addEventListener('click', function(){
    updatePrice('phone',true, 1219);
})

document.getElementById('minusPhone').addEventListener('click', function(){
    updatePrice('phone',false, 1219);
})

document.getElementById('plusCase').addEventListener('click', function(){
    updatePrice('case',true, 59);
})
document.getElementById('minusCase').addEventListener('click', function(){
    updatePrice('case', false, 59);
})