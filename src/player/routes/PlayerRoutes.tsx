import { Route, Routes } from "react-router-dom"

import { PlayerLayout, Search, NotImplemented } from "../";

export const PlayerRoutes = () => {
  return (
    <>
      <PlayerLayout>
          <Routes>
              <Route path="/search" element={<Search />} />
              <Route path="/*" element={<NotImplemented />} />
          </Routes>
      </PlayerLayout>
    </>
  )
}
