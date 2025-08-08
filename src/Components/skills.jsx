import { frontEnd, backEnd, others } from '../assets/toolslist/toolslist.js';

export default function Skills() {
    return (
        <>
        <section id="skills" href="skills">
            <h1>Skills:</h1>
            <div className="skill-container">
                <div className="skill-card">
                    <h2>Front-end:</h2>
                    <div className="skill-item">
                            {frontEnd.map(skill => {
                            return(  
                            <div>
                                <img src={skill.logo} alt={skill.name}/>
                                <p>{skill.name}</p>
                            </div>
                            )
                        })}
                    </div>
                </div>
                <div className="skill-card">
                    <h2>Back-end:</h2>
                    <div className="skill-item">
                            {backEnd.map(skill => {
                            return(  
                            <div>
                                <img src={skill.logo} alt={skill.name}/>
                                <p>{skill.name}</p>
                            </div>
                            )
                        })}
                    </div>
                </div>
                <div className="skill-card">
                    <h2>Others:</h2>
                    <div className="skill-item">
                        {others.map(skill => {
                            return(  
                            <div>
                                <img src={skill.logo} alt={skill.name}/>
                                <p>{skill.name}</p>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}