import React from 'react'
import styled from 'styled-components'


const InputItemStl = styled.div`
    margin-bottom: 20px;
    
`


const LabelStl = styled.label`
  font-size: 14px;
`

const InputStl = styled.input`
  border: none;
  padding: 5px;
  background-color: #F8F4EC;
  outline: none;
  margin-left: 30px;
  width: 200px;
`




export const InputItem = ({label, type}) => {



    return (
        <InputItemStl>
            <LabelStl> {label}
                <InputStl type={type}/>
            </LabelStl>
        </InputItemStl>
    )
}

