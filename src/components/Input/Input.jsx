import { Button,Form } from 'react-bootstrap';
import './Input.css';

function Input({types,label,name,required, options , setState}) {
    return(
            types == "select" ?   
            <Form.Group className="mb-3" >
            <Form.Select aria-label={label} name={name} required={required}  onChange={setState}>
                <option value={""} disabled selected >Seleccione una opcion</option>
                {
                    options?.map((option,index) => {
                        return <option key={index} value={option.value} >{option.label}</option>
                    })
                }
            </Form.Select>
            <Form.Control.Feedback type="invalid">
             Por favor Seleccione una Opcion!.
            </Form.Control.Feedback>
          </Form.Group>
            : types == "submit"?
            <Button type={types}>{label}</Button>
            : types == "checkbox"?
            <Form.Group className="mb-3" > 
            <Form.Check 
            type={types}
            label={label}
            name={name}
            required={required}
            onChange={setState}
            feedback="Debes aceptar antes de enviar."
            feedbackType="invalid"
          />
          </Form.Group>:
             <Form.Group className="mb-3" >
            <Form.Control type={types} placeholder={label}  name={name} required={required} onChange={setState} />
            <Form.Control.Feedback type="invalid">
             {`Por favor, Ingrese ${label}`}
            </Form.Control.Feedback>
          </Form.Group>
    ); 
}
export default Input; 