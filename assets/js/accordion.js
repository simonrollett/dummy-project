// mobile menus				

function hide_accordion_items($class_name){
    $(".accordion-item").removeClass($class_name);
}

function show_accordion_items($class_name){
    $(".accordion-item").addClass($class_name);
    //$(this).closest(".accordion-item").toggleClass($class_name);
}

function toggleAccordionView($class_name){
    $(".accordion").toggleClass($class_name);
}

$(document).ready(function($) {

    $(".accordion-title").click(function (e) { // binding onclick
        e.preventDefault();
        hide_accordion_items("accordion-item-show");
        //show_accordion_items("accordion-item-show");
        $(this).closest(".accordion-item").addClass("accordion-item-show");
    });

    // only fun
    $(".accordion-options-fun").click(function (e) { // binding onclick
        e.preventDefault();
        toggleAccordionView("accordion-items-fun");
    });

});