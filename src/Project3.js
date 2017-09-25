import React from 'react'
import jeteditlogo from './assets/jeteditlogo.png'

const Project3 = () => (
  <div className="ProjectContainer">
    <div className="ProjectTitle">JetEdit - MSHCI Project</div>
    <p className="ProjectSubtitle">Using computing to dramatically decrease editing time</p>
    <img className="ProjectImage LargeCenteredImage" src={jeteditlogo} alt=""/>
    <div className="ProjectMainText">Our app is designed to exponentially accelerate the time it takes filmmakers to go from shooting footage to a rough cut by leveraging their impressions of the take while filming, and using that to generate a rough cut near instantly. </div>
    <div className="ProjectTextHeading">The Old Workflow </div>
    <div className="ProjectMainText">
      <ul className="ProjectList">
        <li>Film on location</li>
        <li>Review all or most of footage
          <ul>
            <li>Sort into scenes, shots, etc.</li>
            <li>Sort into good takes and bad takes</li>
          </ul>
        </li>
        <li>Import good takes into editing program</li>
        <li>Crop and place all good takes onto the timeline</li>
        <li>Watch rough cut</li>
      </ul>
    </div>
    <div className="ProjectMainText">This entire process takes at least as much time after filming as there was footage, and usually much longer than that as sorting is required.</div>
    <div className="ProjectTextHeading">The New Workflow </div>
    <div className="ProjectMainText">
      <ul className="ProjectList">
        <li>Film on location
          <ul>
            <li>Record semantic data with app (when take starts/stops, whether take was good/maybe/bad)</li>
          </ul>
        </li>
        <li>At any time export data
          <ul>
            <li>Import data and footage</li>
            <li>Generate project</li>
          </ul>
        </li>
        <li>Watch rough cut</li>
      </ul>
    </div>
  </div>
);

export default Project3
