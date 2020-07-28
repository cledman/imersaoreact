import React from 'react'
import Logo from '../../components/Logo'
import './Menu.css'
import Button from '../Button'
//import ButtonLink from './components/ButtonLink'


const Menu = () =>{
    return(
        <nav className='Menu'>
            <a href="/">
                <Logo className="Logo" alt="AluraFlix logo" title="Home"/>
            </a>

            <Button as="a" className="ButtonLink" href="/"> 
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu