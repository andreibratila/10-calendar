import { createSlice } from '@reduxjs/toolkit';

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [],
        activeEvent: null
    },
    reducers: {
        increment: (state, /* action */ ) => {
            state.counter += 1;
        },
    }
});


// Action creators are generated for each case reducer function
export const { increment } = calendarSlice.actions;