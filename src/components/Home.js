import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  const headingStyle = {
    color: "firebrick",
  };

  return (
    <div id="home">
      <h1 style={headingStyle}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
