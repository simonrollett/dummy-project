    <?php include "includes/header.php";?>

        <section class="body">
            <div class="content-main container">

                <div class="navigation-accordion-wrapper">
                    <ul class="nav-row navigation navigation-accordion">
                        <li class="nav-link-wrapper nav-title align-center col-3"><a class="nav-link" href="#">Date</a></li>
                        <li class="nav-link-wrapper"><a href="#" class="nav-link accordion-options-achievements">Achievements</a></li>
                        <li class="nav-link-wrapper"><a href="#" class="nav-link accordion-options-work">Work</a></li>
                        <li class="nav-link-wrapper"><a href="#" class="nav-link accordion-options accordion-options-fun">Fun</a></li>
                    </ul>
                </div>

                <ul class="accordion accordion-timeline accordion-items-work">

                    <?php include "includes/accordion-work-qmetric.php";?>

                    <?php include "includes/accordion-work-dba.php";?>

                    <?php include "includes/accordion-work-optifusion.php";?>

                    <?php include "includes/accordion-work-triangle.php";?>

                    <?php include "includes/accordion-fun-kb-1.php";?>

                    <?php include "includes/accordion-fun-donington.php";?>

                    <?php include "includes/accordion-achievement-mj.php";?>

                </ul>


            <!--
            Qmetric
            madjester
            dba
            - worked for
            -- Direction Group
            --- REF Justin Trehearne
            --- REF Eoin Rogers

            -- Vicomsoft
            --- David Townend
            --- Roy

            -- McKinley Consultants
            --- Sarah Daykin

            -- Freshnet

            -- QMetric Group Ltd


            optifusion
            -
            triangle
            - REF Jim Chapman
            glenigan

            -->
            </div>
        </section>

        <?php include "includes/footer.php";?>