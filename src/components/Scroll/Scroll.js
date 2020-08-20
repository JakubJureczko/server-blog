import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import './Scroll.css';


const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScroll = () => {
    if (!showScroll && window.pageYOffset > 100){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 100){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScroll)

  return (
        <FontAwesomeIcon icon={faArrowUp} size='lg' className="scrollTop" onClick={scrollTop} style={{height: 60, display: showScroll ? 'flex' : 'none'}}/>
  );
}

export default ScrollArrow;