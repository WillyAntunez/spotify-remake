import { Route, Routes } from "react-router-dom"

import { PlayerLayout } from "../";
import { Home } from "../";

export const PlayerRoutes = () => {
  return (
    <PlayerLayout>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </PlayerLayout>
  )
}
