import React from 'react'
import hvzimage1 from './assets/hvz.png'
import hvzimage2 from './assets/hvzimage2.png'
import hvzimage3 from './assets/hvzimage3.png'
import hvzimage4 from './assets/hvzimage4.png'
import hvzimage5 from './assets/hvzimage5.png'
import hvzimage6 from './assets/hvzimage6.png'
import hvzimage7 from './assets/hvzimage7.png'
import hvzimage8 from './assets/hvzimage8.png'




const Project2 = () => (
  <div className="ProjectContainer">
    <h1 className="ProjectTitle">Mass Spatial Gaming (Humans Vs Zombies)</h1>
    <p className="ProjectSubtitle">Study to improve the HvZ experience through User Centered Design research and methods.</p>
    <img className="ProjectImage" src={hvzimage1} alt=""/>
    <div className="ProjectImageSubtitle">Brainssssssss............</div>
    <div className="ProjectTextHeading">OVERVIEW</div>
    <div className="ProjectMainText">In Intro to HCI our class formed teams of 4 tasked with finding a problem space within the theme "Connected Campus."  Our project chose to explore a set of games we termed "Mass Spatial Games" referring to their in person gameplay over a large spatial area.  We specifically focused on a week-long variant of tag called Humans vs Zombies.  We first researched the game itself, then developed designs to help increase players' immersion, ultimately building a prototype that we tested with a mini-game on campus to gather feedback</div>
    <img className="ProjectImage" src={hvzimage2} alt=""/>
    <div className="ProjectMainText">Humans vs Zombies (HvZ) is a campus wide game of tag played over the course of a week.  Each game has a slightly different backstory, but all follow the same thread of a viral outbreak affecting humanity.  All players start out as humans, as denoted by a yellow bandanna on their arm, except for one who is infected.  As they tag other players, the infection spreads.  The humans, armed with socks and marshmallow guns, stun zombies and complete missions throughout the week to try and survive until the finale, in which they have one final mission to escape the infection!  </div>
    <div className="ProjectMainText">In our group of four, I was the only person who had played HvZ before, so to the group HvZ was relatively unknown.  Our main task was to find a problem in the space we identified using a User Centered Design approach, and that means our first step was user research.</div>
    <img className="ProjectImage" src={hvzimage3} alt=""/>
    <div className="ProjectImageSubtitle">Everything is normal... just a normal person leaning against a pole...</div>
    <div className="ProjectTextHeading">RESEARCH</div>
    <div className="ProjectMainText">To get a better sense of the space we were researching, we started by interviewing 5 game "admins" - these people are in charge of running the game.  The interviews were semi-structured meaning we had a set of questions to start with, but were focused on exploring the space and learning as much as we can.  We took the insights from all the interviews and collected our thoughts in an Affinity Diagram</div>
    <img className="ProjectImage" src={hvzimage4} alt=""/>
    <div className="ProjectMainText">Diagramming surfaced several interesting insights.  We found we originally assumed that all players would play both sides of the game as intended: instead we found that some players would "rage quit" once tagged, or "suicide" in the beginning of the game to become zombies earlier.  Stress is a major factor of the game and careful management of stress is key to a successful experience.  Finally the admins expressed that the tagging interaction was sub-optimal and had room for improvement.  Armed with this information, we got ready to play the game itself.</div>
    <img className="ProjectImage" src={hvzimage5} alt=""/>
    <div className="ProjectImageSubtitle">One brave researcher armed and ready!</div>
    <div className="ProjectMainText">For the game week itself, we chose to use as many methods as possible to gather data about the game.  Two of our researchers volunteered to ethnographically study the game by playing it themselves.  One was tagged the first day, while the other made it to Thursday, giving us a pretty good sense of both sides as the evolved.  In addition to ethnography, we deployed a pre-game and post-game survey, as well as a diary study which yielded amazing quotes among other things: see the personas.  Additionally myself and another research conducted interviews and observed players interactions during the week.   At then end we had a mountain of data which led us to our second affinity mapping to make sense of it all.</div>
    <img className="ProjectImage" src={hvzimage6} alt=""/>
    <div className="ProjectTextHeading">DESIGN</div>
    <div className="ProjectMainText">After getting a sense of what themes had emerged, we individually generated approximately 10 unique ideas that we then shared with each other and brainstormed with.  The process led us to filter the themes down to four major categories: Audience Participation, Communication Wearable, Stun Tracker, and Location Control.  We presented posters with these four concepts to our class mates, and with their feedback chose to move forward with the Stun Tracker, coupled with elements of Location Control.  </div>
    <img className="ProjectImage" src={hvzimage7} alt=""/>    
    <div className="ProjectMainText">Our final design was manufactured out of laser cut cardboard.  The interface was written in Python and run on a Raspberry Pi (and Pi Display), while the notification lights are handled by an attached Arduino.  We used a coin collector to accept quarters as our "stun coins" and used a basic RFID reader under one of the cardboard panels to get the Player's ID.  The LEDs provided visual feedback that the system was working and responding, while also pulsing to indicate whether the station was controlled by the Humans or the Zombies.  When we tested the system with users we were met with overwhelmingly positive feedback.  We hope this project is implemented in some way in future HvZ games!</div>
    <img className="ProjectImage" src={hvzimage8} alt=""/>
  
    <div className="ProjectMainText"></div>
    <div className="ProjectMainText"></div>
    <div className="ProjectMainText"></div>
    
    <div className="ProjectMainText"></div>

    
  </div>
)

export default Project2
