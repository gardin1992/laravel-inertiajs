<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class PetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $pets = [
            [
                'name' => Str::random(10),
                'gender' => 'F',
                'owner' => Str::random(10),
            ],
        ];

        for($x = 0; $x < 100; $x++) {
            $pet = [
                'name' => Str::random(10),
                'gender' => ($x * 3) % 2 == 0 ? 'F' : 'M',
                'owner' => Str::random(10),
            ];

            array_push($pets, $pet);
        }

        DB::table('pets')->insert($pets);
    }
}
