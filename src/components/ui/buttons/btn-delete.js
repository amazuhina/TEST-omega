import React from 'react'
import styled from 'styled-components'


const BtnDeleteStl = styled.button`
  border: none;
  background-color: transparent;
  color: #aaa;
  cursor: pointer;
  transition: 0.3s;
  height: 20px;
  &:hover {
    color: #000;
  }
`


export const BtnDelete = ({onClick}) => {



    return (
        <BtnDeleteStl onClick={onClick}>
            x
        </BtnDeleteStl>
    )
}

