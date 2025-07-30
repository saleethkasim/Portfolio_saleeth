import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Freelancer",
          "MERN/MEAN Stack Developer",
          "Python & AI Enthusiast",
          "Digital Marketing",
          "Cloud Solutions (AWS/Azure)"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
