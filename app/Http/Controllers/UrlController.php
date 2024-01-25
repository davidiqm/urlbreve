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
    public function get(Request $request)
    {
        $urls = Url::where('user_id', Auth::id())->get();

        foreach ($urls as $url)
        {
            $url->urlShorten = route("/") . "/" . $url->code;
        }

        return Response::json($urls);
    }

    public function show($code)
    {

        // dd($request);
        // dd($code);
        $url = Url::where('code', $code)->firstOrFail();

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
