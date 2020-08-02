import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo'
import './Menu.css'
import Button from '../Button'
//import ButtonLink from './components/ButtonLink'


const Menu = () =>{
    return(
        <nav className='Menu'>
            <Link to="/">
                <Logo className="Logo" alt="AluraFlix logo" title="Home"/>                
            </Link>

            <Button as={Link} className="ButtonLink" to="/register/video"> 
                Novo vídeo
            </Button>
        
        </nav>
    )
}

export default Menu