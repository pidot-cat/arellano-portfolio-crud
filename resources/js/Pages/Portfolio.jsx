import { Head, Link } from '@inertiajs/react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import SectionTitle from '../Components/SectionTitle';
import SkillItem from '../Components/SkillItem';
import GalleryCard from '../Components/GalleryCard';

const skills = [
    { icon: 'fab fa-html5', name: 'HTML', percent: 90 },
    { icon: 'fas fa-code', name: 'C++', percent: 80 },
    { icon: 'fab fa-java', name: 'Java', percent: 80 },
    { icon: 'fas fa-cube', name: 'Blender', percent: 60 },
    { icon: 'fas fa-pencil-ruler', name: 'SketchUp', percent: 60 },
    { icon: 'fab fa-figma', name: 'Figma', percent: 90 },
    { icon: 'fas fa-palette', name: 'Adobe Photoshop', percent: 65 },
    { icon: 'fas fa-pen-nib', name: 'Adobe Illustrator', percent: 70 },
];

/** Public portfolio page. Only the Gallery section is dynamic (props.projects). */
export default function Portfolio({ projects }) {
    return (
        <>
            <Head title="Front-End Developer Portfolio" />
            <Link href="/projects" className="admin-link"
                style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 999, background: 'linear-gradient(135deg,#7c3aed,#a78bfa)', color: '#fff', padding: '.8rem 1.4rem', borderRadius: 50, fontWeight: 600, fontSize: '.85rem' }}>
                <i className="fas fa-lock"></i> Manage Gallery
            </Link>

            <Navbar />

            <main>
                <section id="home" className="hero">
                    <div className="container hero-content">
                        <div className="hero-text">
                            <h1>JOHN PAUL D. ARELLANO</h1>
                            <h2 className="accent-text">And I'm a Front-End Developer</h2>
                            <p>I'm a professional Front-End Developer with strong skills in HTML, CSS, Java, Blender, SketchUp, Figma, Adobe Photoshop, Adobe Illustrator, etc. I have working in this field since 3 years and all projects are completed successfully with 100% client satisfaction.</p>
                        </div>
                        <div className="hero-image">
                            <div className="image-placeholder">
                                <img src="/images/PAUL.png" alt="John Paul D. Arellano" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about" className="about">
                    <div className="container">
                        <SectionTitle first="About" accent="Me" />
                        <div className="about-grid">
                            <div className="about-card">
                                <div className="card-image"><img src="/images/ME.png" alt="Profile" /></div>
                                <h3>JOHN PAUL D. ARELLANO</h3>
                                <p>Front-End Developer</p>
                            </div>
                            <div className="about-info">
                                <p>I am a hard working, honest individual. I am a good timekeeper, always willing to learn new skills. I am friendly, helpful and polite, have a good sense of humour. I am able to work independently in busy environments and also within a team setting.</p>
                                <div className="education">
                                    <h3>Education Qualification</h3>
                                    <p><strong>Institute:</strong> Urdaneta City University</p>
                                    <p><strong>Session:</strong> 2027 - 2028</p>
                                    <p><strong>Result:</strong> CGPA 2.83 out of 4.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="skills" className="skills">
                    <div className="container">
                        <SectionTitle first="My" accent="Skills" />
                        <div className="skills-grid">
                            {skills.map((s) => <SkillItem key={s.name} {...s} />)}
                        </div>
                    </div>
                </section>

                {/* DYNAMIC SECTION – records come from the projects table */}
                <section id="gallery" className="gallery">
                    <div className="container">
                        <SectionTitle first="My" accent="Gallery" />
                        <div className="gallery-grid">
                            {projects.length > 0 ? (
                                projects.map((p) => <GalleryCard key={p.id} project={p} />)
                            ) : (
                                <div className="gallery-empty">
                                    <i className="fas fa-images"></i>
                                    <h3>No Projects Yet</h3>
                                    <p>Add your first project from the Gallery Manager.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section id="contact" className="contact">
                    <div className="container">
                        <SectionTitle first="Contact" accent="Me" />
                        <div className="contact-grid">
                            <div className="contact-info">
                                <p>I am a professional Front-End Developer. I have designed more than 50 projects for my clients. You can hire me for design your personal, business or other website templates. You can trust me, I completed your work with your full satisfaction.</p>
                                <div className="contact-details">
                                    <div className="contact-item"><i className="fas fa-user"></i><span>Paul Arellano</span></div>
                                    <div className="contact-item"><i className="fas fa-envelope"></i><span>arellanojohnpaul0306@gmail.com</span></div>
                                    <div className="contact-item"><i className="fas fa-phone"></i><span>+639920250774</span></div>
                                </div>
                            </div>
                            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-row">
                                    <input type="text" placeholder="First Name" required />
                                    <input type="text" placeholder="Last Name" required />
                                </div>
                                <input type="email" placeholder="Email" required />
                                <input type="text" placeholder="Subject" required />
                                <textarea placeholder="Message" rows="5" required></textarea>
                                <button type="submit" className="btn-submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
