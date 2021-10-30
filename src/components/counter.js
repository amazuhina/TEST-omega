import React from 'react'
import styled from 'styled-components'
import {BtnCounter} from "./ui/buttons/btn-counter";
import {useDispatch} from "react-redux";
import {minusCount, plusCount} from "../redux/check-slice";

const CounterStl = styled.div`
  display: flex;
`

const CountStl = styled.p`
  margin: 0 10px;

`


export const Counter = ({id, count}) => {


    const dispatch = useDispatch()


    const onPlusCount = () => {
        const payload = {
            id: id
        }
        dispatch(plusCount(payload))
    }


    const onMinusCount = () => {
        const payload = {
            id: id
        }
        dispatch(minusCount(payload))
    }

    return (
        <CounterStl>
            <BtnCounter content={'-'} onClick={onMinusCount}/>
                <CountStl>
                    {count}
                </CountStl>
            <BtnCounter content={'+'} onClick={onPlusCount}/>
        </CounterStl>
    )
}

