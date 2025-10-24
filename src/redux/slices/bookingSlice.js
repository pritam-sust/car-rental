import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pickupLocation: "",
  returnLocation: "",
  pickupDate: "",
  returnDate: "",
  pickupTime: "10:00",
  returnTime: "10:00",
  differentLocation: false,
  isLoading: false,
  error: null,
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setPickupLocation: (state, action) => {
      state.pickupLocation = action.payload;
    },
    setReturnLocation: (state, action) => {
      state.returnLocation = action.payload;
    },
    setPickupDate: (state, action) => {
      state.pickupDate = action.payload;
    },
    setReturnDate: (state, action) => {
      state.returnDate = action.payload;
    },
    setPickupTime: (state, action) => {
      state.pickupTime = action.payload;
    },
    setReturnTime: (state, action) => {
      state.returnTime = action.payload;
    },
    setDifferentLocation: (state, action) => {
      state.differentLocation = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetBooking: (state) => {
      return initialState;
    },
  },
});

export const {
  setPickupLocation,
  setReturnLocation,
  setPickupDate,
  setReturnDate,
  setPickupTime,
  setReturnTime,
  setDifferentLocation,
  setLoading,
  setError,
  resetBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;
