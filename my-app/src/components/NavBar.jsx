import React from 'react';
import { NavLink } from 'react-router-dom'

export default function NavBar(){
    const [toggle, setToggle] = React.useState('')

    const activeStyle = {
        color: 'rgb(187, 46, 31)'
    }

    const toggleMenu = () => {
        setToggle((toggle) => toggle === 'active' ? '' : 'active')
    }


    return (
        <div>
            <nav id="nav_bar">
                <ul className={`menu ${toggle}`}>
                    <li className="logo"><NavLink to="/"><i className="fa fa-snowflake-o"></i> {`WU`}</NavLink></li>
                    <li className="item"><NavLink onClick={toggleMenu} style={({isActive}) => {return { color: isActive ? 'rgb(187, 46, 31)' : ''}}} to="/AboutMe">About</NavLink></li>
                    <li className="item"><NavLink onClick={toggleMenu} style={({isActive}) => {return { color: isActive ? 'rgb(187, 46, 31)' : ''}}} to="/Projects">Projects</NavLink></li>
                    <li className="item"><a href="mailto: ungwilson94@gmail.com"><i className="fa fa-envelope-open-o"></i></a></li>
                    {toggle === 'active' 
                      ? <button 
                          className={`toggle btn-clear`} 
                          onClick={toggleMenu}
                        >
                            <i className="fa fa-times"></i>
                        </button>
                      : <button
                          className={`toggle btn-clear`} 
                          onClick={toggleMenu}
                        >
                          <i className="fa fa-bars"></i>
                        </button>
                    }
                </ul>
            </nav>
        </div>
    );
}
