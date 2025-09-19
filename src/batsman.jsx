import { useState } from "react";

export default function Batsman() {
  let [runs, setRuns] = useState(0);

  const handleSingle = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
  };
  const handleFour = () => {
    const updatedRuns = runs + 4;
    setRuns(updatedRuns);
  };

  const handleSix = () => {
    const updatedRuns = runs + 6;
    setRuns(updatedRuns);
  };

  return (
    <div>
      <h1>Player : MSD</h1>
      <h3>Score: {runs} </h3>
      <button onClick={handleSingle}>Single Run</button>
      <button onClick={handleFour}> It's Four</button>
      <button onClick={handleSix}>OMG SIX</button>
    </div>
  );
}
