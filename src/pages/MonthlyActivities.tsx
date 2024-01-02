import { useNavigate } from "react-router-dom"
import * as dayjs from "dayjs"

import { Stack } from "@mui/material"
import Typography from "@mui/material/Typography"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import Pagination from "@mui/material/Pagination"

import { useAppSelector } from "../Redux/hooks"
import { selectMonthly } from "../Redux/monthlySlice"

import { convertToKilometers } from "../functions/convertToKilometers"
import monthlyCalculator from "../functions/monthlyCalculator"
import { formatDuration } from "../functions/formatDuration"
import ParseMonthlyData from "../functions/parseMonthlyData"
import { SetActivitiesPayloadTypes } from "../types/Activities"
import { useEffect, useState } from "react"

const MonthlyActivities = () => {
  ParseMonthlyData()
  const navigate = useNavigate()
  const { data: activities } = useAppSelector(selectMonthly)
  const [countPaginator, setCountPaginator] = useState(1)
  const [show, setShow] = useState(2)
  const [current, setCurrent] = useState<number>(1)

  useEffect(() => {
    if (activities.length > 0) {
      const numberOfPages = Math.ceil(activities.length / 3)
      setCountPaginator(numberOfPages)
    }
  }, [activities])

  useEffect(() => {
    setShow(3 * current - current / current)
  }, [current])

  return (
    <Stack direction="column" spacing={3} alignItems="center" flex={1}>
      <Typography variant="h1" component="div">
        Monthly Stats Gage
      </Typography>
      <Typography sx={{ mb: 2.5, fontSize: 24 }} color="text.secondary">
        A resume of 3 months of what you have recorded on Strava.
      </Typography>
      <TableContainer
        sx={{ maxWidth: 650 }}
        aria-label="simple table"
        component={Paper}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Month</TableCell>
              <TableCell>Trips</TableCell>
              <TableCell>Distance</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Elevation Gain</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activities.map(
              (month: SetActivitiesPayloadTypes[], index: number) => (
                <TableRow key={month[0].id}>
                  {show - 3 < index && index <= show && (
                    <>
                      <TableCell>
                        {dayjs(month[0].start_date).format("MMMM")}
                      </TableCell>
                      <TableCell>{month.length}</TableCell>
                      <TableCell>
                        {convertToKilometers(
                          monthlyCalculator(month, "distance"),
                        )}
                      </TableCell>
                      <TableCell>
                        {formatDuration(
                          monthlyCalculator(month, "moving_time"),
                        )}
                      </TableCell>
                      <TableCell>
                        {monthlyCalculator(month, "total_elevation_gain")}m
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="text"
                          onClick={() => navigate(`monthlydetail/${index}`)}
                        >
                          Expand{" "}
                        </Button>
                      </TableCell>
                    </>
                  )}
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        style={{ marginTop: "auto" }}
        count={countPaginator}
        onChange={(e, value) => setCurrent(value)}
        color="primary"
      />
    </Stack>
  )
}

export default MonthlyActivities
