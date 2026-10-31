/** One project card in the public Gallery section (data comes from the database). */
export default function GalleryCard({ project }) {
    const date = new Date(project.date_completed).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
    });

    return (
        <div className="gallery-item">
            <img src={project.image_url} alt={project.title} />
            <div className="gallery-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="date-badge">
                    <i className="fas fa-tag"></i> {project.category} &nbsp;·&nbsp;
                    <i className="fas fa-calendar-alt"></i> {date}
                </div>
                {project.project_url && (
                    <a href={project.project_url} target="_blank" rel="noreferrer" className="date-badge" style={{ display: 'inline-block' }}>
                        <i className="fas fa-external-link-alt"></i> View project
                    </a>
                )}
            </div>
        </div>
    );
}
