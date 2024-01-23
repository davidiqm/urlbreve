<?php

namespace App\Http\Controllers;

use App\Helpers\UrlHelper;
use App\Models\Url;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class UrlController extends Controller
{

    public function show(Request $request, $code)
    {
        $url = Url::where('code', $code)->firstOrFail();

        // dd($url);

        if ($url)
        {
            return Redirect::away($url->url);
        }
        else
        {
            abort(404);
        }
    }

    public function store(Request $request)
    {
        //validaciones

        //shortUrl
        $url = UrlHelper::createShortUrl($request->url);

        $url->save();

        return Redirect::route('dashboard');
    }
}
