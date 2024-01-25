<?php

namespace App\Http\Controllers;

use App\Models\Url;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $urls = Url::where('user_id', Auth::id())->get();

        foreach ($urls as $url)
        {
            $url->urlShorten = route("/") . "/" . $url->code;
        }

        return Inertia::render('Dashboard/Dashboard', [
            'urlList' => $urls
        ]);
    }
}
