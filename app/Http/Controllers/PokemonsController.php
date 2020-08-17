<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PokemonsController extends Controller
{
    public function index()
    {
        return Inertia::render('Pokemons/Index');
    }

    public function key($id) {

        return Inertia::render('Pokemons/Key');
    }
}
