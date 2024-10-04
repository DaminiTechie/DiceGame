import React, { useState } from 'react';
import styled from 'styled-components';

export const RoleDice = ({ roleDice, currentDice }) => {



  return (
    <DiceContainer>
      <div className='dice' onClick={roleDice}>
        <img src={`/image/dice/dice_${currentDice}.png`} alt={`Dice${currentDice}`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  img {
    width: 180px;
    height: 180px;
  }

  p {
    font-size: 18px;
    font-weight: 500;
  }
`;
