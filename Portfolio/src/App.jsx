import React from 'react';
import NavBar from './components/NavBar.jsx'
import Particles from 'react-particles';

import { BrowserRouter as Router } from 'react-router-dom';
import Loading from './components/Loading'
import { Route, Routes } from 'react-router';

const AboutMe = React.lazy(() => import('./components/AboutMe.jsx'))
const LandingPage = React.lazy(() => import('./components/LandingPage.jsx'))
const Projects = React.lazy(() => import('./components/Projects.jsx'))

const particleOptions = {
  "particles": {
      "number": {
          "value": 100,
          "density": {
              "enable": true,
              "value_area": 1500
          }
      },
      "line_linked": {
          "enable": true,
          "opacity": 0.02
      },
      "move": {
          "direction": "right",
          "speed": 2.5
      },
      "size": {
          "value": 1
      },
      "opacity": {
          "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.05
          }
      }
  },
  "interactivity": {
      "events": {
          "onclick": {
              "enable": true,
              "mode": "push"
          }
      },
      "modes": {
          "push": {
              "particles_nb": 1
          }
      }
  },
  "retina_detect": true
}



const App = () => {
  return (
    <div className="App">
      <Particles 
            className='particles'
            params={particleOptions} 
        />
      <Router>
        <NavBar />
        
        <div className='container'>
        
        <React.Suspense fallback={<Loading />} >

          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/AboutMe' element={<AboutMe />} />
            <Route path='/Projects' element={<Projects />} />
            <Route render={() => <h1>404</h1>} />
          </Routes>
        </React.Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;
