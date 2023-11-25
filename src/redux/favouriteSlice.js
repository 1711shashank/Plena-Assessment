import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name: 'favourite',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            const idToRemove = action.payload.id;
            state.items = state.items.filter((item) => item.id !== idToRemove);
        },
    }
})

export const { addItem, removeItem } = favouriteSlice.actions;
export default favouriteSlice.reducer;

