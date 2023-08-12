import { useState } from "react";

type lightState = {
  top: string;
  middle: string;
  bottom: string;
};
export const FunctionalTrafficLight = () => {
  const states: lightState[] = [
    {
      top: "red",
      middle: "black",
      bottom: "black",
    },
    {
      top: "black",
      middle: "yellow",
      bottom: "black",
    },
    {
      top: "black",
      middle: "black",
      bottom: "green",
    },
  ];

  const [topState, middleState, bottomState] = states;
  const [activeLight, setActiveLight] = useState(topState);

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={"circle " + activeLight.top}></div>
        <div className={"circle " + activeLight.middle}></div>
        <div className={"circle " + activeLight.bottom}></div>
      </div>
      <button
        className="next-state-button"
        onClick={() => {
          if (activeLight.top === "red") {
            setActiveLight(bottomState);
          }
          if (activeLight.bottom === "green") {
            setActiveLight(middleState);
          }
          if (activeLight.middle === "yellow") {
            setActiveLight(topState);
          }
        }}
      >
        Next State
      </button>
    </div>
  );
};
// setCount is supposed to look like this:
// setCount( prevCount => prevCount - 1)
// useState(initialVal), the initialVal can be a function. This is used for complex calcs
// useState({ count: 4, theme: 'blue' }), the inside is an object that can be further destructured
// setState in a functional component overwrites everything, it does not merge objects like in class components
// we can put state into their own hooks. Each state happens after the prior one when they are in action.

// plan:
// Two lists Active and Base. Our useState(startPos) will be Active[0].
// Active will override the baseclass of the Base trafficLights.
