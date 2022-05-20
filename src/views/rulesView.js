import React, { useState } from 'react'
import "../styles/rules.css"
import Slide1 from "../assets/capture1.png"
import Slide2 from "../assets/capture2.png"
import Slide3 from "../assets/capture2bis.png"

import { ArrowLeft, ArrowRight } from "../assets/Icons"

export default function RulesView() {

  const [index, setIndex] = useState(0);

  //const autoScrollingInterval = setInterval(slideRight, 5000);

  function slideRight() {
    setIndex((index + 1) % rulesData.length);
  };

  function slideLeft() {
    if (index < 1) {
      setIndex(rulesData.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  // To get a real index (positive and < images.lenght)
  function getIndex(index) {
    if (index < 0) return rulesData.length - 1
    if (index === rulesData.length) return 0
    return index
  }

  return (
    <div className='rulesContainer' id="rulesLink">
        <h2>Specificities</h2>
{/*         <div className='content'>
          {rulesData.map(rule => {
            return(
              <div className="card">
                <div className="cardSide cardSide--front">
                  <div className="cardDetails">
                    <p className='title'>{rule.name}</p>
                  </div>
                </div>
                <div className="cardSide cardSide--back">
                  <div className="cardDetails">
                    <p className='description'>{rule.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div> 
        <div className='content'>
          <img src={Slide1}></img>
          <img src={Slide1}></img>
          <img src={Slide1}></img>
          <img src={Slide1}></img>
          <img src={Slide1}></img>
        </div>   */}
        <div className='content'>
          
          <div>
            <img src={rulesData[getIndex(index + 1)].img} alt={getIndex(index + 1)} className="left"/>
            <div className='arrowContainer'><ArrowLeft onClick={slideLeft} className="arrow left"/></div>
          </div>
          <div>
            <h5>{rulesData[getIndex(index)].name}</h5>
            <img src={rulesData[getIndex(index)].img} alt={getIndex(index)} />
            <p>{rulesData[getIndex(index)].description}</p>
          </div>  
          <div>
          <img src={rulesData[getIndex(index - 1)].img} alt={getIndex(index - 1)} className="right"/>
          <div className='arrowContainer'><ArrowRight onClick={slideRight} className="arrow right"/></div>
          </div>    
        </div>    
    </div>

  )
}

const rulesData = [
  {
    name: "Resources",
    description: "Collect some resources and combine them to attack.",
    img: Slide1
  },
  {
    name: "Design",
    description: "Discover a low-poly world in a cartoonish universe.",
    img: Slide2
  },
  {
    name: "Genre",
    description: "Enjoy a roguelike game like no-one.",
    img: Slide3
  },
  {
    name: "Survive",
    description: "Survive the longer you can through waves of enemies!",
    img: Slide1
  },
  {
    name: "Abilities",
    description: "Acquire abilities by completing levels.",
    img: Slide2
  },
  {
    name: "Defeat enemies",
    description: "Waves of various monsters that get stronger!",
    img: Slide3
  }
]