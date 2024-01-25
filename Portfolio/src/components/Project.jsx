import React from 'react'

const Project = ({project}) => {
    const { name, src, alt, description, technologies, link } = project
    return (
        <div className='project'>
            <img className='project-img project-item' src={src} alt={alt}/>
            <div className='project-info project-item'>
                <h4>{name}</h4>
                <p className='project-description'>{description}</p>
                <p className='project-technologies'>{technologies}</p>
                <a href={link} target="_blank"><button>View Project</button></a>
            </div>
        </div>
    )
}

export default Project;