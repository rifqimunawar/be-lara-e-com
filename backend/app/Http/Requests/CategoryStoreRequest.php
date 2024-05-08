<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CategoryStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
      $rules = [
        'name' => 'required|string|max:200',
        'img' => 'required',
    ];

    if ($this->isMethod('post')) {
        $rules['img'] = 'required|image|mimes:jpg,jpeg,png,gif,svg|max:2048';
    }

    return $rules;
    }

    
    public function messages()
    {
        if ($this->isMethod('post')) {
            return [
                'name.required' => 'Name is required',
                'img.required' => 'Image is required',
                'img.image' => 'The file must be an image',
                'img.mimes' => 'Only JPG, JPEG, PNG, GIF, and SVG files are allowed',
                'img.max' => 'The image may not be greater than 2MB',
            ];
        } else {
            return [
                'name.required' => 'Name is required',
            ];
        }
    }
}
