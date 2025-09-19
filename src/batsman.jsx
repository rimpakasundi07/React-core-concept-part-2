import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [four, setfour] = useState(0);
  const [sixes, setSixes] = useState(0);

  const handleSingle = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
  };
  const handleFour = () => {
    const updatedRuns = runs + 4;
    const updatedFour = four + 1;
    setfour(updatedFour);
    setRuns(updatedRuns);
  };

  const handleSix = () => {
    const updatedRuns = runs + 6;
    const updatedSixes = sixes + 1;
    setSixes(updatedSixes);
    setRuns(updatedRuns);
  };

  return (
    <div>
      <h1>Player : MSD</h1>
      <p>
        <small>Four:{four} </small>
      </p>
      <br></br>
      <p>
        <small>Six:{sixes} </small>
      </p>{" "}
      <br></br>
      {runs > 50 && <p>Your Score :50+</p>}
      <h3>Score: {runs} </h3>
      <button onClick={handleSingle}>Single Run</button>
      <button onClick={handleFour}> It's Four</button>
      <button onClick={handleSix}>OMG SIX</button>
    </div>
  );
}
