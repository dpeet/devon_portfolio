import React from 'react'
import jeteditlogo from './assets/jeteditlogo.png'

const Project3 = () => (
  <div className="ProjectContainer">
    <h1 className="ProjectTitle">JetEdit - MSHCI Project</h1>
    <p className="ProjectSubtitle">Using computing to dramatically decrease editing time</p>
    <img className="ProjectImage LargeCenteredImage" src={jeteditlogo} alt=""/>
    <div className="ProjectMainText">Our app is designed to exponentially accelerate the time it takes filmmakers to go from shooting footage to a rough cut by leveraging their impressions of the take while filming, and using that to generate a rough cut near instantly. </div>
    <div className="ProjectTextHeading">The Old Workflow </div>
    <ul>
      <div>Film on location</div>
      <div>Review all or most of footage
        <ul>
          <div>Sort into scenes, shots, etc.</div>
          <div>Sort into good takes and bad takes</div>
        </ul>
      </div>
      <div>Import good takes into editing program</div>
      <div>Crop and place all good takes onto the timedivne</div>
      <div>Watch rough cut</div>
    </ul>
    <div className="ProjectMainText">This entire process takes at least as much time after filming as there was footage, and usually much longer than that as sorting is required.</div>
    <div className="ProjectTextHeading">The New Workflow </div>
    <ul>
      <div>Film on location
        <ul>
          <div>Record semantic data with app (when take starts/stops, whether take was good/maybe/bad)</div>
        </ul>
      </div>
      <div>At any time export data
        <ul>
          <div>Import data and footage</div>
          <div>Generate project</div>
        </ul>
      </div>
      <div>Watch rough cut</div>
    </ul>
  </div>
);

export default Project3
