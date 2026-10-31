<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /** Allowed categories, shared with the React form. */
    public const CATEGORIES = ['Web Design', 'UI/UX Design', 'Graphic Design', '3D Modeling', 'Programming'];

    /** READ – list of all projects (with search + pagination bonus). */
    public function index(Request $request)
    {
        $search = $request->input('search');

        $projects = Project::query()
            ->when($search, fn ($q) => $q->where('title', 'like', "%{$search}%")
                                         ->orWhere('category', 'like', "%{$search}%"))
            ->orderByDesc('date_completed')
            ->paginate(5)
            ->withQueryString();

        return Inertia::render('Projects/Index', [
            'projects' => $projects,
            'filters'  => ['search' => $search],
        ]);
    }

    /** Show the empty Create form. */
    public function create()
    {
        return Inertia::render('Projects/Create', [
            'categories' => self::CATEGORIES,
        ]);
    }

    /** CREATE – validate then save a new project. */
    public function store(Request $request)
    {
        $data = $request->validate($this->rules(), $this->messages());

        $data['image_path'] = $request->file('image')->store('projects', 'public');
        unset($data['image']);

        Project::create($data);

        return redirect()->route('projects.index')
            ->with('success', 'Project "' . $data['title'] . '" was added successfully.');
    }

    /** Show the Edit form filled with the current record. */
    public function edit(Project $project)
    {
        return Inertia::render('Projects/Edit', [
            'project'    => $project,
            'categories' => self::CATEGORIES,
        ]);
    }

    /** UPDATE – validate then save changes to an existing project. */
    public function update(Request $request, Project $project)
    {
        $data = $request->validate($this->rules($project), $this->messages());

        // A new image is optional on update. Replace the old file only if one was uploaded.
        if ($request->hasFile('image')) {
            Storage::disk('public')->delete($project->image_path);
            $data['image_path'] = $request->file('image')->store('projects', 'public');
        }
        unset($data['image']);

        $project->update($data);

        return redirect()->route('projects.index')
            ->with('success', 'Project "' . $project->title . '" was updated successfully.');
    }

    /** DELETE – remove the record and its image file. */
    public function destroy(Project $project)
    {
        Storage::disk('public')->delete($project->image_path);
        $title = $project->title;
        $project->delete();

        return redirect()->route('projects.index')
            ->with('success', 'Project "' . $title . '" was deleted.');
    }

    /**
     * Validation rules shared by store() and update().
     * When $project is given (update), the unique rule ignores that record
     * and the image becomes optional.
     */
    private function rules(?Project $project = null): array
    {
        return [
            'title'          => ['required', 'string', 'min:3', 'max:100',
                                 Rule::unique('projects', 'title')->ignore($project?->id)],
            'category'       => ['required', Rule::in(self::CATEGORIES)],
            'description'    => ['required', 'string', 'min:10', 'max:1000'],
            'tech_stack'     => ['required', 'string', 'max:255'],
            'project_url'    => ['nullable', 'url', 'max:255'],
            'date_completed' => ['required', 'date', 'before_or_equal:today'],
            'image'          => [$project ? 'nullable' : 'required', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
        ];
    }

    /** Custom, friendlier error messages. */
    private function messages(): array
    {
        return [
            'title.required'                 => 'Please give your project a title.',
            'title.unique'                   => 'You already have a project with this title.',
            'title.max'                      => 'The title must not be longer than 100 characters.',
            'category.in'                    => 'Please choose one of the listed categories.',
            'description.min'                => 'The description should be at least 10 characters so visitors understand the project.',
            'project_url.url'                => 'The project link must be a valid URL (e.g. https://example.com).',
            'date_completed.before_or_equal' => 'The completion date cannot be in the future.',
            'image.required'                 => 'Please upload a cover image for the project.',
            'image.image'                    => 'The uploaded file must be an image.',
            'image.mimes'                    => 'Only JPG, PNG, or WEBP images are allowed.',
            'image.max'                      => 'The image must not be larger than 2 MB.',
        ];
    }
}
