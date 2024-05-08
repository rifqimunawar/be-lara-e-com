<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      $categories = Category::all();
      foreach ($categories as $category) {
        $category->img = env('MASTER_IMG_URL') . 'img/' . $category->img;
    }
  
        return response()->json([
            "categories" => $categories
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
      $name = $request->name;
      $img = $request->file('img');
      $newFileName = 'category' . now()->timestamp . '.' . $img->getClientOriginalExtension();
      $img->move(public_path('img/'), $newFileName);

      Category::create([
        'name' => $name,
        'img' => $newFileName,
      ]);

      return response()->json([
        'result' => "Category successfully added: '$name'"
      ], 200);
      } catch (\Throwable $th) {
        return response()->json([
          'message' => "Something went wrong"
        ], 500);
      }
    }

    /**
     * Display the specified resource.
     */public function show($id)
    {
      $category = Category::find($id);

      if (!$category) {
          return response()->json([
              'error' => 'Category not found'
          ], 404);
      }

      $category->img = env('MASTER_IMG_URL') . 'img/' . $category->img;

      // Mengubah URL gambar untuk setiap produk
      foreach ($category->products as $product) {
          $product->img = env('MASTER_IMG_URL') . 'img/' . $product->img;
          $product->price = number_format($product->price, 0, ',', '.');
      }

      return response()->json([
          'category' => $category
      ], 200);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update($id, Request $request, Category $category)
    {
      try {
        $category = Category::find($id);
        if (!$category) {
            return response()->json([
                'message' => 'category not found'
            ], 404);
        }

        $name = $request->name;
        $img = $request->file('img');

        // Jika ada file gambar yang diunggah, simpan gambar baru
        if ($img) {
            $newFileName = 'category' . now()->timestamp . '.' . $img->getClientOriginalExtension();
            $img->move(public_path('img/'), $newFileName);
            $category->img = $newFileName;
        }

        $category->name = $name;
        $category->save();

        return response()->json([
            'result' => "category successfully updated: '$name'"
        ], 200);
    } catch (\Throwable $th) {
        return response()->json([
            'message' => "Something went wrong"
        ], 500);
    }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $category = Category::find($id);
    
        if (!$category) {
            return response()->json([
                'error' => 'Category not found'
            ], 404);
        }
    
        // Periksa apakah kategori memiliki produk terkait
        if ($category->products()->exists()) {
            return response()->json([
                'error' => 'Cannot delete category because it has associated products.'
            ], 400);
        }
    
        // Jika tidak ada produk terkait, lanjutkan dengan penghapusan kategori
        $category->delete();
    
        return response()->json([
            'message' => 'Category successfully deleted'
        ], 200);
    }
    
}
