import { useDispatch, useSelector } from "react-redux";
import {
  resetBooking,
  setDifferentLocation,
  setError,
  setLoading,
  setPickupDate,
  setPickupLocation,
  setPickupTime,
  setReturnDate,
  setReturnLocation,
  setReturnTime,
} from "../redux/slices/bookingSlice";

export const useBooking = () => {
  const dispatch = useDispatch();
  const booking = useSelector((state) => state.booking);

  const updatePickupLocation = (location) =>
    dispatch(setPickupLocation(location));
  const updateReturnLocation = (location) =>
    dispatch(setReturnLocation(location));
  const updatePickupDate = (date) => dispatch(setPickupDate(date));
  const updateReturnDate = (date) => dispatch(setReturnDate(date));
  const updatePickupTime = (time) => dispatch(setPickupTime(time));
  const updateReturnTime = (time) => dispatch(setReturnTime(time));
  const updateDifferentLocation = (value) =>
    dispatch(setDifferentLocation(value));
  const updateLoading = (loading) => dispatch(setLoading(loading));
  const updateError = (error) => dispatch(setError(error));
  const reset = () => dispatch(resetBooking());

  const searchVehicles = async () => {
    try {
      updateLoading(true);
      updateError(null);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Searching vehicles with:", booking);
      alert("Search successful! Vehicle results would be displayed here.");
      updateLoading(false);
    } catch (error) {
      updateError(error.message);
      updateLoading(false);
    }
  };

  return {
    booking,
    updatePickupLocation,
    updateReturnLocation,
    updatePickupDate,
    updateReturnDate,
    updatePickupTime,
    updateReturnTime,
    updateDifferentLocation,
    searchVehicles,
    reset,
  };
};
