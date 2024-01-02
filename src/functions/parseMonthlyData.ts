import { useEffect } from "react"
import * as dayjs from "dayjs"

import { selectActivities } from "../Redux/activitiesSlice"
import { useAppDispatch, useAppSelector } from "../Redux/hooks"
import { SetActivitiesPayloadTypes } from "../types/Activities"
import { setMonthlyData } from "../Redux/monthlySlice"

const ParseMonthlyData = () => {
  const dispatch = useAppDispatch()
  const { data: activities } = useAppSelector(selectActivities)

  useEffect(() => {
    const separateActivitiesByThreeMonths = (
      activities: SetActivitiesPayloadTypes[],
    ) => {
      const groupedActivities: { [key: string]: SetActivitiesPayloadTypes[] } =
        {}

      activities.forEach((activity) => {
        const startMonthYear = dayjs(activity.start_date).format("YYYY-MM")

        if (!groupedActivities[startMonthYear]) {
          groupedActivities[startMonthYear] = []
        }
        groupedActivities[startMonthYear].push(activity)
      })
      const result = Object.values(groupedActivities)

      dispatch(setMonthlyData(result))
    }

    separateActivitiesByThreeMonths(activities)
  }, [activities, dispatch])

  return null // Replace with your actual component rendering logic
}

export default ParseMonthlyData
