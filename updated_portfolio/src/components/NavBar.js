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
            <nav>
                <ul className={`menu ${toggle}`}>
                    <li className="logo"><NavLink exact to="/"><i className="fa fa-snowflake-o"></i> {`WU`}</NavLink></li>
                    <li className="item"><NavLink activeStyle={activeStyle} onClick={toggleMenu} to="/AboutMe">About</NavLink></li>
                    <li className="item"><NavLink activeStyle={activeStyle} onClick={toggleMenu} to="/Projects">Projects</NavLink></li>
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
