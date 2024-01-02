import { Stack } from "@mui/material"
import Typography from "@mui/material/Typography"

import "./App.css"
import { Outlet, Link } from "react-router-dom"
import CallActivities from "./functions/CallActivities"

function App() {
  CallActivities()
  return (
    <div className="App">
      <Stack
        direction="column"
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h1" component="div">
          Strava Tracking App
        </Typography>
        <button>
          <Link to="monthly">To Monthley</Link>
        </button>
        <button>
          <Link to="/">To ActiveResume</Link>
        </button>
        <div className="outlateContainer">
          <Outlet />
        </div>
      </Stack>
    </div>
  )
}

export default App
