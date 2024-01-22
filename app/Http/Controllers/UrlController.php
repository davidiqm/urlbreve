<?php

namespace App\Http\Controllers;

use App\Models\Url;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class UrlController extends Controller
{

    public function show()
    {
        return null;
    }

    public function store(Request $request)
    {
        $url = new Url;

        $url->url = $request->url;

        $url->save();

        return Redirect::route('dashboard');
    }
}
