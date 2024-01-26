<?php

namespace App\Helpers;

use App\Models\Url;
use Carbon\Carbon;

class UrlHelper
{
    public static function createShortUrl($urlString): Url
    {
        $user = new Url([
            'url' => $urlString,
            'user_id' => auth()->user()->id
        ]);

        $code = CodeGenerator::generateCode(auth()->user()->id);
        $user->code = $code;

        return $user;
    }

    public static function createShortUrlPublic($urlString): Url
    {
        $url = new Url([
            'url' => $urlString,
            'expiration' => Carbon::now()
        ]);

        if (auth()->user()) {
            $url->user_id = auth()->user()->id;
        }

        $code = CodeGenerator::generateCode(-1);
        $url->code = $code;

        return $url;
    }
}
