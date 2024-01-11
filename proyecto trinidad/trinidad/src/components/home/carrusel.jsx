import React from 'react';
import { Carousel } from 'react-bootstrap';
import imagen1 from '../../imagenes/hotel.jpg'; // Asegúrate de ajustar la ruta de tu imagen
import imagen2 from '../../imagenes/habitaciones.jpg'; // Asegúrate de ajustar la ruta de tu imagen
import imagen3 from '../../imagenes/mesa de centro.jpg'; // Asegúrate de ajustar la ruta de tu imagen
import './carrusel.css';

const Carrusel = () => {
    return (
      <div className='carrusel'>
        <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="imagen"
            src={imagen1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imagen"
            src={imagen2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imagen"
            src={imagen3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
}

export default Carrusel;
