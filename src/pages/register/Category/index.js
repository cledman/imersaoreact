import React, { useState, useEffect } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import Preloader from "../../../components/Preloader"
import useForm from '../../../hooks/useForm'


const CadastroCategoria = () => {
  const initialValues = {
    titulo: "",
    description: "",
    colour: "",
  };
  

  const  {handleChange, values, clearForm} = useForm(initialValues)

  const [categories, setCategories] = useState([]);



  const handleSubmit = (data) => {
    data.preventDefault();
    setCategories([...categories, values]);

    clearForm(initialValues);
  };

  useEffect(() => {
    const URL_CATEGORIES = window.location.hostname.includes('localhost') 
    ? 'http://localhost:8080/categorias'
    : 'https://lokadora.herokuapp.com/categories';
    fetch(URL_CATEGORIES)
    .then(async(response) =>{
      const resp = await response.json()
      setCategories([
        ...resp,
      ])
    })
  },[])
  return (
    <PageDefault>
      <h1>Cadastro da Categoria {values.name}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="colour"
          value={values.colour}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>



      {categories.length === 0 && (
          <div className="preloader">
            <Preloader size="200" alt="preloader image" title="Carregando..."/>
        </div>
        )
      }

      <ul>
        {categories.map((category) => {
          return <li key={`${category.titulo}`}>{category.titulo}</li>;
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
