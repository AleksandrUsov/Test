<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\DishCollection;
use App\Http\Resources\DishResource;
use App\Models\Dish;

class DishController extends Controller
{
    public function index()
    {
        return new DishCollection(Dish::all());
//        return DishResource::collection(Dish::all());
    }

    public function show(Dish $dish)
    {
        return new DishResource($dish);
    }
}
