export default function SkillItem({ icon, name, percent }) {
    return (
        <div className="skill-item">
            <div className="skill-icon"><i className={icon}></i></div>
            <div className="skill-info">
                <div className="skill-name"><span>{name}</span><span>{percent}%</span></div>
                <div className="progress-bar"><div className="progress" style={{ width: `${percent}%` }}></div></div>
            </div>
        </div>
    );
}
