import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name: 'favourite',
    initialState: {
        items: []
    },
    reducers: {
        addItemToFavourite: (state, action) => {
            state.items.push(action.payload);
        },
        removeItemToFavourite: (state, action) => {
            const idToRemove = action.payload.id;
            state.items = state.items.filter((item) => item.id !== idToRemove);
        },
    }
})

export const { addItemToFavourite, removeItemToFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;

