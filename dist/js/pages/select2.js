$('.select2').select2({
    theme: "bootstrap-5",
    width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
    placeholder: $( this ).data( 'placeholder' ) ? $( this ).data( 'placeholder' ) : "Pilih Salah Satu",
});

$('.select2-onmodal').select2({
    theme: "bootstrap-5",
    dropdownParent: $('.select2-onmodal').parent(), 
    width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
    placeholder: $( this ).data( 'placeholder' ) ? $( this ).data( 'placeholder' ) : "Pilih Salah Satu",
});