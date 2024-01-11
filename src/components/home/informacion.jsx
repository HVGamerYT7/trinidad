import React from 'react'
import "./informacion.css"
import festivalv from "../../imagenes/festival de viña.jpg"
import museo from "../../imagenes/palacio vergara.jpg"

const Infomacion = () => {
  return (
    <>
        <ul className='primeraFila'>
            <div className='texto1'>
                    <h3>Eventos Cercanos</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod error fuga dolorum atque laudantium a excepturi corrupti, similique incidunt natus iure dolore, suscipit facere quas quos veritatis reiciendis ipsam odio.</p>
            </div>
            <div className='imagen1'>
                    <img src={festivalv} alt='imagen1' />
            </div>
        </ul>
        <ul className='segundaFila'>
            <div className='imagen2'>
                <img src={museo} alt='imagen2' />
            </div>
            <div className='texto2'>
                    <h3>Cultura</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo error minus fuga iste sint fugit, sed asperiores animi, dolorem fugiat reiciendis iusto? Numquam temporibus delectus nisi ea nulla, tenetur culpa?</p>
            </div>
        </ul>
    </>
  )
}

export default Infomacion