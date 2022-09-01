document.getElementById( 'phone-plus' ).addEventListener( 'click', function () {
    const newPhoneNumber = updateField( 'phone-input-field', true );
    
    const phoneTotalPrice = updatePriceUI( 'phone-total', newPhoneNumber, 1219 );
    
    calculateSobtotal();
} )

document.getElementById( 'phone-minus' ).addEventListener( 'click', function () {
    const newPhoneNumber = updateField( 'phone-input-field' );

    const phoneTotalPrice = updatePriceUI( 'phone-total', newPhoneNumber, 1219 );
    calculateSobtotal();
})