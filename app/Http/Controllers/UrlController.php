<?php

namespace App\Http\Controllers;

use App\Helpers\UrlHelper;
use App\Models\Url;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Response;

class UrlController extends Controller
{
    public function get(Request $request, $id)
    {
        $url = Url::findOrFail($id);

        $url->urlShorten = route("/") . "/" . $url->code;
        $url->userName = $url->user->name;

        return Response::json($url);
    }

    public function show($code)
    {
        $url = Url::where('code', $code)->firstOrFail();

        if (!$url)
        {
            abort(404);
        }

        $url->visits += 1;
        $url->save();

        return Redirect::away($url->url);
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
