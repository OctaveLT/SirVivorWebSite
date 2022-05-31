import React from 'react'
import "../styles/about.css"

import BenImg from "../assets/pics/benPic.png";
import HaritsImg from "../assets/pics/haritsPic.jpg";
import LisaImg from "../assets/pics/lisaPic.jpeg";
import OctaveImg from "../assets/pics/octavePic.jpg";
import QinbaiImg from "../assets/pics/qinbaiPic.jpg";

import {GitHubIcon, LinkedInIcon} from "../assets/Icons"

export default function AboutView() {
  return (
    <div className='aboutContainer' id="aboutLink">
        <h2>The Team</h2>
        <div>
            {teamMemberData.map((data, i) =>
                <div className='content' key={"member" + i}>
                    <img src={data.img} alt=""></img>
                    <p>{data.name}</p>
                    <p>
                        <a className="social" href={data.githubURL} target="_blank" rel="noreferrer" title="Open GitHub profile"><GitHubIcon /></a>
                        {data.linkedInURL && <a className="social" href={data.linkedInURL} target="_blank" rel="noreferrer" title="Open LinkedIn profile"><LinkedInIcon /></a>}
                    </p>  
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
        githubURL: "https://github.com/OctaveLT",
        linkedInURL: "https://www.linkedin.com/in/octave-le-tullier-10b9141b3",
    },
    {
        name: "Qinbai",
        img: QinbaiImg,
        githubURL: "https://github.com/Lonerangerix",
        linkedInURL: undefined,
    }
]