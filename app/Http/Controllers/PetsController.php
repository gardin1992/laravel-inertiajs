<?php

namespace App\Http\Controllers;

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

class PetsController extends Controller
{
    public function index() {

        $pets = \App\Pet::all();
        return Inertia::share('Pets/Index', $pets);
    }

    public function key($id) {

        $pet = \App\Pet::findOrFail($id);

        $event = new Event();
        $event->description = $pet->name;

        return Inertia::render('Pets/Key', [
            'pet' => $pet,
            'event' => $event
        ]);
    }
}
