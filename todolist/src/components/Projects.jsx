import { useState } from 'react';
import UserInput from './UserInput.jsx';

export default function Projects() {

    const [projects, setProjects] = useState([]);
    const [saveProject, setSaveProject] = useState(false);

    // const inputTitle = useRef();
    // const inputDescription = useRef();
    // const inputDueDate = useRef();
    function handleSaveProject(inputTitle, inputDescription, inputDueDate) {
        console.log('test');
        setProjects(prevProjects => {
            const updateProject = [
                {
                    title: inputTitle,
                    description: inputDescription,
                    dueDate: inputDueDate
                },
                ...prevProjects
            ];

            return updateProject;
        });
    }

    function handleCancel(){
        saveProject(false);
    }

    return (
        <>
            <UserInput onSave={handleSaveProject} onCancel={handleCancel}/>
            <div>
            {projects.map(project => (
                <h1 key={project.title}>{project.title}</h1>
            ))}
            </div>
        </>
    );
}