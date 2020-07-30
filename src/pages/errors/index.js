import React, { useState } from 'react'
import PageDefault from '../../components/PageDefault'
import { Link } from 'react-router-dom'



const ErrorPage= (props) =>{
    return(
      <PageDefault>
        <h1>Erro 404</h1>
        <p>Ops, não encontramos a página que procurava...</p>
        <p>Mas que tal jogar um joguinho enquanto tenta se lembrar do endereço correto?</p>
        <iframe 
          src="https://editor.p5js.org/cledman/embed/IZVZsrWUY"
          width="700"
          height="400"
        />            
          
      </PageDefault>
    )
  }
  
  export default ErrorPage