import { Stack } from "@mui/material"
import Typography from "@mui/material/Typography"

import { useAppSelector } from "../Redux/hooks"
import { selectActivities } from "../Redux/activitiesSlice"

import BasicCard from "../components/Card"

import { SetActivitiesPayloadTypes } from "../types/Activities"

function ActivitiesPage() {
  const { loading, data: activities } = useAppSelector(selectActivities)

  function showActivities() {
    if (loading && activities.length > 0) return <>LOADING</>
    if (!loading && activities.length > 0) {
      return (
        <Stack
          direction="column"
          spacing={3}
          useFlexGap
          flexWrap="wrap"
          maxWidth="100%"
          height="fit-content "
        >
          <Typography variant="h1" component="div">
            Activities Page
          </Typography>
          <Typography sx={{ mb: 2.5, fontSize: 24 }} color="text.secondary">
            A list of the recent activities of you have recorded with Strava
          </Typography>
          <Stack
            spacing={3}
            direction="row"
            useFlexGap
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
          >
            {activities?.map((activitie: SetActivitiesPayloadTypes) => (
              <BasicCard activitie={activitie} key={activitie.id} />
            ))}
          </Stack>
        </Stack>
      )
    }
  }

  return <div className="App">{showActivities()}</div>
}

export default ActivitiesPage
