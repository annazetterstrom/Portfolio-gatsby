import React, { useState, useLayoutEffect } from "react"
import Project from "./project";
import { useTrail, animated } from 'react-spring'

let projects = [
  {
    project: "Kanye", 
    picture: "/kanye.jpg", 
    excerpt: "This is a website about Kanye West", 
    link: "https://focused-hodgkin-83d280.netlify.com/"
  },
  {
    project: "Webshop", 
    picture: "/webshop.png", 
    excerpt: "This is a webshop we created in our Javascript course", 
    link: "https://annazetterstrom.github.io/webshop/"
  },
  {
    project: "Frontend Project", 
    picture: "/frontend.png", 
    excerpt: "This is a website with tutorials in HTML, CSS, Javascript and Adobe XD", 
    link: "https://annazetterstrom.github.io/fend-tutorials/"
  },
]

export default () => {
  const [isVisible, setIsVisible] = useState(false)

  const trail = useTrail(projects.length, {
    from: {
      marginTop: -20,
      opacity: isVisible ? 0 : 1,
      transform: 'translate3d(0,-40px,0)'
    },
    to: {
      marginTop: 20,
      opacity: isVisible ? 1 : 0,
      transform: 'translate3d(0,0px,0)'
    }
  })

  useLayoutEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 600)
        setIsVisible(true) 
    }

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <div className="container">
      <div className="trails-main">
        <div>
          {trail.map((props, index) => (
            <animated.div
              key={index}
              className="trails-text"
              style={props}>
              <Project
                project= {projects[index].project}
                picture= {projects[index].picture}
                excerpt={projects[index].excerpt}
                link= {projects[index].link}
                key={'project'+index}
              />
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
} 
