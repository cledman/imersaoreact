import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'

const CadastroCategoria= () =>{

  const initialValues = {
    name:'',
    description:'',
    colour:''
  }
  const [categories, setCategories]= useState([])
  const [values, setValues] = useState(initialValues)



    function setValue(key, value){
      setValues({
        ...values,
        [key]:value 
      })
    }

    const handleChange = (info) =>{

      setValue(
        info.target.getAttribute('name'),
        info.target.value
        )
    }
    
    const handleSubmit = (data) =>{
      data.preventDefault()
      setCategories([
        ...categories,
        values
      ]) 
      
      setValues(initialValues)
    }

    return(
      <PageDefault>
          <h1>Cadastro da Categoria {values.name}</h1>

        <form onSubmit={handleSubmit}>

          <FormField 
            label="Nome da categoria"
            type="text"
            name="name"          
            value = {values.name}
            onChange = {handleChange}      
           />

          <FormField 
            label="Descrição:"
            type="textarea"
            name="description"
            value = {values.colour}
            onChange = {handleChange}      
           />

          <FormField 
            label="Cor"
            type="color"
            name="colour"
            value = {values.colour}
            onChange = {handleChange}      
           />



          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categories.map((category, key) =>{
            return(
              <li key={`${category}${key}`} >
                {category.name}
              </li>
            )
          })}
        </ul>

        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    )
  }
  
  export default CadastroCategoria