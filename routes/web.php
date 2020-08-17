<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Home
Route::get('/')->name('home')->uses('HomeController@showIndex');

Route::get('/contador')->name('contador')->uses('HomeController@contador');

Route::get('/posts')->name('posts.index')->uses('PostsController@index');
Route::get('/posts/{id}')->name('posts.key')->uses('PostsController@key');
// :href="route('pets.key', user.id)"

Route::get('/placeholders')->name('placeholders.index')->uses('PlaceholdersController@index');
Route::get('/placeholders/{id}')->name('placeholders.key')->uses('PlaceholdersController@key');

Route::get('/pokemons')->name('pokemons.index')->uses('PokemonsController@index');
Route::get('/pokemons/{id}')->name('pokemons.key')->uses('PokemonsController@key');
