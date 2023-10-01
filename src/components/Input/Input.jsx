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
          />
          </Form.Group>:
             <Form.Group className="mb-3" >
            <Form.Control type={types} placeholder={label}  name={name} required={required} onChange={setState} />
          </Form.Group>
    ); 
}
export default Input; 