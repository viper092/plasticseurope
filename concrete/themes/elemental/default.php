<?php
defined('C5_EXECUTE') or die("Access Denied.");

$this->inc('elements/header.php');
?>

<main>
    <?php
    $a = new Area('Main');
    $a->enableGridContainer();
    $a->display($c);
    if ($c->getAttribute('hide_news_of_home')) {
        echo '<style type="text/css">
            #news-section {
                display: none;
            }
            .first-news-section {
                display: none;
            }
            .another-news-section {
                display: none;
            }
            #view-all-news {
                display: none;
            }
            </style>';
    }

    $a = new Area('Page Footer');
    $a->enableGridContainer();
    $a->display($c);
    ?>
</main>

<?php
$this->inc('elements/footer.php');
