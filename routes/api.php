<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/authorization', 'App\Http\Controllers\UserController@authorization');
Route::post('/registration', 'App\Http\Controllers\UserController@registration');
Route::get('/', 'App\Http\Controllers\DataController@index');

Route::middleware('auth:api')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', 'App\Http\Controllers\UserController@logout');
});

