import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RideOption {
  id: string;
  provider: string;
  type: string;
  price: number;
  currency: string;
  estimatedTime: number; // in minutes
  distance: number; // in km
  availableSeats: number;
}

interface RideState {
  origin: string;
  destination: string;
  options: RideOption[];
  selectedOption: RideOption | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: RideState = {
  origin: '',
  destination: '',
  options: [],
  selectedOption: null,
  isLoading: false,
  error: null,
};

const rideSlice = createSlice({
  name: 'ride',
  initialState,
  reducers: {
    setOriginAndDestination: (state, action: PayloadAction<{ origin: string; destination: string }>) => {
      state.origin = action.payload.origin;
      state.destination = action.payload.destination;
    },
    fetchRideOptionsStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchRideOptionsSuccess: (state, action: PayloadAction<RideOption[]>) => {
      state.isLoading = false;
      state.options = action.payload;
    },
    fetchRideOptionsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    selectRideOption: (state, action: PayloadAction<RideOption>) => {
      state.selectedOption = action.payload;
    },
    clearRideOptions: (state) => {
      state.options = [];
      state.selectedOption = null;
    },
  },
});

export const {
  setOriginAndDestination,
  fetchRideOptionsStart,
  fetchRideOptionsSuccess,
  fetchRideOptionsFailure,
  selectRideOption,
  clearRideOptions,
} = rideSlice.actions;

export default rideSlice.reducer;