import {createSlice} from "@reduxjs/toolkit"



const dataSlice = createSlice({
    name: 'dataSlice',

    initialState: {
        data: [
            {
                id: 1,
                name: 'Алоэ',
                description: `Алоэ Джексона. Листья салатовые, глянцевые, с белыми пятнышками, шипы практически
                 отсутствуют - есть только на кончиках листьев. Лечебными свойствами не обладает. Имеет хороший 
                 декоративный вид и неприхотлив.`,
                price: 650,
                img: 'https://kashpo.store/image/cache/catalog/bbcf297f43d411e98127005056be01ad_94737a9957c411e98128005056be01ad-auto_width_800.jpg',
            },
            {
                id: 2,
                name: 'Финик',
                description: `Финик робелини - это растение из семейства арековых (или пальмовых). В дикой природе он 
                встречается в тропических лесах Индии, Южного Китая и Бирмы, в отличие других пальм финик не очень высок, 
                так, не одомашненные растения достигают только 2-3 метров в высоту.`,
                price: 4150,
                img: 'https://kashpo.store/image/cache/catalog/1dfd7a94080a11e8811d005056be01ad_7f72495657d511e98128005056be01ad-380x380.jpg.webp',
            },
            {
                id: 3,
                name: 'Фаленопсис',
                description: `Орхидея для большинства - это именно Фаленопсис, самый распространенный вид в цветоводстве 
                и декорировании. Этот экземпляр нежного розового цвета. Он имеет хорошо развитую корневую систему,
                 сильные цветоносы и красивые зеленые листья.`,
                price: 870,
                img: 'https://kashpo.store/image/cache/catalog/83e96374284111e98127005056be01ad_0b151546516c11e98128005056be01ad-380x380.jpg.webp',
            },
        ],

    },

    reducers: {
        addCard: (state, action) => {
            state.data.push(action.payload)
        },

        deleteCard: (state, action) => {
            const id = action.payload.id

            state.data.forEach((i, index) => {
                if (i.id === id) {
                    state.data.splice(index, 1)
                }
            })


        }


    }
})


export const dataSelector = (state) =>  state.dataReducer.data



export const {
    addCard,
    deleteCard
} = dataSlice.actions


export const reducer = dataSlice.reducer