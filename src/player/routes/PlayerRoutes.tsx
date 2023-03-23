import { Route, Routes } from "react-router-dom"

import { PlayerLayout, Search, NotImplemented, Genre } from "../";

export const PlayerRoutes = () => {
  return (
    <>
      <PlayerLayout>
          <Routes>
              <Route path="/search" element={<Search />} />
              <Route path="/genre/:id" element={ <Genre /> } />
              <Route path="/*" element={<NotImplemented />} />
          </Routes>
      </PlayerLayout>
    </>
  )
}
