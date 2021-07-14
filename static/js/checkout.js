$('#alternateAddressCheckbox').on('change', function () {
    var checkboxId = '#' + $(this).attr('id').replace('Checkbox', '');
    $(checkboxId).toggleClass('d-none');
});    
$('#cred-mm').change(function(){
    const mm = $(this).val();
    $('#paypal-mm').text(mm);
});
$('#cred-yy').change(function(){
    const yy = $(this).val();
    $('#paypal-yy').text(yy);
});
$('#cred-ccv').on('input', function(){
    const ccv = $(this).val();
    $('#paypal-ccv').text(ccv);
});
$('#cred-num').on('input', function(){
    const num = $(this).val().replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1-$2-$3-$4");
    $(this).val(num)
    $('#paypal-num').text(num)
});
$('.payment').hide();
$("input[name=paymentMethod]").on('change', function () {
    var checkboxId = $(this).val();
    $('.payment').hide();
    $('#' + checkboxId).show();
});   