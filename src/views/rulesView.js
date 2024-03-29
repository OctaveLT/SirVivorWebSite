import React, { useState } from 'react'
import "../styles/rules.css"
import ResourcesSlide from "../assets/slides/resources_slide.png"
import PowerUpSlide from "../assets/slides/powerup_slide.png"
import SurviveSlide from "../assets/slides/survive_slide.png"
import WaveSlide from "../assets/slides/wave_slide.png"
import ShopSlide from "../assets/slides/shop_slide.png"
import DesignSlide from "../assets/slides/design_slide.png"


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
        {/* <h2>Features</h2> */}
        <p>So, become a hero, <strong>collect</strong> and manage resources, and <strong>combine</strong> them to fight enemies in order to <strong>survive</strong> and protect your kingdom!</p>
        <div className='content'>          
          <div>
            {/* <img src={rulesData[getIndex(index + 1)].img} alt={getIndex(index + 1)} className="left"/> */}
            <div className='arrowContainer'><ArrowLeft onClick={slideLeft} className="arrow left"/></div>
          </div>
          <div className='slideContainer'>
            <h3>{rulesData[getIndex(index)].name}</h3>
            <img src={rulesData[getIndex(index)].img} alt={getIndex(index)} />
            <p>{rulesData[getIndex(index)].description}</p>
          </div>  
          <div>
          {/* <img src={rulesData[getIndex(index - 1)].img} alt={getIndex(index - 1)} className="right"/> */}
          <div className='arrowContainer'><ArrowRight onClick={slideRight} className="arrow right"/></div>
          </div>    
        </div>    
    </div>

  )
}

const rulesData = [
  {
    name: "Resources",
    description: "Collect resources and combine them to perform different attacks.",
    img: ResourcesSlide
  },
  {
    name: "Design",
    description: "Discover a low-poly world in a cartoonish universe.",
    img: DesignSlide
  },
  {
    name: "Survive",
    description: "Survive as long as you can through waves of enemies!",
    img: SurviveSlide
  },
  {
    name: "Power ups",
    description: "Acquire new abilities through power ups by surviving the waves of enemies.",
    img: PowerUpSlide
  },
  {
    name: "Defeat enemies",
    description: "The waves of various monsters get stronger as the game progresses!",
    img: WaveSlide
  },
  {
    name: "Marketplace",
    description: "Buy weapons and packs from merchants at the marketplace in the castle grounds between battles.",
    img: ShopSlide
  }
]