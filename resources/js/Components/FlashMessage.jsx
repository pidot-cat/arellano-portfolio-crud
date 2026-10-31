import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

/** Shows the "success" flash message sent by the controller's ->with('success', ...). */
export default function FlashMessage() {
    const { flash } = usePage().props;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (flash?.success) {
            setVisible(true);
            const t = setTimeout(() => setVisible(false), 4000);
            return () => clearTimeout(t);
        }
    }, [flash]);

    if (!visible || !flash?.success) return null;

    return (
        <div className="mb-5 flex items-center justify-between rounded-lg border border-green-500/40 bg-green-500/10 px-4 py-3 text-green-300">
            <span><i className="fas fa-check-circle mr-2"></i>{flash.success}</span>
            <button onClick={() => setVisible(false)} className="text-green-300 hover:text-white">✕</button>
        </div>
    );
}
