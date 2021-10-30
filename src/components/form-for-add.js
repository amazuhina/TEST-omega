import React, {useState} from 'react'
import styled from 'styled-components'
import {useDispatch} from "react-redux";
import {addCard} from "../redux/data-slice";
import {BtnPushData} from "./ui/buttons/btn-push-data";


const FormForAddStl = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`


const FormTitleStl = styled.h2`
  text-align: center;
  margin-bottom: 60px;

`


const InputItemStl = styled.div`
  margin-bottom: 20px;    
`


const LabelStl = styled.label`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  width: 95%;
`

const InputStl = styled.input`
  border: none;
  padding: 5px;
  background-color: #F8F4EC;
  outline: none;
  margin-left: 20px;
  width: 80%;
`


export const FormForAdd = ({onClose}) => {


    const [name, setName] = useState(null)
    const [description, setDescription] = useState(null)
    const [img, setImg] = useState(null)
    const [price, setPrice] = useState(null)

    const dispatch = useDispatch()


    const onAddCard = () => {
        const payload = {
            id: Math.random(),
            name: name,
            description: description,
            price: price,
            img: img
        }
        dispatch(addCard(payload))
        onClose()
    }




    return (
        <FormForAddStl>
            <FormTitleStl>
                Создать товар
            </FormTitleStl>
            <InputItemStl>
                <LabelStl> Название
                    <InputStl
                        type={'text'}
                        value={name}
                        onChange={(event) =>{
                            const value = event.target.value
                            setName(value)
                        }}
                    />
                </LabelStl>
            </InputItemStl>
            <InputItemStl>
                <LabelStl> Фото
                    <InputStl
                        type={'text'}
                        value={img}
                        onChange={(event) =>{
                            const value = event.target.value
                            setImg(value)
                        }}

                    />
                </LabelStl>
            </InputItemStl>
            <InputItemStl>
                <LabelStl> Описание
                    <InputStl
                        type={'text'}
                        value={description}
                        onChange={(event) =>{
                            const value = event.target.value
                            setDescription(value)
                        }}
                    />
                </LabelStl>
            </InputItemStl>
            <InputItemStl>
                <LabelStl> Цена
                    <InputStl
                        type={'text'}
                        value={price}
                        onChange={(event) =>{
                            const value = event.target.value
                            setPrice(value)
                        }}
                    />
                </LabelStl>
            </InputItemStl>
            <BtnPushData onClick={onAddCard}/>
        </FormForAddStl>
    )
}

