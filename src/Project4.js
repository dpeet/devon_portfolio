import React from 'react'
import animationgallery1 from './assets/animationgallery1.png'

const Project4 = () => (
  <div className="ProjectContainer">
    <div className="ProjectTitle">Salesforce Animation Page Redesign</div>
    <div className="ProjectMainText">Designing a new place for Animations to live on the Lightning Design System</div>
    <img className="ProjectImage MediumCenteredImage" src={animationgallery1} alt=""/>
    <div className="ProjectImageSubtitle">The website is live at <a className="ProjectBodyLink" href="https://www.lightningdesignsystem.com/guidelines/animation/gallery">here</a> as of September 2017!</div>
    <div className="ProjectTextHeading">The Internship</div>
    <div className="ProjectMainText">I spent the summer of 2017 with Salesforce and there is no doubt it was time well spent! I specifically chose the UX Prototyping team for the opportunity to work on the full design process: researching, designing, and engineering the final product.</div>
    <div className="ProjectTextHeading">The Problem</div>
    <div className="ProjectMainText">The internship started out, as most do, with the problem. Salesforce had been starting to implement animations into its products, but my team didn't have a centralized place to look for them. My project was to research what designers and developers would look for in such a space (and where it should be), go through several design iterations, and implement it in React.</div>
    <div className="ProjectTextHeading">Research</div>
    <div className="ProjectMainText">I began by conducting guerrilla research with my team, heading down to the Salesforce coffee shop and offering donuts in return for a quick survey. I was pleasantly surprised with how successful it was and how much information I could get from it. Afterwards, it was clear that the Lightning Design System website was the place for this gallery to live. We originally started with the term "Motion" but, due to the results of the survey, moved towards “Animation”, which was more all-encompassing and had less negative connotations for our demographic. Our research told us that our developers wanted code, so I kept that in mind as I designed.</div>
    <div className="ProjectTextHeading">Design</div>
    <div className="ProjectMainText">My design started on a whiteboard as I worked with my manager through the major required parts. As I felt comfortable with the low fidelity prototype, I moved to Sketch to create a higher quality mockup. After my first design crit, I realized that I needed to invert my original design and move to a different platform. I chose Adobe XD because it allowed me to design similarly to Sketch and then share a link to my coworkers for testing. This was invaluable moving forward and I made several more iterations as I gathered feedback from my coworkers and other designers.</div>
    <div className="ProjectTextHeading">Development</div>
    <div className="ProjectMainText">After settling on a final design, it was time to implement it with React. I took advantage of create-react-app to maximize my time coding. This was my first time with React, but thanks to the tireless mentorship from my coworkers, I quickly developed the prototype and implemented all the features discussed in my design crits. Next, I presented it to my accessibility specialist and asked for his feedback. Crisis! He didn't understand the layout, which made sense to my coworkers who had iterated with me, but not to fresh eyes. I'm extremely grateful for his candid feedback, because I could develop a new iteration that had a much clearer hierarchy. After approving the new design with my manager, I worked with the UX Engineers on the Lightning Design System team to port my code to their website. Thanks to the solid foundations I had, I submitted a pull request with the new subpage and had it accepted and deployed internally before I completed my internship.</div>
    <div className="ProjectTextHeading">Reflections</div>
    <div className="ProjectMainText">The summer was extremely valuable to me and my career development. My manager did a great job giving me a hard design problem and allowing me to work hard and struggle to tackle it. I saw how valuable research and feedback were in action, as they entirely changed the design of my project.</div>



  </div>
);

export default Project4
