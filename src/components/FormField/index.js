import React from 'react'

const FormField = ( { label, type, name, value, onChange}) =>{
const inputType= ((type==="textarea") ? true : false);   

    return(
        <div>
            <label>
            {label}:
            {!inputType &&

                <input
                type={type}
                value={value}
                name={name}
                onChange = {onChange}                
                />
            }
            {inputType &&

                <textarea
                type={type}
                value={value}
                name={name}
                onChange = {onChange}                
                />
            }


            </label>
      </div>        
    )
}

export default FormField