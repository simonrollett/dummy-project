// mobile menus				

function hide_accordion_items($class_name){
    $(".accordion-item").removeClass($class_name);
}

function show_accordion_items($class_name){
    $(".accordion-item").addClass($class_name);
}

function toggleAccordionView($class_name,$event){
    $(".accordion").toggleClass($class_name);
    $($event).parent().toggleClass("nav-selected");
}

$(document).ready(function($) {

    //general expand from title click

    $(".accordion-title").click(function (e) { // binding onclick
        e.preventDefault();
        $(this).closest(".accordion-item").toggleClass("accordion-item-show");
        $(this).toggleClass("accordion-open");
    });

    // achievements
        $(".accordion-options-achievements").click(function (e) { // binding onclick
            e.preventDefault();
            toggleAccordionView("accordion-items-achievements",this);
        });

    // work
        $(".accordion-options-work").click(function (e) { // binding onclick
            e.preventDefault();
            toggleAccordionView("accordion-items-work",this);
        });

    // fun
        $(".accordion-options-fun").click(function (e) { // binding onclick
            e.preventDefault();
            toggleAccordionView("accordion-items-fun",this);
        });

    // code
        $(".accordion-options-code").click(function (e) { // binding onclick
            e.preventDefault();
            toggleAccordionView("accordion-items-code",this);
        });

    // code
        $(".accordion-options-design").click(function (e) { // binding onclick
            e.preventDefault();
            toggleAccordionView("accordion-items-design",this);
        });

    // code
        $(".accordion-options-manage").click(function (e) { // binding onclick
            e.preventDefault();
            toggleAccordionView("accordion-items-manage",this);
        });

    // nav
        $(".nav-menu .nav-link").click(function (e) { // binding onclick
            e.preventDefault();
            $(".navigation-site").toggleClass("show");
            $(this).parent().toggleClass("nav-selected");
        });

});