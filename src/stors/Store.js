import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name : "count",
    initialState: { value: 0 },
    reducers:{
        increase:(state)=>{
            state.value+=1
        },
        decrease:(state)=>{
            state.value-=1

        }
    }
})
export const {increase,decrease} = slice.actions
export const store = configureStore({reducer:{
count:slice.reducer 
}})