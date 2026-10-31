import { useForm } from '@inertiajs/react';
import AdminLayout from '../../Layouts/AdminLayout';
import ProjectForm from '../../Components/ProjectForm';

export default function Create({ categories }) {
    const form = useForm({
        title: '',
        category: '',
        description: '',
        tech_stack: '',
        project_url: '',
        date_completed: '',
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();
        form.post('/projects', { forceFormData: true }); // FormData is needed for file uploads
    };

    return (
        <AdminLayout title="Add New Project">
            <ProjectForm form={form} categories={categories} onSubmit={submit} submitLabel="Save Project" />
        </AdminLayout>
    );
}
