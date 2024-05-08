<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('products')->delete();
        
        \DB::table('products')->insert(array (
            0 => 
            array (
                'id' => 3,
                'name' => 'baju',
                'img' => 'product1715138145.jpg',
                'price' => '200000',
                'created_at' => '2024-05-08 03:15:45',
                'updated_at' => '2024-05-08 03:15:45',
            ),
        ));
        
        
    }
}