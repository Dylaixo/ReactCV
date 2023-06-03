import { motion } from 'framer-motion'
import { data } from '../../data';
import './Projects.css'
function Projects() {
    const projects = data[0].projects;
    console.log(projects)
  return (
    <div initial={ {opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
    {projects.map((project, index) => (
      <div className='contentinfo' key={index}>
        <h3>{project.title}</h3>
        <img src={project.photoURL} className='projectImg' />
        <div className='describe'>
            <p className='projectDescription'>{project.description}</p>
            <h6 className='tech'>Technologies: {project.tech}</h6>
            <a href={project.link} target='_blank'>Project link</a>
        </div>
        <hr className='divide'></hr>
      </div>
    ))}
    </div>
  );
}

export default Projects;
