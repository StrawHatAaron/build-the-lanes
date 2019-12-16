import React from "react";

import Quote from "../../../components/Typography/Quote.js";

export default function SectionBasics() {
  return (
    <div style={{padding:'3em'}}>
      <h2>Our Mission</h2>
      <div style={{padding:'3em'}}>
        <p>
          Lets stop letting our cities sink billions of dollars into short
          term based projects on solutions that are already not working.
          Citizens are tired of having driving to work as their only option.
          Its time to make a change. Here at Build The Lanes we are a community
          organization of engineers that provides free planning to cities' that 
          show them how they can change their locals live in terms of stress, 
          finances, time and health for the better by allowing cities to install
          more safe bike lanes.

          I will be the leader of a company that ends up being worth
          billions of dollars, because I got the answers. I understand
          culture. I am the nucleus. I think that’s a responsibility that
          I have, to push possibilities, to show people, this is the level
          that things could be at.
        </p>
        <Quote
          text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
          author=" Steffen Berr, Modern Engineer"
        />
      </div>
    </div>
  );
}
