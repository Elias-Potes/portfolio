import './NavBar.css' 
import { useState } from 'react';

function NavBar(){

    const [menu, setMenu] = useState(false)
    
    const toggleMenu = () => {
        setMenu(!menu)
    }

    return(
        <header className="container">
            <img className='container_img' src='../../../public/logoelias.jpg' alt="logo personal"/>

            <button className='container_button' onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="container_svg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </button>

            <nav className={`container_nav ${ menu ? 'isActive' : '' }`}>
                <ul className="container_ul">
                    <li className="container_li"><a href="#Inicio" className="container_li">Inicio</a></li>
                    <li className="container_li"><a href="#sobreMi" className="container_li">Sobre Mi</a></li>
                    <li className="container_li"><a href="" className="container_li">Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}


export default NavBar