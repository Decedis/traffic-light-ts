import { Component } from "react";

type lightState = {
  top: string;
  middle: string;
  bottom: string;
};
export class ClassTrafficLight extends Component {
  state = {
    top: "red",
    middle: "black",
    bottom: "black",
  };
  render() {
    const topState: lightState = {
      top: "red",
      middle: "black",
      bottom: "black",
    };
    const bottomState: lightState = {
      top: "black",
      middle: "black",
      bottom: "green",
    };
    const middleState: lightState = {
      top: "black",
      middle: "yellow",
      bottom: "black",
    };
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={"circle " + this.state.top}></div>
          <div className={"circle " + this.state.middle}></div>
          <div className={"circle " + this.state.bottom}></div>
        </div>
        <button
          className="next-state-button"
          onClick={() => {
            if (this.state.top === "red") {
              this.setState(bottomState);
            }
            if (this.state.bottom === "green") {
              this.setState(middleState);
            }
            if (this.state.middle === "yellow") {
              this.setState(topState);
            }
          }}
        >
          Next State
        </button>
      </div>
    );
  }
}
