import React from "react";
import foto1 from '../../assets/images/conejo.jpg';
import foto2 from '../../assets/images/corazon.jpg';
import foto3 from '../../assets/images/oso.jpg';
import foto4 from '../../assets/images/perro.jpg'
import rana from '../../assets/carpeta/4.png'
import style from './Card.module.css'

const Card = () => {

    const fotos = [
        {
            url: foto1,
        },
        {
            url: foto2
        },
        {
            url: foto3
        },
        {
            url: foto4
        },
        {
            url: rana
        }

    ]

    return (
        <>
            <div className={style.contenedor}>
                {
                    fotos.map((item) => {
                        return (
                            <img src={item.url} alt="" className={style.card} />

                        )

                    })
                }
            </div>


        </>
    )
}


export default Card; 