import React, {useState} from 'react'
import styled from 'styled-components'
import {BtnAdd} from "./ui/buttons/btn-add";
import {CardList} from "./cards/card-list";
import {ModalWindow} from "./ui/modal-window";
import {Check} from "./check";


const ContainerStl = styled.div`
  padding: 0 20px;
  max-width: 90%;
  margin: 0 auto;
`

const SectionStl = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const MainBlockStl = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  padding: 10px 0;
  min-width: 300px;
`


export const Container = () => {

    const [isShowModalWindow, setIsShowModalWindow] = useState(false)

    const onOpenModalWindow = () => {
        setIsShowModalWindow(true)
    }

    const onCloseModalWindow = () => {
        setIsShowModalWindow(false)
    }



    return (
        <ContainerStl>
            <SectionStl>
                <MainBlockStl>
                    <BtnAdd onClick={onOpenModalWindow}/>
                    {
                        isShowModalWindow ? <ModalWindow onClose={onCloseModalWindow}/> : null
                    }
                    <CardList/>
                </MainBlockStl>
                <Check/>
            </SectionStl>
        </ContainerStl>
    )
}

