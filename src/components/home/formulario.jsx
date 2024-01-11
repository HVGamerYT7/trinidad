import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../home/formulario.css'

const Formulario = () => {
  return (
    <div className='formulario'>
        <h1 className='titulo'>Contactanos</h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='email'>Correo</Form.Label>
                <Form.Control type="email" placeholder="Ingresar Correo" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="cellphone" placeholder="Numero Telefonico" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Cuentanos que necesitas</Form.Label>
                <Form.Control as="textarea" rows={3} />
                <Form.Check className='check' type="checkbox" label="Acepto los terminos y condiciones" />
            </Form.Group>
            <Button variant="primary" type="Enviar">
                Submit
            </Button>
        </Form>
    </div>
  )
}

export default Formulario