//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [visitorScore, setVisitorScore] = useState(0);
  


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Team1</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">15:00</div>
          <div className="visitors">
            <h2 className="visitors__name">Team2</h2>
            <div className="visitors__score">{visitorScore}</div>
          </div>
        </div>

        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + 6)}> Home  </button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(homeScore + 3)}> Home  </button>
        </div>
        <div className="visitorButtons">
          <button className="visitorButtons__touchdown" onClick={() => setVisitorScore(visitorScore + 6)}> Visitor </button>
          <button className="visitorButtons__fieldGoal" onClick={() => setVisitorScore(visitorScore + 3)}> Visitor</button>
        </div>
        </section>
    </div>
  );
}

export default App;