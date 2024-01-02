import { Stack } from "@mui/material"
import Typography from "@mui/material/Typography"

import { useAppSelector } from "../Redux/hooks"
import { selectMonthly } from "../Redux/monthlySlice"

import BasicCard from "../components/Card"

import { SetActivitiesPayloadTypes } from "../types/Activities"
import { useParams } from "react-router-dom"

function DetailMonthlyPage() {
  const { data: activities } = useAppSelector(selectMonthly)
  const params = useParams()
  const indexSelected: number = Number(params?.id)
  return (
    <div className="DetailMonthly">
      <Stack direction="column" spacing={3}>
        <Typography variant="h1" component="div">
          Monthly Detail Activities Page
        </Typography>
        <Typography sx={{ mb: 2.5, fontSize: 24 }} color="text.secondary">
          The Detail of your monthly activities done on Strava
        </Typography>
        <Stack
          spacing={3}
          direction="row"
          useFlexGap
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          {activities?.[indexSelected].map(
            (activitie: SetActivitiesPayloadTypes) => (
              <BasicCard activitie={activitie} key={activitie.id} />
            ),
          )}
        </Stack>
      </Stack>
    </div>
  )
}

export default DetailMonthlyPage
