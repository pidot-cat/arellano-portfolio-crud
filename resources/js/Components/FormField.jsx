/**
 * Reusable label + input + error message.
 * The error from Laravel is shown directly under the field it belongs to.
 */
export default function FormField({ label, name, error, hint, children }) {
    return (
        <div className="mb-5">
            <label htmlFor={name} className="mb-1 block text-sm font-semibold text-violet-200">
                {label}
            </label>
            {children}
            {hint && !error && <p className="mt-1 text-xs text-gray-400">{hint}</p>}
            {error && (
                <p className="mt-1 text-sm text-red-400">
                    <i className="fas fa-exclamation-circle mr-1"></i>{error}
                </p>
            )}
        </div>
    );
}

/** Tailwind classes for inputs; red border when there is an error. */
export const inputClass = (error) =>
    `w-full rounded-lg border bg-[#12121f] px-3 py-2 text-white outline-none focus:ring-2 focus:ring-violet-500 ${
        error ? 'border-red-500' : 'border-white/10'
    }`;
