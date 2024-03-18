import React from 'react';
import Slider from 'react-slick';
import { useSpring, animated } from 'react-spring'; // Import animated from react-spring
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Skillset from './Skillset';

export default function Skills() {
  const slideAnimationProps = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: { duration: 1000 },
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    reset: true
  });
  sr.reveal('#skills', { delay: 200, origin: 'left' });

  return (
    <animated.div style={slideAnimationProps} className="mt-20 md:mt-28 text-white" id='skills'>
      <h1 className="text-center text-5xl">
        <b><i className="fa fa-diamond" aria-hidden="true"></i> Skills</b>
      </h1>

      <Slider {...settings} className="mx-10 sm:mx-40 mt-10">
        <Skillset imgurl={"html5.webp"} />
        <Skillset imgurl={"css3.webp"} />
        <Skillset imgurl={"bootstrap5.jpg"} />
        <Skillset imgurl={"tailwindcss.jpg"} />
        <Skillset imgurl={"javascript.webp"} />
        <Skillset imgurl={"jQuery.png"} />
        <Skillset imgurl={"php.jpg"} />
        <Skillset imgurl={"codeIgniter.jpg"} />
        <Skillset imgurl={"mongodb.png"} />
        <Skillset imgurl={"express.png"} />
        <Skillset imgurl={"reactjs.jpg"} />
        <Skillset imgurl={"nodejs.png"} />
        <Skillset imgurl={"c.png"} />
        <Skillset imgurl={"java.png"} />
        <Skillset imgurl={"python.webp"} />
      </Slider>
    </animated.div>
  );
}
