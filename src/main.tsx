import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./Redux/store"
import App from "./App"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MonthlyActivities from "./pages/MonthlyActivities"
import ActivitiesPage from "./pages/ActivitiePage"
import DetailMonthlyPage from "./pages/DetailMonthly"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ActivitiesPage />,
      },
      {
        path: "monthly",
        element: <MonthlyActivities />,
      },
      {
        path: "monthly/monthlydetail/:id",
        element: <DetailMonthlyPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
