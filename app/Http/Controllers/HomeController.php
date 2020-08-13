<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function showIndex()
    {
        $posts = \App\Post::all()->toArray();

        $event = new \App\Event();
        $event->description = "listagem das postagems";

        return Inertia::render('Home/Index', [
            'posts' => $posts,
            'event' => $event
        ]);
    }
}
