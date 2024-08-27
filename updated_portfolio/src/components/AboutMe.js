import React from 'react'

export default class AboutMe extends React.Component {
    render(){
        return(
            // <div className='project'>
            //     <img className='project-img project-item' src={src} alt={alt}/>
            //     <div className='project-info project-item'>
            //         <h4>{name}</h4>
            //         <p className='project-description'>{description}</p>
            //         <p className='project-technologies'>{technologies}</p>
            //         <a href={link} target="_blank"><button>View Project</button></a>
            //     </div>
            // </div>

            <div className='aboutme-container'>
                <h2 className='spc-font'>About Me</h2>
                <hr/>

                <ul className='aboutme-list'>
                    <li>I'm a Front-End Web Developer with over 2 years of experience.</li>
                    <li>Always looking forward to expand my knowledge - <em>currently learning to code using Redux.</em></li>
                    <li>Experienced with creating fast and responsive websites.</li>
                    <li>Here are some relevant technologies I have experience with:</li>
                </ul>

                <div className='aboutme-skills'>
                    <div className='grid-item'>
                        <h3>Languages</h3>
                        <hr/>
                        <ul>
                            <li><i className="fa fa-angle-right"></i> HTML5</li>
                            <li><i className="fa fa-angle-right"></i> CSS3</li>
                            <li><i className="fa fa-angle-right"></i> JavaScript (ES6)</li>
                        </ul>
                    </div>
                    <div className='grid-item'>
                        <h3>Frameworks &amp; Libraries</h3>
                        <hr/>
                        <ul>
                            <li><i className="fa fa-angle-right"></i> React</li>
                            <li><i className="fa fa-angle-right"></i> React Hooks</li>
                            <li><i className="fa fa-angle-right"></i> jQuery</li>
                            <li><i className="fa fa-angle-right"></i> Express</li>
                            <li><i className="fa fa-angle-right"></i> Bootstrap</li>
                        </ul>
                    </div>
                    <div className='grid-item'>
                        <h3>Additional</h3>
                        <hr/>
                        <ul>
                            <li><i className="fa fa-angle-right"></i> NodeJS</li>
                            <li><i className="fa fa-angle-right"></i> Photoshop</li>
                            <li><i className="fa fa-angle-right"></i> Webpack</li>
                            <li><i className="fa fa-angle-right"></i> Agile Workflow</li>
                            <li><i className="fa fa-angle-right"></i> VS Code</li>
                        </ul>
                    </div>
                </div>
                

                <div className="social-links">
                    <a href="https://www.linkedin.com/in/wilson-ung-34962a78/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>

                    <a href="https://github.com/Wilsung" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github" aria-hidden="true" />
                    </a>

                    <a href="https://codepen.io/lolwilson94/pens/public" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-codepen" aria-hidden="true" />
                    </a>

                    <a href="https://www.freecodecamp.org/wilsung" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-free-code-camp" aria-hidden="true" />
                    </a>
                </div>
        </div>
        )
    }
}