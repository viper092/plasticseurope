<?php defined('C5_EXECUTE') or die("Access Denied.");

$this->inc('elements/header_top.php');

$as = new GlobalArea('Header Search');
$blocks = $as->getTotalBlocksInArea();
$displayThirdColumn = $blocks > 0 || $c->isEditMode();
?>

<header>
    <div class="container">
        <div class="col-sm-3 col-xs-6" style="padding: 0px">
            <?php
            $a = new GlobalArea('Header Site Title');
            $a->display();
            ?>
        </div>
        <div class="<?php echo ($displayThirdColumn) ? 'col-sm-9 col-xs-6' : 'col-sm-9 col-xs-6' ?>" id="header-navigation" style="display: flex; justify-content: flex-end; padding: 0px">
            <?php
            $a = new GlobalArea('Header Navigation');
            $a->display();
            ?>
        </div>

        <div class="<?php echo ($displayThirdColumn) ? 'col-sm-9 col-xs-6' : 'col-sm-9 col-xs-6' ?>" id="search-form" style="display: none; justify-content: flex-end;">
            <div class="col-sm-12">
                <form role="search" method="get" class="search-form" action="https://mccl.be/fluoropolymers.plasticseurope.org/dev/" style="max-width: 764px;">
                    <div class="col-sm-10 col-sm-offset-1">
                        <input type="search" class="search-field" placeholder="Search …" value="" name="s" title="Search for:" style="font-size: 14px;">
                    </div>
                    <div class="col-sm-1" id="close-header-search">
                        <img alt="search.png" src="http://localhost/plasticseurope/index.php/download_file/view_inline/20" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</header>
