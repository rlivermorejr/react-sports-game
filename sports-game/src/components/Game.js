import Team from "./Team.js";
import Venue from "./Venue.js";
import Owls from "../img/birds.png";
import Snakes from "../img/snake.png";

function Game(props) {
  return (
    <div>
      <Venue venue="Rabbit Hole Arena" />
      <p class="text">This file represents the code after completing the setup step in the lab instructions</p>
      <div class="main">
        <p class="home">
          <Team name="Snakes" logo={Snakes} />
        </p>
        <p class="visitor">
          <Team name="Owls" logo={Owls} />
        </p>
      </div>
    </div>
  );
}

export default Game;
