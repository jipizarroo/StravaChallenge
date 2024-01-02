import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import activitiesReducer from "./activitiesSlice"
import monthlyReducer from "./monthlySlice"

export const store = configureStore({
  reducer: {
    activities: activitiesReducer,
    monthlyData: monthlyReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
