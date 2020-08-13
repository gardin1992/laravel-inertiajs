<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PostsController extends Controller
{
    public function key($id) {

        $post = \App\Post::findOrFail($id);

        $event = new \App\Event();
        $event->description = $post->description;
        $event->keywords = $post->name;
        $event->author = $post->author;
        $event->title = $post->title;
        $event->image = $post->url_image;
        $event->url = '/pets/' . $post->id;

        return Inertia::render('Posts/Key', [
            'post' => $post,
            'event' => $event
        ]);
    }
}
