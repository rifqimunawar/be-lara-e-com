<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserAuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// ================== Guest
Route::post('register',[UserAuthController::class,'register']);
Route::post('login',[UserAuthController::class,'login']);

// ================== User
Route::middleware(['auth:sanctum'])->group(function () {
  Route::get('cart', [CartController::class, 'index']);
  Route::post('logout', [UserAuthController::class, 'logout']);
});

// ================== Admin
Route::get('products', [ProductController::class, 'index']);
Route::get('products/rec', [ProductController::class, 'recomend']);
Route::post('products', [ProductController::class, 'store']);
Route::get('product/{id}', [ProductController::class, 'show']);
Route::put('product/{id}/update', [ProductController::class, 'update']);
Route::delete('product/{id}', [ProductController::class, 'destroy']);

Route::get('category', [CategoryController::class, 'index']);
Route::post('category', [CategoryController::class, 'store']);
Route::get('category/{id}', [CategoryController::class, 'show']);
Route::put('category/{id}/update', [CategoryController::class, 'update']);
Route::delete('category/{id}', [CategoryController::class, 'destroy']);

Route::middleware(['auth:sanctum'])->group(function () {
  Route::get('users', [UserAuthController::class, 'index']);
});
