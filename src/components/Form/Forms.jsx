import './Forms.css'; 
import {items} from '../../db/db.json'; 
import { Form } from 'react-bootstrap';
import Input from '../Input/Input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Forms() {
    const navigate = useNavigate(); 
    const [messages , setMessages] = useState(localStorage.getItem("messages") ? JSON.parse(localStorage.getItem("messages") ) : []) 
    const [message, setMessage ] = useState({});
    const handleMessage = (e) => {
        if(e.target.type == "checkbox")    setMessage({...message , [e.target.name] : e.target.checked});
        setMessage({...message , [e.target.name] : e.target.value})
    }
    const sentMsg = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
          setValidated(true);
        }else{
            e.preventDefault();
            messages.push(message);
            setMessages(messages);
            localStorage.setItem("messages", JSON.stringify(messages)); 
            alert("Mensaje Guardado...."); 
            navigate('/list-message'); 
           form.reset();
        }
    }
    return(
        <>
        <h1>Formulario</h1>
        <Form onSubmit={sentMsg}>
            {
              items?.map((item, index) => {
                return <Input key={index}
                types={item.type}
                label={item.label}
                name={item.name}
                required={item.required}
                options={item.options}
                state={message}
                setState={handleMessage}
                />
            })
            }
        </Form>
        </>
    );
}

export default Forms; 