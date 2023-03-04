import { Route, Routes } from "react-router-dom"

import { PlayerLayout, Search, NotImplemented, PlayerNavbar } from "../";

export const PlayerRoutes = () => {
  return (
    <>
      <PlayerLayout>
          <PlayerNavbar />
          <Routes>
              <Route path="/search" element={<Search />} />
              <Route path="/*" element={<NotImplemented />} />
          </Routes>
      </PlayerLayout>
    </>
  )
}
