<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    /** Public portfolio page. The Gallery section is filled from the database. */
    public function __invoke()
    {
        return Inertia::render('Portfolio', [
            'projects' => Project::orderByDesc('date_completed')->get(),
        ]);
    }
}
