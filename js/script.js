$(document).ready(function () {
var slideIndex = 1;
showSlides(slideIndex);

/*Slideshow*/
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