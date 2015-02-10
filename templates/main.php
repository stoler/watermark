<!DOCTYPE html>
<html lang="ru">
<head>
    <base href="http://<?= $_SERVER['HTTP_HOST'].'/' ?>"/>
    <meta charset="UTF-8">
    <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE">
    <meta content="telephone=no" name="format-detection">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta rel="icon" type="image/vnd.microsoft.icon" href="favicon.ico">
    <link rel="SHORTCUT ICON" href="favicon.ico">
    <title><?= $lang['page_title'] ?></title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="Сервис для наложения водяных знаков">
    <meta name="keywords" content="Сервис для наложения водяных знаков">
    <link rel="stylesheet" href="dist/css/style.min.css"><!--[if lt IE 9]><script src="https://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>
<body>
<div class="wrapper">
    <div class="lang-soc-block">
        <ul class="languages">
            <li class="languages__item-ru"><a href="/?lang=ru">рус</a></li>
            <li class="languages__item-en"><a href="/?lang=en">eng</a></li>
        </ul>
        <ul class="social">
            <li class="social__item-share"><a href="">share<span></span></a></li>
            <li class="social__item-fb"><a href="#" class="social__btn" data-site="facebook">facebook<span></span></a></li>
            <li class="social__item-tw"><a href="#" class="social__btn" data-site="twitter">twitter<span></span></a></li>
            <li class="social__item-vk"><a href="#" class="social__btn" data-site="vkontakte">vkontakte<span></span></a></li>
        </ul>
    </div>
    <div class="main-generator">
        <div class="generator-picture">
            <h1 class="generator-picture__title"><?= $lang['title'] ?></h1>
            <div class="generator-picture__wrap-result">
                <div class="generator-picture__result generator-picture__image">
                    <img src="dist/img/upload/image.png" class="generator-picture__img">
                    <img src="dist/img/upload/watermark.png" class="generator-picture__watermark">
                    <div class="generator-picture__tile"></div>
                </div>
            </div>
        </div>
        <div class="generator-setup">
            <h2 class="generator-setup__title"><?= $lang['settings'] ?></h2>
            <div class="main-generator-upload">
                <div class="generator-upload">
                    <form action="" method="" class="upload__picture">
                        <div class="upload__main-picture">
                            <label for="upload-picture" class="main-picture__title"><?= $lang['origin_img'] ?></label>
                            <input type="file" placeholder="image.png" name="files[]" data-url="/lib/jquery-file-upload/" id="upload-picture" class="main-picture__file js-upload">
                        </div>
                        <div class="upload__watermark disable">
                            <label for="upload-watermark" class="watermark__title"><?= $lang['watermark'] ?></label>
                            <input disabled type="file" placeholder="image.png" name="files[]" data-url="/lib/jquery-file-upload/" id="upload-watermark" class="watermark__file js-upload">
                        </div>
                    </form>
                </div>
            </div>
            <div class="main-generator-position disable">
                <div class="generator-position">
                    <div class="generator-position__top">
                        <h3 class="generator-position__title"><?= $lang['position'] ?></h3>
                        <div class="generator-position__switch">
                            <div class="switch switch__multi">multi</div>
                            <div class="switch switch__mono">mono</div>
                        </div>
                    </div>
                    <div class="generator-position__bottom">
                        <div class="generator-position__main-square">
                            <div class="generator-position__square">
                                <div class="square-tr">
                                    <div class="square-td"></div>
                                    <div class="square-td"></div>
                                    <div class="square-td"></div>
                                </div>
                                <div class="square-tr">
                                    <div class="square-td"></div>
                                    <div class="square-td"></div>
                                    <div class="square-td"></div>
                                </div>
                                <div class="square-tr">
                                    <div class="square-td"></div>
                                    <div class="square-td"></div>
                                    <div class="square-td"></div>
                                </div>
                            </div>
                            <div class="multi-line position-vertical"></div>
                            <div class="multi-line position-horizontal"></div>
                        </div>
                        <div class="generator-position__coordinates">
                            <div class="generator-position-coordinates clearfix">
                                <div class="generator-position-coordinates__axis">
                                    <div class="crd-axis crd-axis--x crd-axis--letter"></div>
                                </div>
                                <div class="generator-position-coordinates__window">
                                    <div class="crd-window">
                                        <input type="text" name="x-axis" disabled class="crd-window__num crd-window__num--x">
                                    </div>
                                </div>
                                <div class="generator-position-coordinates__arrow-list">
                                    <div class="crd-arrow-list">
                                        <div class="crd-arrow-list__item crd-arrow-list__item--x crd-arrow-list__item--up crd-arrow-list__item--up-no-hover"></div>
                                        <div class="crd-arrow-list__item crd-arrow-list__item--x crd-arrow-list__item--down crd-arrow-list__item--down-no-hover"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="generator-position-coordinates clearfix">
                                <div class="generator-position-coordinates__axis">
                                    <div class="crd-axis crd-axis--y crd-axis--letter"></div>
                                </div>
                                <div class="generator-position-coordinates__window">
                                    <div class="crd-window">
                                        <input type="text" name="y-axis" disabled class="crd-window__num crd-window__num--y">
                                    </div>
                                </div>
                                <div class="generator-position-coordinates__arrow-list">
                                    <div class="crd-arrow-list">
                                        <div class="crd-arrow-list__item crd-arrow-list__item--y crd-arrow-list__item--up crd-arrow-list__item--up-no-hover"></div>
                                        <div class="crd-arrow-list__item crd-arrow-list__item--y crd-arrow-list__item--down crd-arrow-list__item--down-no-hover"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-generator-transparency disable">
                <div class="generator-transparency">
                    <h3 class="generator-transparency__title"><?= $lang['transparency'] ?></h3>
                    <div class="generator-transparency__slider"></div>
                </div>
            </div>
            <div class="main-generator-buttons disable">
                <div class="generator-buttons">
                    <button class="button-reset"><?= $lang['reset'] ?></button>
                    <button class="button-download"><?= $lang['download'] ?></button>
                </div>
            </div>
        </div>
    </div>
    <footer class="main-footer">
        <div class="footer">
            <p><?= $lang['footer'] ?></p>
        </div>
    </footer>
    <img class="big_wm" src="">
    <img class="big_img" src="">
    <div class="iframe">
        <iframe src="" frameborder="0"></iframe>
    </div>
</div>
<script src="dist/js/scripts.js"></script>
<div class="preloader">
    <img src="/dist/img/ajax-loader.gif" alt="" class="preloader__image"/>
</div>
</body>
</html>