import { useState } from 'react';

const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
];

/** Top navigation of the public portfolio (replaces the old <header> + menu script). */
export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header>
            <nav className="container">
                <div className="logo">PORTFOLIO</div>
                <ul className={`nav-links ${open ? 'active' : ''}`}>
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="menu-toggle" onClick={() => setOpen(!open)}>
                    <i className="fas fa-bars"></i>
                </div>
            </nav>
        </header>
    );
}
