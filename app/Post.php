<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    //
    protected $table = 'posts';

    protected $fillable = [
        'id', 'title', 'description', 'author', 'url_image', 'text'
    ];
}
