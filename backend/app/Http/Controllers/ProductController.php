<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Requests\ProductStoreRequest;

class ProductController extends Controller
{

  public function index()
  {
      $products = Product::all();
      foreach ($products as $product) {
          $product->img = env('MASTER_IMG_URL') . 'img/' . $product->img;
          $product->img1 = env('MASTER_IMG_URL') . 'img/' . $product->img1;
          $product->img2 = env('MASTER_IMG_URL') . 'img/' . $product->img2;
          $product->img3 = env('MASTER_IMG_URL') . 'img/' . $product->img3;
          $product->img4 = env('MASTER_IMG_URL') . 'img/' . $product->img4;
          $product->price = number_format($product->price, 0, ',', '.');
      }
  
      return response()->json([
          "products" => $products
      ], 200);
  }
  

  public function recomend()
  {
      $products = Product::latest()->take(4)->get();
      
      foreach ($products as $product) {
        $product->img = env('MASTER_IMG_URL') . 'img/' . $product->img;
        $product->img1 = env('MASTER_IMG_URL') . 'img/' . $product->img1;
        $product->img2 = env('MASTER_IMG_URL') . 'img/' . $product->img2;
        $product->img3 = env('MASTER_IMG_URL') . 'img/' . $product->img3;
        $product->img4 = env('MASTER_IMG_URL') . 'img/' . $product->img4;
        $product->price = number_format($product->price, 0, ',', '.');
      }
  
      return response()->json([
          "products" => $products
      ], 200);
  }
  
  
  

  public function store(ProductStoreRequest $request)
  {
    try {
      $category_id = $request->category_id;
      $name = $request->name;
      $price = $request->price;
      $description = $request->description;
      $size = $request->size;
      $color = $request->color;
      $material = $request->material;
      $weight = $request->weight;

      $img = $request->file('img');
      $image = 'product' . "_img_" . now()->timestamp . '.' . $img->getClientOriginalExtension();
      $img->move(public_path('img/'), $image);

      $img1 = $request->file('img1');
      $image1 = 'product' . "_img1_" . now()->timestamp . '.' . $img1->getClientOriginalExtension();
      $img1->move(public_path('img/'), $image1);

      $img2 = $request->file('img2');
      $image2 = 'product' . "_img2_" . now()->timestamp . '.' . $img2->getClientOriginalExtension();
      $img2->move(public_path('img/'), $image2);

      $img3 = $request->file('img3');
      $image3 = 'product' . "_img3_" . now()->timestamp . '.' . $img3->getClientOriginalExtension();
      $img3->move(public_path('img/'), $image3);

      $img4 = $request->file('img4');
      $image4 = 'product' . "_img4_" . now()->timestamp . '.' . $img4->getClientOriginalExtension();
      $img4->move(public_path('img/'), $image4);


      Product::create([
        'name' => $name,
        'category_id' => $category_id,
        'img' => $image,
        'img1' => $image1,
        'img2' => $image2,
        'img3' => $image3,
        'img4' => $image4,

        'price' => $price,
        'description' => $description,
        'size' => $size,
        'color' => $color,
        'material' => $material,
        'weight' => $weight,
      ]);

      return response()->json([
        'result' => "Product successfully added: '$name'"
      ], 200);
    } catch (\Throwable $th) {
      return response()->json([
        'message' => "Something went wrong"
      ], 500);
    }
  }

  public function show($id)
  {
    $product = Product::find($id);
    $product->img = env('MASTER_IMG_URL') . 'img/' . $product->img;
    $product->img1 = env('MASTER_IMG_URL') . 'img/' . $product->img1;
    $product->img2 = env('MASTER_IMG_URL') . 'img/' . $product->img2;
    $product->img3 = env('MASTER_IMG_URL') . 'img/' . $product->img3;
    $product->img4 = env('MASTER_IMG_URL') . 'img/' . $product->img4;
    $product->price = number_format($product->price, 0, ',', '.');
    if (!$product) {
      return response()->json([
        'product not found'
      ], 400);
    }
    return response()->json([
      'product' => $product
    ], 200);
  }
  public function update($id, ProductStoreRequest $request)
  {
      try {
          $product = Product::find($id);
          if (!$product) {
              return response()->json([
                  'message' => 'Product not found'
              ], 404);
          }
  
          $name = $request->name;
          $price = $request->price;
          $img = $request->file('img');
  
          // Jika ada file gambar yang diunggah, simpan gambar baru
          if ($img) {
              $newFileName = 'product' . now()->timestamp . '.' . $img->getClientOriginalExtension();
              $img->move(public_path('img/'), $newFileName);
              $product->img = $newFileName;
          }
  
          $product->name = $name;
          $product->price = $price;
          $product->save();
  
          return response()->json([
              'result' => "Product successfully updated: '$name'"
          ], 200);
      } catch (\Throwable $th) {
          return response()->json([
              'message' => "Something went wrong"
          ], 500);
      }
  }
  public function destroy($id)
  {
    $product = Product::find($id);

    if (!$product) {
      return response()->json([
        'product not found'
      ], 400);
    }

    $product->delete();
    return response()->json([
      'message' => "Product successfuly deleted"
    ], 200);
  }
}
