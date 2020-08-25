import React, { useState, useContext, useEffect } from "react";
import Styles from "./Arrow.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { StateContext } from "../statecontext/stateContext";

export default function Arrow() {
  const {filteredEntries, count, setCount}=useContext(StateContext);
  const [leftstate, setLeftState] = useState(Styles.hide)
  const [rightstate, setRightState] = useState(Styles.singlearrow)

 useEffect(()=>{
  setCount(1)
  setLeftState(Styles.hide)
  if ((Math.floor((filteredEntries.length)*0.1)+1)>1){setRightState(Styles.singlearrow)}
  else{setRightState(Styles.hide)}
 
 
 }, [filteredEntries])
 
 
  function left(e) {
    if (count > 1) {
      
      if (count===2){setLeftState(Styles.hide)}
      if(count<(Math.floor((filteredEntries.length)*0.1)+2)){setRightState(Styles.singlearrow)} 
      
      return setCount(count - 1);
    }
  }
  function right() {
    if (count < (Math.floor((filteredEntries.length)*0.1)+1)) {console.log(count)
      if(count===Math.floor((filteredEntries.length)*0.1)){setRightState(Styles.hide)} 
      if (count>0){setLeftState(Styles.singlearrow)}
      return setCount(count + 1);
    }
  }


  return (
    <div className={Styles.arrow}>
      <div className={leftstate}>
      <FontAwesomeIcon icon={faArrowLeft} size="lg" onClick={left} />
      </div>     
      <span>Page: {count}</span>
      <div className={rightstate}>
      <FontAwesomeIcon icon={faArrowRight} size="lg" onClick={right} />
      </div>
      
    </div>
  );
}
