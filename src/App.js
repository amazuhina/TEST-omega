import styled from 'styled-components'
import {Container} from "./components/container";
import React from "react";


const AppStl = styled.div` 
  min-width: 320px;
  overflow-x: hidden;
`

const TitleStl = styled.h1`
  color: #E2CDAE;
  font-size: 48px;
  text-align: center;
`




export const App = () => {
  return (
      <AppStl>
        <TitleStl>Список покупок OMEGA</TitleStl>
        <Container/>
      </AppStl>
  )
}
