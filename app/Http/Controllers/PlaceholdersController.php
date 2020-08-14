<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PlaceholdersController extends Controller
{
    public function index()
    {
        $event = new \App\Event();
        $event->description = "listagem das placeholders";

        return Inertia::render('Placeholder/Index', [
            'event' => $event
        ]);
    }

    public function key($id) {

        $event = new \App\Event();
        $event->description = "listagem das placeholders";

        return Inertia::render('Placeholder/Key', [
            'id' => $id,
        ]);
    }
}
