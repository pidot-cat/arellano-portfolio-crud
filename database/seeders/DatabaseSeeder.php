<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    /** Seeds the gallery with the three projects from the old PHP portfolio. */
    public function run(): void
    {
        $samples = [
            ['System Design Project', 'Programming', 'A complete system design created for a school requirement.', 'Figma, Draw.io', 'proj_69eb8e87959146.93123158.png', '2024-11-15'],
            ['UCU Logo Redesign', 'Graphic Design', 'Logo redesign project for Urdaneta City University branding.', 'Adobe Illustrator', 'proj_69eb8f49a03e27.04148916.jpg', '2024-10-20'],
            ['Smart SIM Concept', 'UI/UX Design', 'UI/UX concept design for a smart SIM card management application.', 'Figma', 'proj_69eb8f8c015124.98636149.png', '2024-09-05'],
        ];

        foreach ($samples as [$title, $category, $description, $tech, $file, $date]) {
            $path = 'projects/' . $file;
            Storage::disk('public')->put($path, File::get(__DIR__ . '/images/' . $file));

            Project::updateOrCreate(['title' => $title], [
                'category'       => $category,
                'description'    => $description,
                'tech_stack'     => $tech,
                'image_path'     => $path,
                'date_completed' => $date,
            ]);
        }
    }
}
