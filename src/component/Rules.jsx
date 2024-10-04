import React from 'react'
import styled from 'styled-components'

export const Rules = () => {
    return (
        <RulesContainer>
            <h2>How to play dice game</h2>
            <div className='text'></div>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be dedcuted </p>
        </RulesContainer>
    )
}

const RulesContainer = styled.div`
    background-color:  #FBF1F1;
    color: black;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;

    h2{
        font-size: 24px;
        
    }
    .text{
        margin-top: 24px;
        font-size: 16px;
        font-weight: 500;
    }
    p{
        font-size: 16px;
        font-weight: 500; 
        line-height: 24px;
    }
`