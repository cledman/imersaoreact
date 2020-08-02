import React, {useEffect, useState} from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'
import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'

const CadastroVideo= () =>{
    const history = useHistory()
    const [categorias, setCategorias] = useState([])
    const categoryTitles = categorias.map(({ titulo }) => titulo)
    const {handleChange, values} = useForm({
      titulo:'video padrão',
      url: 'https://www.youtube.com/watch?v=OS-IcYTvLaI',
      categoria: 'Games'
    })

    useEffect( () =>{
      categoriasRepository
        .getAll()
        .then( (categoriasFromServer)=>{
          setCategorias(categoriasFromServer)
        })
    },[])



    return(
      <PageDefault>
        <h1>Cadastro de Vídeo</h1>

        <form onSubmit={(event)=>{
          event.preventDefault()
         // alert("vídeo cadastrado!")

         const categoriaEscolhida = categorias.find((categoria) =>{
            return categoria.titulo === values.categoria
         })

         console.log('asdasdasda',categoriaEscolhida)

         videosRepository.create({
           titulo: values.titulo,
           url: values.url,
           categoriaId:categoriaEscolhida.id,
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
            suggestions={categoryTitles}
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