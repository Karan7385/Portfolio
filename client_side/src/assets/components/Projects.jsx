import React from 'react';
import Cards from './Cards';
import { useSpring, animated } from 'react-spring';

export default function Projects() {
  const slideAnimationProps = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: { duration: 1000 },
  });

  const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    reset: true
  });
  sr.reveal('#projects', { delay: 200, origin: 'top' });

  return (
    <animated.div style={slideAnimationProps} className="mt-20 text-white" id="projects">
      <h1 className="text-center text-5xl"><b><i className="fa fa-bolt" aria-hidden="true"></i> Projects</b></h1>
      <div className="grid lg:grid-cols-3 gap-10 mt-20">
        <Cards link={"https://evangelinedaniel.com/project1"} imgUrl={"Gazetter.png"} title={"Gazetteer"} content={"<i>Gazetteer</i> is web based location which gives basic information."}/>
        <Cards link={"https://webpst.com.au/Proposal/dashboard"} imgUrl={"dispatcherDart.png"} title={"Dispatcher Dart"} content={"<i>Dispatcher Dart</i> is automatic mail sender application to particular customer."}/>
        <Cards link={"https://webproconnect.com.au/meat_on_james/Dashboard"} imgUrl={"moj.png"} title={"Admin Panel for e-Commerce website"} content={"This admin panel is for <i>Australian</i> based e-Commerce website which generates and order summary and other information also it has order form also."}/>
        <Cards link={"https://rajfilmproductionhouse.com/"} imgUrl={"rajfilmproductionhouse.png"} title={"Raj Film Production House"} content={"This is an blog website for <i>Raj Film Production House</i> in which they simply showcase their shows and details."}/>
      </div>
    </animated.div>
  );
}
