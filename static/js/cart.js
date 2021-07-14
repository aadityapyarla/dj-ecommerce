$(function(){
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
});