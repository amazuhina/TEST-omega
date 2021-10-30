import React from 'react'
import styled from 'styled-components'


const BtnPushDataStl = styled.button`
  margin: 20px auto;
  width: 150px;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #E2CDAE;
  font-size: 13px;
  padding: 10px 20px;
  font-weight: normal;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #CBB799;
  }
`


export const BtnPushData = ({onClick}) => {



    return (
        <BtnPushDataStl onClick={onClick}>
            Добавить
        </BtnPushDataStl>
    )
}

