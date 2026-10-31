import { Link } from '@inertiajs/react';
import FormField, { inputClass } from './FormField';

/**
 * Shared form used by BOTH Create.jsx and Edit.jsx.
 * The parent page owns the useForm() state and passes it in, so the
 * typed values stay in React state and are not lost when validation fails.
 */
export default function ProjectForm({ form, categories, onSubmit, submitLabel, currentImage }) {
    const { data, setData, errors, processing } = form;

    return (
        <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-[#1a1a2e] p-6">
            <FormField label="Title *" name="title" error={errors.title}>
                <input id="title" type="text" className={inputClass(errors.title)}
                    value={data.title} onChange={(e) => setData('title', e.target.value)} />
            </FormField>

            <FormField label="Category *" name="category" error={errors.category}>
                <select id="category" className={inputClass(errors.category)}
                    value={data.category} onChange={(e) => setData('category', e.target.value)}>
                    <option value="">-- Select a category --</option>
                    {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
            </FormField>

            <FormField label="Description *" name="description" error={errors.description}
                hint={`${data.description.length}/1000 characters`}>
                <textarea id="description" rows="4" className={inputClass(errors.description)}
                    value={data.description} onChange={(e) => setData('description', e.target.value)} />
            </FormField>

            <FormField label="Tech Stack / Tools *" name="tech_stack" error={errors.tech_stack}
                hint="Separate with commas, e.g. Figma, Photoshop">
                <input id="tech_stack" type="text" className={inputClass(errors.tech_stack)}
                    value={data.tech_stack} onChange={(e) => setData('tech_stack', e.target.value)} />
            </FormField>

            <FormField label="Project URL (optional)" name="project_url" error={errors.project_url}>
                <input id="project_url" type="text" placeholder="https://"
                    className={inputClass(errors.project_url)}
                    value={data.project_url} onChange={(e) => setData('project_url', e.target.value)} />
            </FormField>

            <FormField label="Date Completed *" name="date_completed" error={errors.date_completed}>
                <input id="date_completed" type="date" className={inputClass(errors.date_completed)}
                    value={data.date_completed} onChange={(e) => setData('date_completed', e.target.value)} />
            </FormField>

            <FormField label={currentImage ? 'Replace Image (optional)' : 'Cover Image *'} name="image"
                error={errors.image} hint="JPG, PNG or WEBP, max 2 MB">
                {currentImage && (
                    <img src={currentImage} alt="Current" className="mb-2 h-32 rounded-lg object-cover" />
                )}
                <input id="image" type="file" accept="image/*"
                    className={`${inputClass(errors.image)} file:mr-3 file:rounded file:border-0 file:bg-violet-600 file:px-3 file:py-1 file:text-white`}
                    onChange={(e) => setData('image', e.target.files[0] ?? null)} />
            </FormField>

            <div className="flex gap-3">
                <button type="submit" disabled={processing}
                    className="rounded-lg bg-gradient-to-br from-violet-600 to-violet-400 px-5 py-2 font-semibold text-white disabled:opacity-50">
                    {processing ? 'Saving…' : submitLabel}
                </button>
                <Link href="/projects" className="rounded-lg border border-white/20 px-5 py-2 text-gray-300 hover:bg-white/5">
                    Cancel
                </Link>
            </div>
        </form>
    );
}
