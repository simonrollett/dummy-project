<?php

$m1 = "Jan";
$m2 = "Feb";
$m3 = "Mar";
$m4 = "Apr";
$m5 = "May";
$m6 = "Jun";
$m7 = "Jul";
$m8 = "Aug";
$m9 = "Sep";
$m10 = "Oct";
$m11 = "Nov";
$m12 = "Dec";

$rating_range = 10;


$rating_php = 4;
$rating_github = 4;
$rating_html = 8;
$rating_illustrator = 4;
$rating_indesign = 5;
$rating_jquery = 5;
$rating_less = 7;
$rating_photoshop = 9;
$rating_php = 4;
$rating_phpstorm = 5;
$rating_wordpress = 8;

    function rating_bar($rating){
    $pre_rating = '<div class="title-sub rating"><div class="rating-bar rating-' . $rating . '"><span class="rating-score">' . $rating;
    $post_rating = '</span><span class="rating-divider">/</span><span class="rating-range">' . $GLOBALS[rating_range] . '</span></div></div>';

    $rating_bar = $pre_rating . $post_rating;
        echo $rating_bar;

    }

?>