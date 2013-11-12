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

    $(".accordion-title").click(function (e) { // binding onclick
        e.preventDefault();
        hide_accordion_items("accordion-item-show");
        $(this).closest(".accordion-item").addClass("accordion-item-show");
    });

    // only fun
        $(".accordion-options-fun").click(function (e) { // binding onclick
            e.preventDefault();
            toggleAccordionView("accordion-items-fun",this);
        });

    // mj
        $(".accordion-options-madjester").click(function (e) { // binding onclick
            e.preventDefault();
            toggleAccordionView("accordion-items-madjester",this);
        });

    // mj
        $(".accordion-options-achievements").click(function (e) { // binding onclick
            e.preventDefault();
            toggleAccordionView("accordion-items-achievements",this);
        });

    // nav
        $(".nav-menu .nav-link").click(function (e) { // binding onclick
            e.preventDefault();
            $(".navigation-site").toggleClass("show");
            $(this).parent().toggleClass("nav-selected");
        });



});