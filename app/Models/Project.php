<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    /**
     * Only these columns may be filled through Project::create() / ->update().
     * Anything else sent in the request (e.g. "id") is ignored, which
     * protects the table from mass-assignment attacks.
     */
    protected $fillable = [
        'title',
        'category',
        'description',
        'tech_stack',
        'project_url',
        'image_path',
        'date_completed',
    ];

    /** Cast the date so it is always a Carbon date object. */
    protected $casts = [
        'date_completed' => 'date:Y-m-d',
    ];

    /** Extra attribute sent to React: the public URL of the image. */
    protected $appends = ['image_url'];

    public function getImageUrlAttribute(): ?string
    {
        return $this->image_path ? asset('storage/' . $this->image_path) : null;
    }
}
