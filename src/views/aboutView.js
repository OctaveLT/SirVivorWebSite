import React from 'react'
import "../styles/about.css"

import BenImg from "../assets/benPic.png";
import HaritsImg from "../assets/haritsPic.jpg";
import LisaImg from "../assets/lisaPic.jpeg";
import OctaveImg from "../assets/octavePic.jpg";
import QinbaiImg from "../assets/qinbaiPic.jpg";

import {GitHubIcon, LinkedInIcon} from "../assets/Icons"

export default function AboutView() {
  return (
    <div className='aboutContainer' id="aboutLink">
        <h2>The Team</h2>
        <div>
            {teamMemberData.map(data =>
                <div className='content'>
                    <p>{data.name}</p>
                    <p>
                        <a className="social" href={data.githubURL} target="_blank" rel="noreferrer" title="Open GitHub profile"><GitHubIcon /></a>
                        {data.linkedInURL && <a className="social" href={data.linkedInURL} target="_blank" rel="noreferrer" title="Open LinkedIn profile"><LinkedInIcon /></a>}
                    </p>
                    <img src={data.img} alt=""></img>
                </div>)
            }
        </div>
    </div>
  )
}

const teamMemberData = [
    {
        name: "Benjamin Esdor",
        img: BenImg,
        githubURL: "https://github.com/Thelarion",
        linkedInURL: "https://www.linkedin.com/in/benjamin-esdor/",
    },
    {
        name: "Harits Nur Fauzan",
        img: HaritsImg,
        githubURL: "https://github.com/mharitsnf",
        linkedInURL: "https://www.linkedin.com/in/mharitsnf",
    },
    {
        name: "Lisa Balzar",
        img: LisaImg,
        githubURL: "https://github.com/lisabalzar",
        linkedInURL: "https://www.linkedin.com/in/lisabalzar/",
    },
    {
        name: "Octave Le Tullier",
        img: OctaveImg,
        githubURL: "https://www.kth.se/",
        linkedInURL: "https://www.linkedin.com/in/octave-le-tullier-10b9141b3",
    },
    {
        name: "Qinbai",
        img: QinbaiImg,
        githubURL: "https://github.com/Lonerangerix",
        linkedInURL: undefined,
    }
]