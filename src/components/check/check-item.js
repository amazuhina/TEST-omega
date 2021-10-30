import React from 'react'
import styled from 'styled-components'
import {Counter} from "../counter";



const CheckItemStl = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 5px;
  border-bottom: 1px dashed #000;
  font-size: 14px;

`


const TextNameStl = styled.p`
  margin: 0;
  width: 40%;
`

const TextPriceStl = styled.p`
  margin: 0;
  width: 20%;
  text-align: right;
`


export const CheckItem = ({title, price, id, count}) => {


    const amountPrice = price * count


    return (
        <CheckItemStl>
            <TextNameStl>
                {title}
            </TextNameStl>
            <Counter id={id} count={count}/>
            <TextPriceStl>
                {amountPrice}
            </TextPriceStl>
        </CheckItemStl>
    )
}

