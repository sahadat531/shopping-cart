document.getElementById( 'button-case-plus' ).addEventListener( 'click', function () {
    const newCaseNumber = updateField( 'case-number', true );

    const phoneTotalPrice = updatePriceUI( 'case-total', newCaseNumber, 59 );
    calculateSobtotal();
    
} )

document.getElementById( 'button-case-minus' ).addEventListener( 'click', function () {
   const newCaseNumber = updateField( 'case-number', false );

    const phoneTotalPrice = updatePriceUI( 'case-total', newCaseNumber, 59 );
    calculateSobtotal();
})