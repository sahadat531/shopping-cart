function updateField ( id ,isTrue) {
    const phoneInputField = document.getElementById( id );
    const phoneInputFieldString = phoneInputField.value;
    const phoneInputFieldNumber = parseInt( phoneInputFieldString );

    let newPhoneNumber;
    if ( isTrue ) {
        newPhoneNumber = phoneInputFieldNumber + 1;
    } else {
        newPhoneNumber = phoneInputFieldNumber - 1;
    }
    
    phoneInputField.value = newPhoneNumber;

    return newPhoneNumber;
}

function updatePriceUI(id, newPhoneNumber,price){
    const phoneTotal = document.getElementById( id );
    const phoneTotalString = phoneTotal.innerText;
    const phoneTotalNumber = parseInt( phoneTotalString );

    const phoneTotalPrice = newPhoneNumber * price;
    phoneTotal.innerText = phoneTotalPrice;

    return phoneTotalPrice;
}

function subTotal (id) {
    const subTotal = document.getElementById( id );
    const subTotalText = subTotal.innerText;
    const subTotalNumber = parseInt( subTotalText );

    return subTotalNumber;
}


function calculateSobtotal () {
    const phoneTotalNumber = subTotal( 'phone-total' );
    const caseTotalNumber = subTotal( 'case-total' );
   
    
    const finalTotal = phoneTotalNumber + caseTotalNumber;
    const subtotal = document.getElementById( 'subtotal' );
    subtotal.innerText = finalTotal;
    
    const TaxTotal = ( finalTotal * .1 ).toFixed( 2 );

    const taxField = document.getElementById( 'tax' );
    taxField.innerText = TaxTotal;

    const allTotal = finalTotal + TaxTotal;
    const total = document.getElementById( 'total' );
    total.innerText = allTotal;

}