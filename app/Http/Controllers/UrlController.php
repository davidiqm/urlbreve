<?php

namespace App\Http\Controllers;

use App\Helpers\UrlHelper;
use App\Models\Url;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Response;
use Inertia\Inertia;

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

        if (!$url) abort(404);

        if ($url->expiration && $url->expiration <= Carbon::now()) {
            $url->delete();
            abort(404);
        }

        $url->visits += 1;
        $url->save();

        return Redirect::away($url->url);
    }

    public function store(Request $request)
    {
        //validaciones
        // dd($request->server('REMOTE_ADDR'));
        // dd($request);

        //shortUrl
        $url = UrlHelper::createShortUrl($request->url);

        $url->save();

        return Redirect::route('dashboard');
    }

    public function storePublic(Request $request)
    {
        //validaciones
        // dd($request->server('REMOTE_ADDR'));
        // dd($request);

        //shortUrl
        $url = UrlHelper::createShortUrlPublic($request->url);
        $url->save();

        $url->urlShorten = route("/") . "/" . $url->code;

        return Inertia::render('Home/Home', ['url' => $url]);
    }
}
