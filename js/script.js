$(document).ready(function () {

    //bruger filterfunctionen
    $("#genre").change(function() {
        //vælger værdien
        var filter = $(this).val();
        //sender værdien til funktionen "filterList"
        filterList(filter);
    });

//definerer en filter function
    function filterList(value) {
        var list = $(".liste .event");
        $(list).fadeOut("fast");
        //hvis "vælg en genre" er valgt, vil alle articler i sectionen vises
        if (value == "alt") {
            $(".liste").find(".event").each(function () {
                //"this" henviser til ".event", delay er en pause før at slidedown begynder, slidedown er måden (this) vil blive vist
                $(this).delay(200).slideDown("fast");
            });
        } else {
            //Hvis alt andet en "vælg en genre" er valgt, vil den article som har en class som er den sammen som værdien blive vist
            //Notice this *=" <- This means that if the class contains multiple options, it will find them
            //Ex: class="pop jaz"
            $(".liste").find("article[class*=" + value + "]").each(function () {
                $(this).delay(200).slideDown("fast");
            });
        }
    }


});