import { useEffect } from "react"
import { useAppDispatch } from "../Redux/hooks"
import { setActivities, setLoading } from "../Redux/activitiesSlice"

import { callRefresh, callActivities } from "../api/constants"
import ParseMonthlyData from "./parseMonthlyData"

const CallActivities = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      dispatch(setLoading(true))

      try {
        const refreshResponse = await fetch(callRefresh, {
          method: "POST",
        })

        const refreshResult = await refreshResponse.json()

        if (isMounted) {
          const activitiesResponse = await fetch(
            callActivities + refreshResult.access_token,
          )
          const activitiesData = await activitiesResponse.json()

          dispatch(setActivities(activitiesData))
          dispatch(setLoading(false))
        }
      } catch (error) {
        console.error(error)
        dispatch(setLoading(false))
      }
      // try {
      //   const mockResponse = await fetch("../../mock.json")
      //   const mockData = await mockResponse.json()
      //   dispatch(setActivities(mockData))
      // } catch (error) {
      //   console.error(error)
      // }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, [])
}

export default CallActivities
