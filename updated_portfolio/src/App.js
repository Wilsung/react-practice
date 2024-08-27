import React from 'react';
import NavBar from './components/NavBar'
import Particles from 'react-particles-js';

import { BrowserRouter as Router } from 'react-router-dom';
import Loading from './components/Loading'
import { Route, Switch } from 'react-router-dom';

const AboutMe = React.lazy(() => import('./components/AboutMe'))
const LandingPage = React.lazy(() => import('./components/LandingPage'))
const Projects = React.lazy(() => import('./components/Projects'))

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
          <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route path='/AboutMe' component={AboutMe} />
              <Route path='/Projects' component={Projects} />
              <Route render={() => <h1>404</h1>} />
          </Switch>
        </React.Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;
