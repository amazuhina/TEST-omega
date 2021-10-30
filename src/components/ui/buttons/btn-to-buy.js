import React from 'react'
import styled from 'styled-components'


const BtnToBuyStl = styled.button`
  width: 150px;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #9ABCA3;
  font-size: 13px;
  font-weight: normal;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #87A890;
  }
`


export const BtnToBuy = ({onClick}) => {



    return (
        <BtnToBuyStl onClick={onClick}>
            Купить
        </BtnToBuyStl>
    )
}

