<?php

namespace App\Helpers;

use App\Models\Url;

class CodeGenerator
{
    protected $characteres = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    public static function generateCode($urlString) : Url
    {
        $user = new Url([
            'url' => $urlString,
        ]);

        return $user;
    }
}
