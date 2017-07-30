import React from 'react'
import dndimage1 from './assets/dndimage1.png'
import dndimage2 from './assets/dndimage2.jpg'
import dndimage3 from './assets/dndimage3.png'
import dndimage4 from './assets/dndimage4.png'
import dndimage5 from './assets/dndimage5.png'
import dndimage6 from './assets/dndimage6.jpg'



const Project1 = () => (
  <div className="Project1Container">
    <h1 className="ProjectTitle">DUNGEONS AND DRAGONS DIGITAL DICE TOWER</h1>  
    <p className="ProjectSubtitle">Augmenting a traditional tabletop RPG with a digital interface</p>
    <div className="ProjectMainText">Diving in to another project revolving around game design, this semester I worked on bringing digital enhancements to Dungeons and Dragons, building an augmented dice tower.</div>
    <img className="ProjectImage" src={dndimage1} alt=""/>
    <div className="ProjectMainText">If you aren’t familiar with Dungeons and Dragons (D&D), here’s a quick recap.  It is a tabletop Role Playing Game, usually played with around 5 players.  One person is the Dungeon Master, and this person oversees the game.  The players each develop a character as their avatar in the game.  Each character has a set of stats (such as strength and dexterity), and these numbers are used to determine how successful the players’ characters are at certain actions.  For example, a player might say “I try to break down the front door” and the Dungeon Master will ask for a Strength Check.  The interactions of the game are primarily arbitrated by dice rolls, predominately a 20-sided die known as a d20.  In the previous example, the player would roll a d20 and add their strength modifier, and the Dungeon Master (DM) would decide to what degree the player’s action was successful based on the context of the situation.  Combat in D&D is even more structured, following the popular turn based format.  Each person will usually make several dice rolls on their turn based on the weapon or spell they choose.</div>
    <div className="ProjectMainText">If this all sounds complicated, that’s because it is!  The Player Handbook describing the rules is approximately 200 pages long, and there are separate guides for the Dungeon Master and about the monsters you might encounter.  With this range of complexity, my partner Todd and I looked for an opportunity to ease a headache of the game, while remaining true to its spirit. </div>
    <img className="ProjectImage" src={dndimage2} alt=""/>
    <div className="ProjectMainText">Through our research, we developed several constraints while uncovering pain points.  First players generally told us that one of the major draws of D&D is its aspect of escapism – role playing as a hero was their way of winding down after their work week.  The players mentioned that traditional tools such as pen and paper felt as if they were a part of the ethos of the game, whereas in general digital tools felt antithetical.  That said, we noticed that those same players would use apps on their phone to manage spells and more than one would use a laptop and OneNote to keep track of the quest lines and general knowledge.  Of course, this is also just the general sentiment.  Some players seemed much more open to using anything and everything to keep track of all the details, while others more stubbornly clung to traditional techniques.  One thing all players we observed and interviewed agreed on was the desire to roll physical design instead of a random number generator or even physically accurate digital dice on a dice rolling app.  This physical dice seemed to give the players a sense of agency and control over the randomness of the roll and therefore their actions in the game. </div>
    <div className="ProjectMainText">One major conclusion we can make is that players greatly enjoy the tactile experience of interacting with the physical environment and the game.  This can come in the form of dice, character sheets, miniatures or more.  In general, the players will choose a tactile interface over a GUI based interface unless the task is complex, or if the player is used to solving the problem in a digital way. </div>
    <div className="ProjectMainText">During our interviews, we noticed that one area that all the players (and many of the dungeon masters!) had issues with was dice math.  This occurred mostly in the combat phase of the game, when players would have to hunt through their character sheet to figure out what options were available to them, figure out what to roll and add all the dice up to come to their conclusion.  Putting aside silly difficulties with basic math, the process was rife with error, slowing the pace of the game, and very few people had anything positive to say about the experience.  This is the area of the game we chose to zero in on.</div>
    <div className="ProjectMainText">Our solution to this problem was to design a digital dice tower, a device that allowed players to see the options available to them, choose one, roll the dice, and then have the resulting roll calculated and displayed for them.  I designed and constructed the dice tower and the app, while my partner coded the app.</div>
    <img className="ProjectImage" src={dndimage3} alt=""/>
    <img className="ProjectImage" src={dndimage4} alt=""/>
    <div className="ProjectMainText">The final design uses a Raspberry Pi, Pi Touchscreen, and Pi camera.  The players interact with the Touchscreen and the tower itself, dropping their dice in.  The camera looks at the playing surface and reads the dice, displaying the resulting dice math for the player.  Roughly, the algorithm looks for the white squares of the dice, then within the white squares looks for the round circles (or pips).  The app takes the information from the player’s character sheet and uses it to calculate the bonuses and modifiers that the player’s use during the game. </div>
    <div className="ProjectMainText">We were able to demo the working dice tower to our class and get some feedback from our classmates.  In general, it was well received!  For future work, we want to expand the image recognition to dice with numbers/text instead of pips, as well add the ability for the Dungeon Master to track enemies in combat as well.</div>
    <img className="ProjectImage" src={dndimage5} alt=""/>
    <img className="ProjectImage" src={dndimage6} alt=""/>
  </div>
)

export default Project1
