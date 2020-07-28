import React from 'react'



const ButtonLink = (props) =>{
    return(
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    )
}

export default ButtonLink