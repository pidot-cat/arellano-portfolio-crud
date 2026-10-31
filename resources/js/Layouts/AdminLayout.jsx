import { Head, Link } from '@inertiajs/react';
import FlashMessage from '../Components/FlashMessage';

/** Wrapper for all management pages (Index, Create, Edit). */
export default function AdminLayout({ title, children }) {
    return (
        <div className="min-h-screen bg-[#0a0a1a] text-white">
            <Head title={title} />
            <header className="border-b border-white/10 bg-[#12121f]">
                <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
                    <Link href="/projects" className="text-lg font-bold text-violet-300">
                        <i className="fas fa-images mr-2"></i>Gallery Manager
                    </Link>
                    <Link href="/" className="text-sm text-gray-300 hover:text-violet-300">
                        <i className="fas fa-eye mr-1"></i>View Portfolio
                    </Link>
                </div>
            </header>
            <main className="mx-auto max-w-5xl px-4 py-8">
                <FlashMessage />
                <h1 className="mb-6 text-2xl font-bold">{title}</h1>
                {children}
            </main>
        </div>
    );
}
