import { useState , useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ListMessage.css';
function ListMessage() {
    const [messages , setMessages] = useState(localStorage.getItem("messages") ? JSON.parse(localStorage.getItem("messages")) : []);
    const updateMessage = () => {
        setMessages(JSON.parse(localStorage.getItem("messages")));
    }
useEffect(()=> {
updateMessage();  
}, [])
    return(
        <Container>
        <h1>Lista de Mensajes </h1>
        <Row className='conteinerMessage'>
        {
           messages?.map((message, index) => {
            return <Col lg={5} key={index} className='colMessage'> 
                <h2>{message.full_name}</h2>
                <ul>
                    <li><span className='textMessage'>Email:</span> {message.email}</li>
                    <li><span className='textMessage'>Ciudad de Origen:</span> {message.country_of_origin}</li>
                    <li><span className='textMessage'>Fecha de Nacimiento:</span> {message.birth_date}</li>
                    <li><span className='textMessage' >¿Aceptó los terminos y condiciones?</span> {message.terms_and_conditions == "on" ? "si" : "no"}</li>
                </ul>
            </Col>
           })
        }
        </Row>
        </Container>
    );
}

export default ListMessage;