<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DishResource extends JsonResource
{
    public static $wrap = 'cards';
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'desc' => $this->description,
            'stopList' => $this->stopList,
            'price' => $this->price,
            'count' => $this->count,
        ];
    }
}
