import React from 'react'
import Project from './Project'

export default class Projects extends React.Component {
    state = {
        projects: [
            {
                name: "GitHub Battle",
                src: require("../assets/gh-battle.jpg"),
                alt: "Battle your friends on GitHub",
                description: "Enter two GitHub users to battle each other. Results are based on their stars and followers. Also, finds/sorts popular repositories for several coding languages in GitHub.",
                technologies: "Technologies: HTML, CSS, JavaScript, React, React Hooks, React Router, Github's API. Deployed with Netlify.",
                link: 'https://modest-lichterman-dbae69.netlify.app/'
            },
            {
                name: "Smartbrain",
                src: require("../assets/smartbrain.jpg"),
                alt: "Find faces through an http image search.",
                description: "Detects the faces of an image provided via http. Created a login feature to store ranking of a user based on the amount of times they used the application.",
                technologies: "Technologies: HTML, CSS, JavaScript, React, React Router, Clarifai's API. Back-end utilizes Node.js, Express framework, and PostgreSQL to handle and store user data. Deployed with Netlify.",
                link: 'https://relaxed-northcutt-5526a8.netlify.app/'
            },
            {
                name: "HackerNews Clone",
                src: require("../assets/hackernews.jpg"),
                alt: "Clone of the HackerNews website.",
                description: "Clone of the HackerNews, the social news website focused on different technologies and entrepreneurship.",
                technologies: "Technologies used: HTML, CSS, JavaScript, React, React Hooks, React Router, HackerNews' API. Deployed with Netlify.",
                link: 'https://flamboyant-knuth-92e3d3.netlify.app/'
            },
            
        ]
    }

    render(){
        const { projects } = this.state
        return(
            <div className='project-container'>
                <h2 className='spc-font'>Projects</h2>
                <hr/>
                {projects.map(proj => (
                    <Project key={proj.name} project={proj}/>
                ))}
            </div>
        )
    }
}