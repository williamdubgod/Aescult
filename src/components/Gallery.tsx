import React from 'react';
import coquetel1 from '../assets/coquetel1.jpg'
import coquetel2 from '../assets/coquetel2.jpg'
import coquetel3 from '../assets/coquetel3.jpg'
import coquetel4 from '../assets/coquetel4.jpg'
import coquetel5 from '../assets/coquetel5.jpg'
import coquetel6 from '../assets/coquetel6.jpg'
import coquetel7 from '../assets/coquetel7.jpg'
import coquetel8 from '../assets/coquetel8.jpg'
import times1 from '../../src/assets/times1.jpg'
import times2 from '../../src/assets/times2.jpg'
import times3 from '../../src/assets/times3.jpg'
import times4 from '../../src/assets/times4.jpg'
import times5 from '../../src/assets/times5.jpg'
import times6 from '../../src/assets/times6.jpg'
import times7 from '../../src/assets/times7.jpg'
import times8 from '../../src/assets/times8.jpg'
import times9 from '../../src/assets/times9.jpg'
import times10 from '../../src/assets/times10.jpg'
import times11 from '../../src/assets/times11.jpg'
import times12 from '../../src/assets/times12.jpg'
import times13 from '../../src/assets/times13.jpg'
import times14 from '../../src/assets/times14.jpg'
import times15 from '../../src/assets/times15.jpg'
import times16 from '../../src/assets/times16.jpg'
import times17 from '../../src/assets/times17.jpg'
import arbitros from '../../src/assets/arbitros.jpg'
import jogo from '../../src/assets/jogo.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [
  coquetel1, 
  coquetel2, 
  coquetel3, 
  coquetel4, 
  coquetel5, 
  coquetel6, 
  coquetel7, 
  coquetel8,
  jogo,
  times1,
  times2,
  times3,
  times4,
  times5,
  times6,
  times7, 
  times8,
  times9,
  times10,
  times11,
  times12,
  times13,      
  times14,
  times15,
  times16,
  times17,
  arbitros,
];

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 255, 0.5)", // Fundo azul translúcido
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        zIndex: 2,
        cursor: "pointer"
      }}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 255, 0.5)", // Fundo azul translúcido
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        position: "absolute",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)",
        zIndex: 2,
        cursor: "pointer"
      }}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
};

export default function Gallery() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const handleImageClick = (image: string) => {
    const newWindow = window.open(image, '_blank');
    if (newWindow) newWindow.focus();
  };

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#1A2B5F] mb-12">Galeria de Fotos</h2>
        
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative px-2">
              <img 
                src={image} 
                alt={`Galeria AESCULT ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-md cursor-pointer"
                onClick={() => handleImageClick(image)}
              />
              <a 
                href={image} 
                download={`Galeria_AESCULT_${index + 1}.jpg`} 
                className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16h16V4H4zm4 4h8m-4 4v4m0 0l-2-2m2 2l2-2" />
                </svg>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}