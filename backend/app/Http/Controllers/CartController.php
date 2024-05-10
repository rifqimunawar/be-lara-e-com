<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
  public function index()
  {
      // Mendapatkan user yang sedang diotentikasi
      $user = Auth::user();
  
      // Mendapatkan semua item keranjang untuk user yang sedang diotentikasi
      $carts = $user->carts;
  
      // Mengumpulkan ID produk dari semua item keranjang
      $productIds = $carts->pluck('product_id');
  
      // Mengambil informasi produk berdasarkan ID yang dikumpulkan
      $products = Product::whereIn('id', $productIds)->get();
  
      // Mengupdate URL gambar untuk setiap produk
      $products->transform(function ($product) {
          $product->img = env('MASTER_IMG_URL') . 'img/' . $product->img;
          $product->img1 = env('MASTER_IMG_URL') . 'img/' . $product->img1;
          $product->img2 = env('MASTER_IMG_URL') . 'img/' . $product->img2;
          $product->img3 = env('MASTER_IMG_URL') . 'img/' . $product->img3;
          $product->img4 = env('MASTER_IMG_URL') . 'img/' . $product->img4;
          return $product;
      });
  
      // Mengembalikan data keranjang beserta informasi produknya
      return response()->json([
          'carts' => $carts,
          'products' => $products,
      ]);
  }
  
}
