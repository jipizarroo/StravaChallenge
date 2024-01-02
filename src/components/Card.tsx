import * as dayjs from "dayjs"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

import { convertToKilometers } from "../functions/convertToKilometers"
import { formatDuration } from "../functions/formatDuration"

import { SetActivitiesPayloadTypes } from "../types/Activities"

interface BasicCardProps {
  activitie: SetActivitiesPayloadTypes
}

const BasicCard: React.FC<BasicCardProps> = ({ activitie }) => {
  const formatedDate = dayjs(activitie.start_date).format("MM-DD-YYYY")

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {formatedDate}
        </Typography>
        <Typography variant="h5" component="div">
          {activitie.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Distance: {convertToKilometers(activitie.distance)}
        </Typography>
        <Typography variant="body2">
          Duration: {formatDuration(activitie.moving_time)}
          <br />
          Elevation: {activitie.total_elevation_gain}m
        </Typography>
      </CardContent>
    </Card>
  )
}

export default BasicCard
