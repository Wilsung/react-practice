export default function Sidebar (){
    return(
        <>
            <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 " aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-black dark:bg-gray-800 rounded-r-lg">
                <h2>YOUR PROJECTS</h2>
                </div>
            </aside>
        </>
    );
}