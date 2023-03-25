import { Route, Routes } from "react-router-dom"

import { PlayerLayout, Search, NotImplemented, Genre, Categories, Playlist } from "../";

export const PlayerRoutes = () => {
  return (
    <>
      <PlayerLayout>
          <Routes>
              <Route path="/search" element={<Categories />} />
              <Route path="/genre/:id" element={ <Genre /> } />
              <Route path="/playlist/:id" element={ <Playlist /> } />
              <Route path="/*" element={<NotImplemented />} />
          </Routes>
      </PlayerLayout>
    </>
  )
}
