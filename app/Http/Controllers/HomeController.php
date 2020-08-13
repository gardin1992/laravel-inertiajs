<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class Event {

    public $description = "";
    public $keywords = "";
    public $language = "";
    public $author = "";
    public $robots = "";

    public $type = "";
    public $title = "";
    public $image = "";
    public $url = "";
    public $site_name = "";
}

class HomeController extends Controller
{
    public function showIndex()
    {
        $pets = \App\Pet::all();

        $event = new Event();
        $event->description = 'Pagina Inicial do teste que esta sendo feito com o inerteaJs';

        return Inertia::render('Home/Index', [
            'pets' => $pets->toArray(),
            'event' => $event
        ]);
    }
}
