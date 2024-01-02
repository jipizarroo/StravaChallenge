import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  data: [],
}

const monthlySlice = createSlice({
  name: "monthlyData",
  initialState,
  reducers: {
    setMonthlyData: (state, action) => {
      state.data = action.payload
    },
  },
})

export const { setMonthlyData } = monthlySlice.actions

export const selectMonthly = (state: { monthlyData: any }) => state.monthlyData

export default monthlySlice.reducer
