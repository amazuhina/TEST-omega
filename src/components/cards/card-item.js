import React from 'react'
import styled from 'styled-components'
import {BtnToBuy} from "../ui/buttons/btn-to-buy";
import {BtnDelete} from "../ui/buttons/btn-delete";
import {useDispatch} from "react-redux";
import {deleteCard} from "../../redux/data-slice";
import {addPurchase} from "../../redux/check-slice";


const CardItemStl = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #fff;
  border: none;
  border-radius: 10px;
`


const ImageStl = styled.img`
  width: 150px;
  height: 150px;
`



const InfoBlockStl = styled.div`
  margin: 0 15px;

`


const CardTitleStl = styled.h2`
  font-weight: bold;
  font-size: 14px;
  text-align: left;

`


const CardDescriptionStl = styled.p`
  font-weight: normal;
  font-size: 12px;
  text-align: left;
`


const ActionBlockStl = styled.div`
  display: flex;
  justify-content: space-between;
`

const CardPriceStl = styled.h3`
  font-weight: bold;
  font-size: 14px;
  text-align: left;

`

export const CardItem = ({title, text, price, img, id}) => {

    const dispatch = useDispatch()


    const onDeleteCard = () => {
        const payload = {
            id: id
        }

        console.log(id)

        dispatch(deleteCard(payload))
    }


    const onAddPurchase = () => {
        const payload = {
            purchase: {
                id: id,
                name: title,
                price: price,
                count: 1
            }
        }
        dispatch(addPurchase(payload))
    }

    return (
        <CardItemStl>
            <ImageStl src={img}/>
            <InfoBlockStl>
                <CardTitleStl>
                    {title}
                </CardTitleStl>
                <CardDescriptionStl>
                    {text}
                </CardDescriptionStl>

                <ActionBlockStl>
                    <CardPriceStl>
                        {price} руб.
                    </CardPriceStl>
                    <BtnToBuy onClick={onAddPurchase}/>
                </ActionBlockStl>
            </InfoBlockStl>
            <BtnDelete onClick={onDeleteCard}/>
        </CardItemStl>
    )
}

