import React, { useEffect, useMemo, useState } from 'react';
import NavBar from './components/NavBar.jsx'
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import particlesOptions from "./particles.json";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from './components/Loading.jsx'

const AboutMe = React.lazy(() => import('./components/AboutMe.jsx'))
const LandingPage = React.lazy(() => import('./components/LandingPage.jsx'))
const Projects = React.lazy(() => import('./components/Projects.jsx'))


export default function App(){
  const [init, setInit] = useState(false);

  useEffect(() => {
      if (init) {
          return;
      }

      initParticlesEngine(async (engine) => {
          await loadFull(engine);
      }).then(() => {
          setInit(true);
      });
  }, []);
  
  return (
    <div className="App">
        {init && <Particles className="particles" options={particlesOptions}/>}
      <BrowserRouter>
        <NavBar />
        
        <div className='container'>
        <React.Suspense fallback={<Loading />} >
          <Routes>
            <Route index path='/' element={<LandingPage />} />
            <Route path='/AboutMe' element={<AboutMe />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path="*" element={() => <h1>404</h1>} />
          </Routes>
        </React.Suspense>
        </div>
      </BrowserRouter>
    </div>
  );
}
