<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PostsController extends Controller
{
    public function index() {
        $posts = \App\Post::all()->toArray();

        $event = new \App\Event();
        $event->description = "listagem das postagems";

        return Inertia::render('Posts/Index', [
            'posts' => $posts,
            'event' => $event
        ]);
    }

    public function key($id) {

        $post = \App\Post::findOrFail($id);

        $event = new \App\Event();
        $event->description = $post->description;
        $event->keywords = $post->name;
        $event->author = $post->author;
        $event->title = $post->title;
        $event->image = 'https://via.placeholder.com/600x315';
        $event->url = '/pets/' . $post->id;

        return Inertia::render('Posts/Key', [
            'post' => $post,
            'event' => $event
        ]);
    }
}
