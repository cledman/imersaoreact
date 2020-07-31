import React, { useState, useEffect } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";

const CadastroCategoria = () => {
  const initialValues = {
    name: "",
    description: "",
    colour: "",
  };
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  const handleChange = (info) => {
    setValue(info.target.getAttribute("name"), info.target.value);
  };

  const handleSubmit = (data) => {
    data.preventDefault();
    setCategories([...categories, values]);

    setValues(initialValues);
  };

  useEffect(() => {
    console.log("ioa");
    const URL_CATEGORIES = "http://localhost:8080/categories";
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

      {categories.length === 0 && <div>Loading...</div>}

      <ul>
        {categories.map((category) => {
          return <li key={`${category.name}`}>{category.name}</li>;
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
