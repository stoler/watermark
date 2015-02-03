<?php
session_start();

if (isset($_GET['download']) && $_GET['download'] == 1) {
    require_once 'lib/Watermark.php';

    $objData = json_decode($_GET['data']);

    $arData = Watermark::getInstance()->validateData($objData);


    if (is_array($arData)) {
        Watermark::getInstance()->saveImg($arData);
        die();
    }

    echo 'error';
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

require 'templates/main.php';