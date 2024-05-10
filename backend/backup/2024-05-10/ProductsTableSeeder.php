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
                'id' => 1,
                'category_id' => 4,
                'name' => 'Tinta',
                'img' => 'product_img_1715345664.png',
                'img1' => 'product_img1_1715345664.png',
                'img2' => 'product_img2_1715345664.png',
                'img3' => 'product_img3_1715345664.png',
                'img4' => 'product_img4_1715345664.png',
                'price' => '200000',
                'description' => 'helo helo bandung',
                'size' => 'XL',
                'color' => 'red',
                'material' => 'bagus',
                'weight' => '20 gram',
                'created_at' => '2024-05-10 12:54:24',
                'updated_at' => '2024-05-10 12:54:24',
            ),
        ));
        
        
    }
}