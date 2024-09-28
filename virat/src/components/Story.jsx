import React from "react";
import './Story.css'
import lungi from "../assets/lungi.png"
export default function Story() {
  return (
    <>
    <div className="story">
      <div>
        <img className="lungi" src={lungi}></img>
      </div>

      <div>
        <p className="storyheadpara">STORY BEHIND</p>
        <img className="storylogo" src="https://one8commune.co.in/wp-content/uploads/2024/03/One-8-commune-logo-2048x844.png"></img>
        <p  className="storypara">Comfort and authentic– the words that inspired the inception of the country’s first-ever one <br></br> of a kind restro-bar. Holding true to its ‘Commune Sensibility’, everything about the space is<br></br>influenced by the aura of togetherness.<br></br> <br></br>
        From the menu and the ambience, to the decor and the service, all of what we do stems <br></br> from a powerful connection that brings people of varied tastes, interests and backgrounds <br></br> into one space to create unforgettable memories.</p>
      </div>

    </div>
    
    
    </>
  );
}
