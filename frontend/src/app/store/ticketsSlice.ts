import { createSlice } from '@reduxjs/toolkit';

export interface TicketsState {
    prop: string;
}

const initialState = {
    props: '',
};

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        fn: (state) => {
            // implement
        },
    },
});

// Action creators are generated for each case reducer function
export const { fn } = ticketsSlice.actions;

export default ticketsSlice.reducer;
