<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('categories')->delete();
        
        \DB::table('categories')->insert(array (
            0 => 
            array (
                'id' => 2,
                'name' => 'baju laki',
                'img' => 'category1715142441.jpg',
                'created_at' => '2024-05-08 04:27:21',
                'updated_at' => '2024-05-08 04:27:21',
            ),
        ));
        
        
    }
}