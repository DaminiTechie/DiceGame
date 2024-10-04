import styled from "styled-components";
import { useState } from "react";
import { NumberSelector } from "./NumberSelector";
import { TotalScore } from "./TotalScore";
import { RoleDice } from "./RoleDice";
import { Rules } from "./Rules";


const GamePlay = () => {
  const [score, setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number")
      return;
    }

    const randomNumber = generateRandomNumber(1, 6);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber)
    } else {
      setScore((prev) => prev - 2)
    }
    setSelectedNumber(undefined)

  };
  const resetScore = () => {
    setScore(0)
  }

  return (
    <MainContainer>
      <div className="Top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice

        currentDice={currentDice}
        roleDice={roleDice}
      />
      <div className="ButtonContainer">
        <button className="btnReset" onClick={resetScore}>Reset Score</button>
        <button className="btnRules" onClick={() => setShowRules(prev => !prev)}>{
          showRules ? "Hide" : "Show"} Rules</button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  )
};
export default GamePlay;

const MainContainer = styled.main`
padding-top: 70px;
    .Top_section{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .ButtonContainer{
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: center;
      align-items: center;
      
      margin-top: 20px;
    }
    .btnReset{
      width: 170px;
      height: 40px;
      border: 1px solid black;
      font-size: 16px;
      font-weight: 600;
    }
    .btnRules{
      width: 170px;
      height: 40px;
      border: 1px solid black;
      font-size: 16px;
      font-weight: 600;
      color: white;
      background-color: black;
    }
    .btnReset:hover{
      background-color: black;
      border: 1px solid green;
      color: white;
      transition: 0.3s background ease-in;
    }
    .btnRules:hover{
      background-color: white;
      border: 1px solid black;
      color: black;
      transition: 0.3s background ease-in;
    }
`