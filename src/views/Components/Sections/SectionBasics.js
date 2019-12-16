import React from "react";

import Quote from "../../../components/Typography/Quote.js";

export default function SectionBasics() {
  return (
    <div style={{padding:'3em'}}>
      <h2>Our Mission</h2>
      <div style={{padding:'3em'}}>
        <p>
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
