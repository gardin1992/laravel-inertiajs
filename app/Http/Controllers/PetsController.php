<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PetsController extends Controller
{
    public function index() {

        $pets = \App\Pet::all();
        return Inertia::share('Pets/Index', $pets);
    }

    public function key($id) {

        $pet = \App\Pet::findOrFail($id);

        echo 'pegar item  <br>';

        return Inertia::share('Pets/Key', $pet);
    }
}
