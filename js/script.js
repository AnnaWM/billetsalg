$(document).ready(function () {
    var search = 	[
        {
            "id":"1",
            "title":"Coffee for the brain"
        },
        {
            "id":"2",
            "title":"Project Art"
        },
        {
            "id":"3",
            "title":"Turn coffee into code"
        }
    ];

    function emptyResult(){
        $("#result").html("");
    }

    $("#search").keyup(function () {

        var searchInput = $("#search").val();
        emptyResult();

        $(search).each(function (key, value) {

            if(value["title"].includes(searchInput)){

                $("#result").append(value["title"] + "<br>");

                if(searchInput.length == 0){
                    emptyResult();
                }
            }
        });
    });
    /*Er udkommenteret indtil videre
    //slideshow
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides (n) {
        showSlides (slideIndex += n)
    }
    function currentSlide (n){
        showSlides(slideIndex = n);
    }
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display ="none";
    }
    for (i = 0; i < dots.length; i++) {
        dots [i].className = dots[i].className.replace("active",
            "");
    }
    {
        slides [slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += "active";
    }
    */

    /*this code has been taken from https://www.w3schools.com/howto/howto_js_slideshow.asp
     */

    //filterfunctionen
    $(".valg").change(function() {
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