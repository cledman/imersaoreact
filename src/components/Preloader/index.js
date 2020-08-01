import React from 'react'
import img from '../../assets/img/loading.gif'
import './Preloader.css'

const Preloader = (props) =>{
    return (
        <img src={img} className={props.className} alt={props.alt} title={props.title} width={props.size} />
    )
}

export default Preloader
