import React from 'react'
import img from '../../assets/img/logo.png'

const Logo = (props) =>{
    return (        
        <img src={img} className={props.className} alt={props.alt} title={props.title} width={props.size} />
    )
}

export default Logo
