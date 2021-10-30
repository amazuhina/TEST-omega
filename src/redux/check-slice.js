import {createSlice} from "@reduxjs/toolkit"



const checkSlice = createSlice({
    name: 'checkSlice',

    initialState: {
        check: [
            {
                id: 1,
                name: 'Алоэ',
                count: 1,
                price: 650
            },
        ],
    },

    reducers: {
        addPurchase: (state, action) => {
            const purchase = action.payload.purchase
            const id = action.payload.purchase.id

            state.check.forEach((i, index) => {
                if (i.id === id) {
                    state.check[index].count += 1
                } else {
                    state.check.push(purchase)
                }
            })


        },

        plusCount: (state, action) => {
            const id = action.payload.id

            state.check.forEach((i, index) => {
                if (i.id === id) {
                    state.check[index].count += 1
                }
            })
        },

        minusCount: (state, action) => {
            const id = action.payload.id

            state.check.forEach((i, index) => {
                let count = state.check[index].count
                if (i.id === id) {
                    if(count > 1) {
                        state.check[index].count -= 1
                    } else if (count === 1) {
                        state.check.splice(index, 1)
                    }

                }
            })
        },




    }
})


export const checkSelector = (state) =>  state.checkReducer.check

export const amountSelector = (state) => state.checkReducer.amount



export const {
    addPurchase,
    plusCount,
    minusCount
} = checkSlice.actions


export const reducer = checkSlice.reducer