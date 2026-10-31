/** Confirmation step shown before a project is deleted. */
export default function ConfirmDeleteModal({ project, onConfirm, onCancel, processing }) {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#1a1a2e] p-6 text-center">
                <i className="fas fa-trash-alt mb-3 text-4xl text-red-400"></i>
                <h3 className="mb-2 text-lg font-bold text-white">Delete this project?</h3>
                <p className="mb-6 text-gray-300">
                    "<strong>{project.title}</strong>" and its image will be permanently removed.
                </p>
                <div className="flex justify-center gap-3">
                    <button onClick={onCancel} className="rounded-lg border border-white/20 px-5 py-2 text-gray-300 hover:bg-white/5">
                        Cancel
                    </button>
                    <button onClick={onConfirm} disabled={processing}
                        className="rounded-lg bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-500 disabled:opacity-50">
                        {processing ? 'Deleting…' : 'Yes, delete'}
                    </button>
                </div>
            </div>
        </div>
    );
}
