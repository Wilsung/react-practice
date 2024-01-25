import { useState } from 'react';
import Projects from './Projects.jsx';
import Sidebar from "./Sidebar";

function App() {
  return (
    <div>
      <Sidebar />
      <Projects />
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
    </div>
  );
}

export default App;
