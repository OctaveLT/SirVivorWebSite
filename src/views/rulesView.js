import React from 'react'
import "../styles/rules.css"

export default function RulesView() {
  return (
    <div className='rulesContainer'>
        Rules/Pitch?
        <div className='content'>
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
    </div>

  )
}

const rulesData = [
  {
    name: "Resources",
    description: "Collect some resources and combine them to attack"
  },
  {
    name: "Resources",
    description: "Collect some resources and combine them to attack"
  },
  {
    name: "Resources",
    description: "Collect some resources and combine them to attack"
  },
  {
    name: "Resources",
    description: "Collect some resources and combine them to attack"
  },
  {
    name: "Resources",
    description: "Collect some resources and combine them to attack"
  },
  {
    name: "Resources",
    description: "Collect some resources and combine them to attack"
  },
  {
    name: "Resources",
    description: "Collect some resources and combine them to attack"
  },
  {
    name: "Resources",
    description: "Collect some resources and combine them to attack"
  }
]