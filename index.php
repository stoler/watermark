<?php
session_start();

if (isset($_GET['download']) && $_GET['download'] == 1) {
    require_once 'lib/Watermark.php';
    Watermark::getInstance()->saveImg('http://'.$_SERVER['HTTP_HOST'].'/upload/wm2.png', 'http://'.$_SERVER['HTTP_HOST'].'/upload/img.png', 60,
        -20, -30, true, 40, 50);
    die();
}
if (isset($_GET['lang'])) {
    $lang = $_GET['lang'];
} else {
    if (isset($_SESSION['lang'])) {
        header("Location: ?lang=".$_SESSION['lang']);
    } else {
        $lang = '';
    }
}
switch ($lang) {
    case 'en':
        $_SESSION['lang'] = 'en';
        require_once 'lang/en.php';
        break;
    case 'ru':
    default:
        $_SESSION['lang'] = 'ru';
        require_once 'lang/ru.php';
}

echo $lang['title'];