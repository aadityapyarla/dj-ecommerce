$(function () {

    

    // ------------------------------------------------------- //
    // Search Popup
    // ------------------------------------------------------ //
    $('.search-open').on('click', function (e) {
        e.preventDefault();
        $('.search-panel').fadeIn(100);
    })
    $('.search-panel .close-btn').on('click', function () {
        $('.search-panel').fadeOut(100);
    });
    
    /* ===============================================================
        LIGHTBOX
      =============================================================== */
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });

    /* ===============================================================
        PRODUCT SLIDER
      =============================================================== */
    $('.product-slider').owlCarousel({
        items: 1,
        thumbs: true,
        thumbImage: false,
        thumbsPrerendered: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item',
        onInitialized: function(){
            $('div.owl-item.active a img').ezPlus({
                touchEnabled:true,
                zoomWindowHeight: 500,
                zoomWindowWidth: 536,
            });
            console.log("true");
        },
        onTranslated: function(){
            $('div.owl-item.active a img').ezPlus({
                touchEnabled:true,
                zoomWindowHeight: 500,
                zoomWindowWidth: 536,
            });
        }
    });



    /* ===============================================================
        PRODUCT QUNATITY
      =============================================================== */
    $('.dec-btn').click(function () {
        var siblings = $(this).siblings('input');
        if (parseInt(siblings.val(), 10) >= 1) {
            siblings.val(parseInt(siblings.val(), 10) - 1);
        }
    });

    $('.inc-btn').click(function () {
        var siblings = $(this).siblings('input');
        siblings.val(parseInt(siblings.val(), 10) + 1);
    });


    /* ===============================================================
        BOOTSTRAP SELECT
        =============================================================== */
    $('.selectpicker').on('change', function () {
        $(this).closest('.dropdown').find('.filter-option-inner-inner').addClass('selected');
    });


    /* ===============================================================
        TOGGLE ALTERNATIVE BILLING ADDRESS
        =============================================================== */
    $('#alternateAddressCheckbox').on('change', function () {
        var checkboxId = '#' + $(this).attr('id').replace('Checkbox', '');
        $(checkboxId).toggleClass('d-none');
    });


    /* ===============================================================
        DISABLE UNWORKED ANCHORS
        =============================================================== */
    $('a[href="#"]').on('click', function (e) {
        e.preventDefault();
    });

    $('input, select').on('focus', function () {
        $(this).parent().find('.input-group-text').css('border-color', '#80bdff');
    });
    $('input, select').on('blur', function () {
        $(this).parent().find('.input-group-text').css('border-color', '#ced4da');
    });
});


/* ===============================================================
    COUNTRY SELECT BOX FILLING
  =============================================================== */
$.getJSON('js/countries.json', function (data) {
    $.each(data, function (key, value) {
        var selectOption = "<option value='" + value.name + "' data-dial-code='" + value.dial_code + "'>" + value.name + "</option>";
        $("select.country").append(selectOption);
    });
})

$('#star-1').click(function(){
    $('#rating').text('Teribble😭')
    $('#rating').addClass('teribble')
    $('#rating').removeClass(['poor', 'average', 'good', 'excellent'])
});
$('#star-2').click(function(){
    $('#rating').text('Poor😅')
    $('#rating').addClass('poor')
    $('#rating').removeClass(['teribble', 'average', 'good', 'excellent'])
});
$('#star-3').click(function(){
    $('#rating').text('Average😀')
    $('#rating').addClass('average')
    $('#rating').removeClass(['poor', 'teribble', 'good', 'excellent'])
});
$('#star-4').click(function(){
    $('#rating').text('Good😋')
    $('#rating').addClass('good')
    $('#rating').removeClass(['poor', 'average', 'terrible', 'excellent'])
});
$('#star-5').click(function(){
    $('#rating').text('Excelllent!🥳')
    $('#rating').addClass('excellent')
    $('#rating').removeClass(['poor', 'average', 'good', 'teribble'])
});