import React from 'react'
import styled from 'styled-components'
import {useSelector} from "react-redux";
import {CheckItem} from "./check-item";
import {checkSelector} from "../../redux/check-slice";

const CheckListStl = styled.div`
  display: flex;
  flex-direction: column;
`


const TextForEmptyStl = styled.p`
  text-align: center;
  color: #aaa;
`



export const CheckList = () => {


    const check = useSelector(checkSelector)

    return (
        <CheckListStl>
            {
                check.length > 0 ?
                    (check.map(i => <CheckItem title={i.name} price={i.price} id={i.id} count={i.count}/> ))
                                 :
                    <TextForEmptyStl>Корзина пуста</TextForEmptyStl>
            }
        </CheckListStl>
    )
}

