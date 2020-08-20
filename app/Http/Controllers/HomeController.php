<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function showIndex()
    {
        $event = new \App\Event();
        $event->description = "listagem das postagems";

        return Inertia::render('Home/Index', [
            'posts' => [],
            'event' => $event
        ]);
    }

    public function contador() {
        return Inertia::render('Home/Contador');
    }
}
