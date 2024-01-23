<?php

namespace App\Helpers;

use App\Models\Url;

class UrlHelper
{
    public static function createShortUrl($urlString) : Url
    {
        $user = new Url([
            'url' => $urlString,
            'user_id' => auth()->user()->id
        ]);

        return $user;
    }

    public static function createShortUrlWithoutUser($urlString) : Url
    {
        $user = new Url([
            'url' => $urlString,
        ]);

        return $user;
    }
}
