import { useState, useRef } from 'react';

export default function UserInput({onSave, onCancel}) {
    const [saveProject, setSaveProject] = useState(false);

    const inputTitle = useRef();
    const inputDescription = useRef();
    const inputDueDate = useRef();

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Title</label>
                    <input type="text" required ref={inputTitle}/>
                </p>
                <p>
                    <label>Description</label>
                    <input type="text" required ref={inputDescription}/>
                </p>
                <p>
                    <label>Due Date</label>
                    <input type="text" required ref={inputDueDate}/>
                </p>
                <button onClick={onCancel}>Cancel</button>
                <button onClick={() => onSave(inputTitle.current.value, inputDescription.current.value, inputDueDate.current.value)}>Save</button>
            </div>
        </section>
    );
}