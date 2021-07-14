$(function(){
    $('#color-black').on('click', function(){
        $('#filter-colour').val("black");
    });
    $('#color-blue').on('click', function(){
        $('#filter-colour').val("blue");
    });
    $('#color-brown').on('click', function(){
        $('#filter-colour').val("brown");
    });
    $('#color-green').on('click', function(){
        $('#filter-colour').val("green");
    });
    $('#color-red').on('click', function(){
        $('#filter-colour').val("red");
    });
    $('#color-white').on('click', function(){
        $('#filter-colour').val("white");
    });

    $('#filter-size-xs').on('click', function(e){
        e.preventDefault();
        $('#filter-size').val("xs");
    });
    $('#filter-size-s').on('click', function(e){
        e.preventDefault();
        $('#filter-size').val("s");
    });
    $('#filter-size-m').on('click', function(e){
        e.preventDefault();
        $('#filter-size').val("m");
    });
    $('#filter-size-l').on('click', function(e){
        e.preventDefault();
        $('#filter-size').val("l");
    });
    $('#filter-size-xl').on('click', function(e){
        e.preventDefault();
        $('#filter-size').val("xl");
    });
    $('#filter-size-2xl').on('click', function(e){
        e.preventDefault();
        $('#filter-size').val("2xl");
    });


    function GetURLParameter(sParam)
    {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) 
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) 
            {
                return sParameterName[1];
            }
        }
    }


    $('#filter-form').submit(function(){
        var brandCount = 0;
        var brandValue = "";
        $("input[name=brand]:checked").each(function() {
        if (brandCount > 0) brandValue += ",";
        brandValue += $(this).val();
        brandCount++;
        $("#filter-brand").val(brandValue);
        });

        var sportCount = 0;
        var sportValue = "";
        $("input[name=sport]:checked").each(function() {
        if (sportCount > 0) sportValue += ",";
        sportValue += $(this).val();
        sportCount++;
        $("#filter-sport").val(sportValue);
        });
        var genderCount = 0;
        var genderValue = "";
        $("input[name=gender]:checked").each(function() {
        if (genderCount > 0) genderValue += ",";
        genderValue += $(this).val();
        genderCount++;
        $("#filter-gender").val(genderValue);
        });

        var priceCount = 0;
        var priceValue = "";
        $("input[name=price]:checked").each(function() {
        if (priceCount > 0) priceValue += ",";
        priceValue += $(this).val();
        priceCount++;
        $("#filter-brand").val(brandValue);
        });

        var discCount = 0;
        var discValue = "";
        $("input[name=discount]:checked").each(function() {
        if (discCount > 0) discValue += ",";
        discValue += $(this).val();
        discCount++;
        $("#filter-disc").val(discValue);
        });

        var searchquery = GetURLParameter('search');
        $('#search-query').val(searchquery);


    });

});