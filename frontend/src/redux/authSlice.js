import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
  },
  reducers: {
    // actions
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { setLoading ,setUser} = authSlice.actions;
export default authSlice.reducer;
/*
Named export for actions: You export the action creators (setLoading, setUser) so that they can be used elsewhere in your app to dispatch actions.
Default export for the reducer: The reducer is the main function that manages how the state is updated based on the actions, so you export it by default to integrate it into your Redux store.
*/