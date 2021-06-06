import React from "react";
import Swish from "../sounds/Swish.wav";
import Brick from "../sounds/Back+Board.wav";

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      logo: props.logo,
      score: 0,
      shots: 0,
      shotPercent: 0,
    };
  }

  shotTaken = (event) => {
    let score = this.state.score;
    if (Math.random() > 0.4) {
      score += 1;
      let swish = new Audio(Swish);
      swish.play();
    } else {
      let miss = new Audio(Brick);
      miss.play();
    }
    this.setState((currentState) => ({
      shots: currentState.shots + 1,
      score,
    }));
  };

  render() {
    let percentage = 0;
    if (this.state.shots > 0) {
      percentage = this.state.score / this.state.shots;
    }
    return (
      <div>
        <h1>{this.props.name}</h1>
        <img src={this.props.logo} />
        <button id="hb" onClick={this.shotTaken}>
          Take Shot
        </button>
        <p id="score">
          shots: {this.state.shots}
          <br />
          score: {this.state.score}
          <br />
          shot percentage: {percentage.toFixed(2)}
        </p>
      </div>
    );
  }
}

export default Team;
