/** "My <accent>Skills</accent>" style heading used by every section. */
export default function SectionTitle({ first, accent }) {
    return (
        <h2 className="section-title">
            {first} <span className="accent-text">{accent}</span>
        </h2>
    );
}
