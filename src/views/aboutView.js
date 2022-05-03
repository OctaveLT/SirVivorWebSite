import React from 'react'
import "../styles/about.css"

import OctaveImg from "../assets/octavePic.jpg";
import {GitHubIcon, LinkedInIcon} from "../assets/Icons"

export default function AboutView() {
  return (
    <div className='aboutContainer'>
        The Team
        <div>
            {teamMemberData.map(data =>
                <div className='content'>
                    <p>{data.name}</p>
                    <p>
                        <a className="social" href={data.githubURL} target="_blank" rel="noreferrer" title="Open GitHub profile"><GitHubIcon /></a>
                        <a className="social" href={data.linkedInURL} target="_blank" rel="noreferrer" title="Open LinkedIn profile"><LinkedInIcon /></a>
                    </p>
                    <img src={data.img} alt=""></img>
                </div>)
            }
        </div>
    </div>
  )
}

const teamMemberData = [{
        name: "Octave Le Tullier",
        img: OctaveImg,
        githubURL: "https://www.kth.se/",
        linkedInURL: "https://www.kth.se/",
    },
    {
        name: "Name",
        img: "",
        githubURL: "github",
        linkedInURL: "linkedin",
    },
    {
        name: "Name",
        img: "",
        githubURL: "github",
        linkedInURL: "linkedin",
    },
    {
        name: "Name",
        img: "",
        githubURL: "github",
        linkedInURL: "linkedin",
    },
    {
        name: "Name",
        img: "",
        githubURL: "github",
        linkedInURL: "linkedin",
    }
]