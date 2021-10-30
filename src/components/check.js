import React from 'react'
import styled from 'styled-components'
import {CheckList} from "./check/check-list";
import {useSelector} from "react-redux";
import {amountSelector, checkSelector} from "../redux/check-slice";



const CheckStl = styled.div`  
  background-color: #fff;
  border-radius: 5px;
  width: 20%;
  padding: 10px;
  height: auto;
  min-width: 250px;
`

const CheckTitleStl = styled.h3`

`



const CheckAmountStl = styled.h4`
  text-align: right;
`

export const Check = () => {

    const check = useSelector(checkSelector)

    const calculateSum = () => {
        let sum = check.reduce((total, amount) => total + (amount.price * amount.count), 0)
        return sum
    }



    return (
        <CheckStl>
            <CheckTitleStl>
               Корзина:
            </CheckTitleStl>
            <CheckList/>
            <CheckAmountStl>
                Итого: {calculateSum()}
            </CheckAmountStl>
        </CheckStl>
    )
}

