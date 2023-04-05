import { createSlice } from '@reduxjs/toolkit';

// using redux to initialize state of the app and use action to manipulate it whenever we need to use it

const initialState = {
    origin: null,
    destination: null,
    travelTimeInfo: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInfo: (state, action) => {
            state.travelTimeInfo = action.payload;
        }
    }
})

export const { setOrigin, setDestination, setTravelTimeInfo } = navSlice.actions;