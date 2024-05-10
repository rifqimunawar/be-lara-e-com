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
                'id' => 3,
                'name' => 'Pakaian Pria',
                'img' => 'category1715163783.jpg',
                'created_at' => '2024-05-08 10:23:03',
                'updated_at' => '2024-05-08 10:23:03',
            ),
            1 => 
            array (
                'id' => 4,
                'name' => 'Pakaian Wanita',
                'img' => 'category1715163800.jpeg',
                'created_at' => '2024-05-08 10:23:20',
                'updated_at' => '2024-05-08 10:23:20',
            ),
        ));
        
        
    }
}