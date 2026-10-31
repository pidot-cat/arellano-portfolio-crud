<?php

use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

// Public portfolio page
Route::get('/', PortfolioController::class)->name('portfolio');

// Management pages for the Gallery section.
// We don't need a separate "show" page, so it is excluded.
Route::resource('projects', ProjectController::class)->except(['show']);
