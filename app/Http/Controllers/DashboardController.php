<?php

namespace App\Http\Controllers;

use App\Models\Url;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $urls = Url::all();

        return Inertia::render('Dashboard/Dashboard', [
            'urls' => $urls,
        ]);
    }
}
