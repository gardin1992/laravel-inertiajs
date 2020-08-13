<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $posts = [
        ];

        for($x = 0; $x < 100; $x++) {
            $post = [
                'author' => Str::random(10),
                'title' => Str::random(20),
                'description' => Str::random(140),
                'text' => Str::random(340),
                'ulr_image' => Str::random(10),
            ];

            array_push($posts, $post);
        }

        DB::table('posts')->insert($posts);
    }
}
