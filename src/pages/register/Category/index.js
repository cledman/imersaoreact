import React, {useEffect, useState} from 'react'
import PageDefault from "../../../components/PageDefault";
import useForm from '../../../hooks/useForm'
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import Preloader from "../../../components/Preloader"
import categoriasRepository from '../../../repositories/categorias'


const CadastroCategoria = () => {
  const initialValues = {
    titulo: "",
    descricao: "",
    cor: "",
  };
  

  const  {handleChange, values, clearForm} = useForm(initialValues)

  const [categories, setCategories] = useState([]);



  const handleSubmit = (data) => {
    data.preventDefault();
    setCategories([...categories, values]);

    clearForm(initialValues);

    categoriasRepository.create({
      titulo: values.titulo,
      cor: values.cor,
      link_extra: {
        text: values.descricao,
        url: "https://www.alura.com.br/cursos-online-programacao"
      }
    })
     .then(() =>{
       console.log('Cadastrou com sucesso')
      // history.push('/')
     })



    
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
      <h1>Cadastro da Categoria {values.titulo}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
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

      
    </PageDefault>
  );
};

export default CadastroCategoria;
