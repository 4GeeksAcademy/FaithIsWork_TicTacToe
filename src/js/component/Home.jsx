import React, { useState } from 'react';
import Game from './Game'; // Import the Game component

const Home = () => {
  const [selectedWeapon, setSelectedWeapon] = useState(null);

  const handleButtonClick = (weapon) => {
    setSelectedWeapon(weapon);
  };

  // Render the Game component when a weapon is selected
  if (selectedWeapon) {
    return <Game selectedWeapon={selectedWeapon} />;
  }

  return (
    <div className="container tictac border mt-5">
      <h1 className="hero my-5 col-12 text-center">Choose your weapon</h1>
      <div className="row justify-content-center mt-5">
        <div className="col-3">
          <div className="form-group">
            <label htmlFor="player1">Player1</label>
            <input
              id="player1"
              className="form-control"
              type="text"
              placeholder="Enter Player1 Name"
            />
          </div>
        </div>
        <div className="col-3">
          <div className="form-group">
            <label htmlFor="player2">Player2</label>
            <input
              id="player2"
              className="form-control"
              type="text"
              placeholder="Enter Player2 Name"
            />
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-auto">
          <button
            className="btn btn-primary m-2"
            style={{ width: '100px', height: '100px' }}
            onClick={() => handleButtonClick('X')}
          >
            X
          </button>
        </div>
        <div className="col-auto">
          <button
            className="btn btn-primary m-2"
            style={{ width: '100px', height: '100px' }}
            onClick={() => handleButtonClick('O')}
          >
            O
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;