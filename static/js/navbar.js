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
        DISABLE UNWORKED ANCHORS
        =============================================================== */
    $('a[href="#"]').on('click', function (e) {
        e.preventDefault();
    });

    


});
