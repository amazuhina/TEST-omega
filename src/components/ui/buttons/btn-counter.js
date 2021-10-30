import React from 'react'
import styled from 'styled-components'

const BtnCounterStl = styled.button`
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: 1px solid #aaa;
  border-radius: 3px;
  outline: none;
  display: flex;
  color: #aaa;
`


export const BtnCounter = ({content, onClick}) => {



    return (
        <BtnCounterStl onClick={onClick}>
            {content}
        </BtnCounterStl>
    )
}

