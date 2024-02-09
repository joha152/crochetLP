import React, {useEffect, useRef, useState} from "react";
import foto1 from '../../assets/carpeta/1.png';
import foto2 from '../../assets/carpeta/2.png';
import foto3 from '../../assets/carpeta/3.png' ;
import foto4 from '../../assets/carpeta/4.png';
import foto5 from '../../assets/carpeta/5.png';
import foto6 from '../../assets/carpeta/6.png'
import style from './Galeria.module.css'

const Galeria = () => {

    const listRef = useRef();

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll(" li > img")[currentIndex]

        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: "smooth"
            })

        }
    }, [currentIndex])

    const fotos = [
        {
            id: 1,
            img: foto1
        },
        {
            id: 2,
            img: foto2
        },
        {
            id: 3,
            img: foto3
        },
        {
            id: 4,
            img: foto4
        },
        {
            id: 5,
            img: foto5
        },
        {
            id: 6,
            img: foto6
        }
    ]

    const scrollToImage = (direction) => {
        if (direction === "prev") {
            setCurrentIndex(curr => {
                const firtsSlide = currentIndex === 0;
                return firtsSlide ? 0 : curr - 1
            })
        } else {
            const lastSlide = currentIndex === fotos.length - 1;
            if (!lastSlide) {
                setCurrentIndex(curr => curr + 1);
            }
        }
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <>
            <div className={style.mainConteiner}>
                <div className={style.sliderConteiner}>
                    <div className={style.leftArrow} onClick={() => scrollToImage('prev')}>&#10092;</div>
                    <div className={style.rightArrow} onClick={() => scrollToImage('next')}>&#10093;</div>
                    <div className={style.conteinerImages}>
                        <ul ref={listRef}>

                            {
                                fotos.map((item) => {
                                    return <li key={item.id}>
                                        <img src={item.img} alt="" width={500} height={300}/>
                                    </li>
                                })
                            }

                        </ul>
                    </div>
                    <div className={style.dotsConteiner}>
                        {
                            fotos.map((_, index) => (
                                <div key={index} className={`${style.dotItem} ${index === currentIndex ? style.active : ""}`}

                                    onClick={() => goToSlide(index)}>
                                    &#9865;
                                </div>))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Galeria