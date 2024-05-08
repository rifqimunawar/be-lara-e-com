<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // return false;
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules()
    {
        $rules = [
            'category_id' => 'required|exists:categories,id',
            'name' => 'required|string|max:200',
            'price' => 'required|string',
            'description' => 'required|string',
        ];
    
        if ($this->isMethod('post')) {
            $rules['img'] = 'required|image|mimes:jpg,jpeg,png,gif,svg|max:2048';
        }
    
        return $rules;
    }
    
    public function messages()
    {
        return [
            'category_id.required' => 'Category is required',
            'category_id.exists' => 'Invalid category',
            'name.required' => 'Name is required',
            'name.max' => 'Name may not be greater than :max characters',
            'price.required' => 'Price is required',
            'description.required' => 'Description is required',
            'img.required' => 'Image is required',
            'img.image' => 'The file must be an image',
            'img.mimes' => 'Only JPG, JPEG, PNG, GIF, and SVG files are allowed',
            'img.max' => 'The image may not be greater than 2MB',
        ];
    }
    
}
