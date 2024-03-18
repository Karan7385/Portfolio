import React from 'react';
import { useSpring, animated, config } from 'react-spring';

export default function About() {
  const aboutAnimationProps = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(5rem)' },
    config: config.slow,
  });

  const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    reset: true
  });
  sr.reveal('#about', { delay: 200, origin: 'bottom' });

  return (
    <>
      <animated.div style={aboutAnimationProps} className="text-white mt-16" id="about">
        <h1 className="text-center text-5xl sm:text-6xl">
          <b>
            <i className="fa fa-grav" aria-hidden="true"></i> About Me
          </b>
        </h1>
        <div className="mt-10 mx-5 sm:mx-40">
          <p className="text-justify text-lg">
            <i className="fa fa-check-square text-orange-400" aria-hidden="true"></i>{' '}
            <b>Greetings!</b> I am <i>"Karan Vishwakarma"</i>, currently pursuing a{' '}
            <i>
              B.E. in Computer Engineering from "Fr. Conceicao Rodrigues College Of Engineering, Bandra
              (Mumbai)"
            </i>
            . <br />
            <br />
            <i className="fa fa-check-square text-orange-400" aria-hidden="true"></i> Driven by a passion
            for technology and innovation, I have crafted this portfolio to exhibit my proficiency in the
            field of development. With a focus on continuous learning and growth, I maintained a commendable{' '}
            <i>"GPA of 8.15"</i>. <br />
            <br />
            <i className="fa fa-check-square text-orange-400" aria-hidden="true"></i> Beyond academic
            pursuits, I am deeply engrossed in exploring cutting-edge development technologies and consider
            myself an ardent enthusiast of <i>"Artificial Intelligence and Machine Learning"</i>. <br />
            <br />
            <i className="fa fa-check-square text-orange-400" aria-hidden="true"></i> In addition to my
            academic endeavors, I am currently leveraging my skills as a freelancer in web development,
            further honing my abilities and gaining practical experience in the industry.
          </p>
        </div>
      </animated.div>
    </>
  );
}
