<?php

namespace App\Helpers;

use App\Models\Url;

class CodeGenerator
{
    protected static $characteres = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    public static function generateCode($id = 0)
    {
        $randomNum = self::getRandomNum($id);

        $base62Code = self::getBase62($randomNum);

        $randomKey = self::$characteres[rand(0, 61)];

        $code = $randomKey . $base62Code;

        return $code;
    }

    private static function getRandomNum($key)
    {
        list($microSec, $sec) = explode(' ', microtime());

        $seconds = $sec - 1608000000;

        $microSecRound = round($microSec * 1000);

        $microSeconds = ($microSecRound > 100) ? $microSecRound : $microSecRound * 10;

        $number = (int) ($seconds . $microSeconds);

        $randomNum = $number + $key;

        return $randomNum;
    }

    private static function getBase62 ($key)
    {
        $status = true;

        $base62Code = '';

        do
        {
            if ($key > 62)
            {
                $remain = $key % 62;

                $key = intdiv($key, 62);

                $base62Code .= self::$characteres[$remain];
            }
            else
            {
                $status = false;

                $base62Code .= self::$characteres[$key];
            }
        }
        while ($status);

        $base62Code = strrev($base62Code);

        return $base62Code;
    }
}
