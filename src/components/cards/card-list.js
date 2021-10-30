import React from 'react'
import styled from 'styled-components'
import {useSelector} from "react-redux";
import {dataSelector} from "../../redux/data-slice";
import {CardItem} from "./card-item";


const CardListStl = styled.div`
  display: flex;
  flex-direction: column;
`


export const CardList = () => {


    const data = useSelector(dataSelector)



    return (
        <CardListStl>
            {
                data.map(i => <CardItem title={i.name} text={i.description} price={i.price} img={i.img} id={i.id}/> )
            }
        </CardListStl>
    )
}

