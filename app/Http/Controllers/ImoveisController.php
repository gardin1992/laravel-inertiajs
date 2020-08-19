<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ImoveisController extends Controller
{
    //
    public function index() {

        return Inertia::render('Imoveis/Index', [
            'imoveis' => [],
        ]);
    }
}
