<?php
defined('C5_EXECUTE') or die("Access Denied.");

$this->inc('elements/header.php');
?>

<main>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <?php
                View::element('system_errors', [
                    'format' => 'block',
                    'error' => isset($error) ? $error : null,
                    'success' => isset($success) ? $success : null,
                    'message' => isset($message) ? $message : null,
                ]);

                echo $innerContent;
                ?>
            </div>
        </div>
    </div>
</main>

    <div class="ccm-custom-style-container ccm-custom-style-main-682">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="row contact-position">
                        <div class="col-sm-4">
                            <div class="contact-section">
                                <div class="contact-image">
                                    <img alt="linkedin.png" src="http://localhost/plasticseurope/index.php/download_file/view_inline/51">
                                </div>
                                <div class="contact-container">
                                    <h4 class="contact-header">Nicolas Robin</h4>
                                    <div class="contact-description">
                                        <p><em>Director Fluoropolymers</em></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="contact-section">
                                <div class="contact-image">
                                    <img alt="linkedin.png" src="http://localhost/plasticseurope/index.php/download_file/view_inline/53">
                                </div>
                                <div class="contact-container">
                                    <h4 class="contact-header">PlasticsEurope</h4>
                                    <div class="contact-description">
                                        <p>Rue Belliard 40, box 16, 1040 Brussels – Belgium</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="contact-section">
                                <div class="contact-image">
                                    <img alt="linkedin.png" src="http://localhost/plasticseurope/index.php/download_file/view_inline/54">
                                </div>
                                <div class="contact-container">
                                    <h4 class="contact-header">Contact</h4>
                                    <div class="contact-description">
                                        <p>Phone +32 (0)2 792 30 41
                                            <br>
                                            Mobile +32 (0)496 16 22 21
                                            <br>
                                            <a href="mailto:nicolas.robin@plasticseurope.org">nicolas.robin@plasticseurope.org</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<?php
$this->inc('elements/footer.php');
