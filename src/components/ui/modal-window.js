import React from 'react'
import styled from 'styled-components'
import {FormForAdd} from "../form-for-add";


const ModalWindowStl = styled.div``

const OverlayStl = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,.7);
`

const WindowStl = styled.div`
  position: fixed;
  top: 5vh;
  left: 20%;
  z-index: 100;
  width: 50%;
  max-height: 90vh;
  background: white;
  margin: 0 auto;
  padding: 1em;
`



export const ModalWindow = ({onClose}) => {

    return (
        <ModalWindowStl>
            <OverlayStl onClick={onClose}/>
            <WindowStl>
                <FormForAdd onClose={onClose}/>
            </WindowStl>
        </ModalWindowStl>
    )
}