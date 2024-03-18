import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-scroll';

const TypedComponent = () => {
  const typedElementRef = useRef(null);

  const imageAnimationProps = useSpring({
    opacity: 1,
    transform: 'translateX(0px) scale(1)',
    from: { opacity: 0, transform: 'translateX(-50rem) scale(0)' },
    config: { duration: 1000 },
  });

  const textAnimationProps = useSpring({
    opacity: 1,
    transform: 'translateX(0) rotate(0deg)',
    from: { opacity: 0, transform: 'translateX(50rem) rotate(5deg)' },
    config: { duration: 1000 },
  });

  useEffect(() => {
    const options = {
      strings: ['MERN Stack Developer', 'CodeIgniter Developer', 'PHP Developer', 'Full stack Web Developer'],
      typeSpeed: 50, // Typing speed in milliseconds
      backSpeed: 50, // Backspacing speed in milliseconds
      loop: true, // Loop strings
    };

    const typed = new Typed(typedElementRef.current, options);

    // Clean up
    return () => {
      typed.destroy();
    };
  }, []);

  const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    reset: true
  });
  sr.reveal('#home', { delay: 200, origin: 'left' });

  return (
    <div className="mt-5 md:mt-28 p-5" id='home'>
      <div className="sm:grid sm:grid-cols-2">
        <animated.div style={imageAnimationProps} className='mx-auto'>
          <img className='mx-auto w-50 sm:rounded-3xl sm:w-96' src="Karan_c.jpg" alt="" />
        </animated.div>
        <animated.div style={textAnimationProps} className='text-white mx-auto'>
          <h1 className='text-3xl sm:text-6xl ubuntu-medium text-justify'>Karan Vishwakarma</h1>
          <h2 className='lekton-bold text-sm sm:text-2xl'>I am <span className='text-white' ref={typedElementRef} /></h2>

          <div className="flex flex-row space-x-10 mt-10">
            <Link to="projects" smooth={true} duration={500} className="w-auto text-2xl hover:text-3xl transition-all duration-500 text-white"><i className="fa fa-github" aria-hidden="true"></i></Link>
            <Link to="projects" smooth={true} duration={500} className="w-auto text-2xl hover:text-3xl transition-all duration-500 text-blue-700"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
            <Link to="projects" smooth={true} duration={500} className="w-auto text-2xl hover:text-3xl transition-all duration-500 text-pink-700"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
            <Link to="projects" smooth={true} duration={500} className="w-auto text-2xl hover:text-3xl transition-all duration-500 text-white"><i className="fa fa-envelope" aria-hidden="true"></i></Link>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default TypedComponent;
