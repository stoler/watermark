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

    /**
     * PNG ALPHA CHANNEL SUPPORT for imagecopymerge();
     * This is a function like imagecopymerge but it handle alpha channel well!!!
     **/
    public function imagecopymerge_alpha($dst_im, $src_im, $dst_x, $dst_y, $src_x, $src_y, $src_w, $src_h, $pct){
        $opacity=$pct;
        // getting the watermark width
        $w = imagesx($src_im);
        // getting the watermark height
        $h = imagesy($src_im);

        // creating a cut resource
        $cut = imagecreatetruecolor($src_w, $src_h);
        // copying that section of the background to the cut
        imagecopy($cut, $dst_im, 0, 0, $dst_x, $dst_y, $src_w, $src_h);
        // inverting the opacity
        $opacity = 100 - $opacity;

        // placing the watermark now
        imagecopy($cut, $src_im, 0, 0, $src_x, $src_y, $src_w, $src_h);
        imagecopymerge($dst_im, $cut, $dst_x, $dst_y, $src_x, $src_y, $src_w, $src_h, $opacity);
    }


    public function saveImg ($arResult)
    {
        require_once $_SERVER['DOCUMENT_ROOT'].'/lib/wideimage/WideImage.php';
        $strError = '';

        $img = WideImage::load($arResult['imgurl']);
        $watermark = WideImage::load($arResult['wmurl']);
        $imgW = $img->getWidth();
        $imgH = $img->getHeight();

        $kx = $imgW / $arResult['tmpW'];
        $ky = $imgH / $arResult['tmpH'];

        if ($kx > $ky) {
           $k = $kx;
        } else {
            $k = $ky;
        }

        $sourceImg = imagecreatefromstring(file_get_contents($arResult['imgurl']));
        $waterImg = imagecreatefromstring(file_get_contents($arResult['wmurl']));
        $newImage = imagecreatetruecolor($imgW, $imgH);
        if(!$newImage) {
            throw new \RuntimeException('Image creation failed.');
        }
        imagecopyresampled($newImage, $sourceImg, 0, 0, 0, 0, $imgW, $imgH, $imgW, $imgH);
        if ($arResult['multi']) {
            $wmW = $watermark->getWidth() + $arResult['horizontal_margin']*$k;
            $wmH = $watermark->getHeight() + $arResult['vertical_margin']*$k;
            $col = ceil($imgW/$wmW)+2;
            $row = ceil($imgH/$wmH)+2;

            for ($i=0; $i < $col; $i++) {
                for ($j = 0; $j < $row; $j++) {
                    if ($i == 0 && $j == 0) {
                        continue;
                    }
                    $this->imagecopymerge_alpha($newImage, $waterImg, $wmW * $i,
                        $wmH * $j, 0, 0,
                        $watermark->getWidth(), $watermark->getHeight(),
                        100 - $arResult['alpha']);
                }
            }

            $arResult['posx'] = 0;
            $arResult['posy'] = 0;
        }


        $this->imagecopymerge_alpha($newImage, $waterImg, $arResult['posx']*$k, $arResult['posy']*$k, 0, 0,
            $watermark->getWidth(), $watermark->getHeight(),
            100 - $arResult['alpha']);

        header('Content-type: image/png');
        header('Content-Disposition: attachment; filename=water.png');
        header('Content-Transfer-Encoding: binary');

        imagepng($newImage);

        if (strlen(trim($strError)) > 0) {
            echo $strError;
            die();
        }
    }

    public function validateData ($objData) {
        if ( !isset($objData->files->watermark) || empty ($objData->files->watermark)
            || !isset($objData->files->image) || empty ($objData->files->image)
            || !isset($objData->gridType) || empty ($objData->gridType)
        ) {
            return false;
        }
        if (!file_exists($_SERVER['DOCUMENT_ROOT'].'/upload/'.$objData->files->image)
            || !file_exists($_SERVER['DOCUMENT_ROOT'].'/upload/'.$objData->files->watermark)
        ) {
            return false;
        }

        $arResult = array(
            'alpha' => ((int)($objData->alpha * 100) < 100 ? (int)($objData->alpha * 100) : 100),
            'posx' => (int)$objData->coord->x,
            'posy' => (int)$objData->coord->y,
            'multi' => (($objData->gridType == 'multi')? 1 : 0),
            'vertical_margin' => (int)$objData->margins->x,
            'horizontal_margin' => (int)$objData->margins->y,
            'imgurl' => $_SERVER['DOCUMENT_ROOT'].'/upload/'.$objData->files->image,
            'wmurl' => $_SERVER['DOCUMENT_ROOT'].'/upload/'.$objData->files->watermark,
            'tmpW' => (int)$objData->tmpW,
            'tmpH' => (int)$objData->tmpH
        );

        return $arResult;
    }
}