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

Route::get('/posts/{id}')->name('posts.key')->uses('PostsController@key');
// :href="route('pets.key', user.id)"
