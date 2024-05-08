<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product_images', function (Blueprint $table) {
          $table->id();
          $table->bigInteger('product_id')->unsigned();
          $table->string('img');
          $table->string('img1')->nullable();
          $table->string('img2')->nullable();
          $table->string('img3')->nullable();
          $table->string('img4')->nullable();
          $table->timestamps();
  
          $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_images');
    }
};
