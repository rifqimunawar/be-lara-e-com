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
                'category_id' => 1,
                'name' => 'baju',
                'img' => 'product1715142448.jpg',
                'price' => '200000',
                'created_at' => '2024-05-08 04:27:28',
                'updated_at' => '2024-05-08 04:27:28',
            ),
        ));
        
        
    }
}