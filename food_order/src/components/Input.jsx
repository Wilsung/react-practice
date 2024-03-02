export default function Input({label, id, error, children, ...props}){
    return(
        <div className="control-row">
            <div className="control">
                <label htmlFor={id}>{label}</label>
                <input id={id} {...props} />
            </div>
            {children}
            <div className="control-error">
                {error && <p>{error}</p>}
            </div>
        </div>
    )
}