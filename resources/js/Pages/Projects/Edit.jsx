import { useForm } from '@inertiajs/react';
import AdminLayout from '../../Layouts/AdminLayout';
import ProjectForm from '../../Components/ProjectForm';

export default function Edit({ project, categories }) {
    const form = useForm({
        _method: 'put', // HTML forms can't send PUT with files, so Laravel reads this instead
        title: project.title,
        category: project.category,
        description: project.description,
        tech_stack: project.tech_stack,
        project_url: project.project_url ?? '',
        date_completed: project.date_completed,
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();
        form.post(`/projects/${project.id}`, { forceFormData: true });
    };

    return (
        <AdminLayout title={`Edit: ${project.title}`}>
            <ProjectForm form={form} categories={categories} onSubmit={submit}
                submitLabel="Update Project" currentImage={project.image_url} />
        </AdminLayout>
    );
}
