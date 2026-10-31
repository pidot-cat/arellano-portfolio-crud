<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Creates the `projects` table that powers the Gallery section
 * of the public portfolio page.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title', 100)->unique();      // project name, must not repeat
            $table->string('category', 50);              // e.g. Web Design, UI/UX, 3D
            $table->text('description');                 // longer explanation of the project
            $table->string('tech_stack', 255);           // tools used, comma-separated
            $table->string('project_url')->nullable();   // optional live demo / Behance link
            $table->string('image_path');                // file path inside storage/app/public
            $table->date('date_completed');              // when the project was finished
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
