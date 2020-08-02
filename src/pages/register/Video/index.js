import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'
import videosRepository from '../../../repositories/videos'

const CadastroVideo= () =>{
    const history = useHistory()
    const {handleChange, values} = useForm({
      titulo:'video padrão',
      url: 'https://www.youtube.com/watch?v=OS-IcYTvLaI',
      categoria: 'Games'
    })

    return(
      <PageDefault>
        <h1>Cadastro de Vídeo</h1>

        <form onSubmit={(event)=>{
          event.preventDefault()
         // alert("vídeo cadastrado!")
         videosRepository.create({
           titulo: values.titulo,
           url: values.url,
           categoriaId: 1,
         })
          .then(() =>{
            console.log('Cadastrou com sucesso')
            history.push('/')
          })

        }}>

          <FormField
            label="Título do Vídeo"
            type="text"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />

          <FormField
            label="URL Vídeo"
            type="text"
            name="url"
            value={values.url}
            onChange={handleChange}
          />

          <FormField
            label="Categoria"
            type="text"
            name="categoria"
            value={values.categoria}
            onChange={handleChange}
          />


          <Button type="submit">Cadastrar</Button>
          </form>

          <Link to="/register/category">
            Cadastrar Categoria
          </Link>
        
      </PageDefault>
    )
  }
  
  export default CadastroVideo