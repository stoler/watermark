<?php
class Watermark {
    protected static $_instance;

    private function __construct(){}

    private function __clone(){}

    public static function getInstance() {
        if (null === self::$_instance) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function saveImg ($wmUrl,
                      $imgUrl,
                      $alpha = 100,
                      $posx = 0,
                      $posy = 0,
                      $multy = false,
                      $vertical_margin = 0,
                      $horizontal_margin = 0)
    {
        require_once $_SERVER['DOCUMENT_ROOT'].'/lib/wideimage/WideImage.php';
        $strError = '';

        //if (file_exists($imgUrl) && file_exists($wmUrl)) {
            $img = WideImage::load($imgUrl);
            $watermark = WideImage::load($wmUrl);
            $new = $img->merge($watermark, $posx, $posy, $alpha);
            if ($multy) {
                $wmW = $watermark->getWidth() + $horizontal_margin;
                $wmH = $watermark->getHeight() + $vertical_margin;
                $col = ceil($img->getWidth()/$wmW);
                $row = ceil($img->getHeight()/$wmH);

                for ($i=0; $i < $col; $i++) {
                    for ($j = 0; $j < $row; $j++) {
                        if ($i == 0 && $j == 0) {
                            continue;
                        }
                        $new = $new->merge($watermark, $posx + $wmW * $i, $posy + $wmH * $j, $alpha);
                    }
                }
            }
            header('Content-type: image/png');
            header('Content-Disposition: attachment; filename=water.png');
            echo $new;
        //} else {
       //     $strError .= 'Загрузите изображения! ';
        //}

        if (strlen(trim($strError)) > 0) {
            echo $strError;
            die();
        }
    }
}