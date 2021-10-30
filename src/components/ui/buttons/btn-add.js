import React from 'react'
import styled from 'styled-components'


const BtnAddStl = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: #E2CDAE;
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  margin-bottom: 30px;
  transition: 0.3s;
  &:hover {
    background-color: #CBB799;
  }
`


export const BtnAdd = ({onClick}) => {



    return (
        <BtnAddStl onClick={onClick}>
            +
        </BtnAddStl>
    )
}

