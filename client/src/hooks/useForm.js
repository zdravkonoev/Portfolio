import {useState} from "react";

export default function useForm(callback, initalValues) {

    const [values, setValues] = useState(initalValues);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const formAction = async (formData) => {
       await callback(values, formData);
    }

    const register = (fieldName) => {
        return {
            name: fieldName,
            onChange: changeHandler,
            value: values[fieldName] || ''
        }
    }

    return {
        values,
        setValues,
        changeHandler,
        formAction, 
        register
    }
}