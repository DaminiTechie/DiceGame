import { useState } from "react";
import styled from "styled-components";

export const NumberSelector = ({ setError, error, selectedNumber, setSelectedNumber}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  
  const NumberSelectorHandler = (value) => {
    setSelectedNumber(value)
    setError("")
  }

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => NumberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-right: 120px;
    
  .flex {
    display: flex;
    gap: 24px;
    line-height: 40px ;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error{
      color: red;
      font-size: 17px;
      line-height: 50px;
      font-weight: 400;
  }
`;

const Box = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  cursor: pointer;
`;
