import { projects } from '../assets/toolslist/toolslist.js';

export default function Projects() {
    return (
        <>
        <section id="projects" href="projects">
            <h1>Projects:</h1>
            <div className="project-container">
                            {projects.map(project => {
                            return(  
                            <div className='project-card'>
                                <img src={project.screenshot} alt={project.name}/>
                                <div className="project-info">
                                        <p className = "project-title">{project.name}</p>
                                        <p>{project.description}</p>
                                        <p>Technologies used:</p>
                                        <ul>
                                            {project.stack.map((stack, i) => {
                                                return <li key={i}>
                                                    <img id="project-logo" src = {stack.icon} alt={stack.name} />
                                                            {stack.name}</li>
                                            })}
                                        </ul>
                                        <div className='project-links'>
                                            <a href={project.link} target="_blank">
                                            Live Demo
                                            </a>
                                            <a href={project.github} target="_blank">
                                            View Code
                                            </a>
                                        </div>
                                </div>
                            </div>
                            )
                        })}
            </div>
        </section>
        </>
    )
}