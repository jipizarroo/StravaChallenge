import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SetActivitiesPayloadTypes, ActivitiesState } from "../types/Activities"

const initialState: ActivitiesState = {
  data: [],
  loading: false,
}

const activitiesSlice = createSlice({
  name: "activities",
  initialState,
  reducers: {
    setActivities: (
      state,
      action: PayloadAction<SetActivitiesPayloadTypes[]>,
    ) => {
      state.data = action.payload
      state.loading = false
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
})

export const { setActivities, setLoading } = activitiesSlice.actions

export const selectActivities = (state: { activities: ActivitiesState }) =>
  state.activities

export default activitiesSlice.reducer
