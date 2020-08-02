import {useState} from 'react'

 function useForm (initialValues) {
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
  
    const clearForm = () =>{
      setValues(initialValues)
    }
  
    return {
      values,
      handleChange,
      clearForm
    }
  }
  
  export default useForm