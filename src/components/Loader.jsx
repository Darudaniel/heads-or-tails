import React from 'react'
import '../assets/styles/Loader.css'
import {Animated} from "react-animated-css";


const Loader = () => (
  <div className="loader">
    <Animated animationIn="rotateIn" animationInDuration="600" isVisible={true}>
      <div className="lds-circle">
        <div className="loader-child" >

        </div>
      </div>
    </Animated>
  </div>
  

)

export default Loader