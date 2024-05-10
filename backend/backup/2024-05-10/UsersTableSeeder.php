<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('users')->delete();
        
        \DB::table('users')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'rifqi',
                'email' => 'rifqi@gmail.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$ITSAre0G9KJunSzGbokAqesXVodm/frni9qIVRkfb5ArDhuHrwA7e',
                'remember_token' => NULL,
                'created_at' => '2024-05-10 13:57:26',
                'updated_at' => '2024-05-10 13:57:26',
            ),
        ));
        
        
    }
}