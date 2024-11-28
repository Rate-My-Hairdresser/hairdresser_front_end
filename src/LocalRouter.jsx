import React, { Fragment } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import HairdresserPage from './pages/hairdresser_page';
import Homepage from "./pages/home_page";import FavoritesPage from './pages/favorite_page';
import HairDresserLogin from "./pages/login_page/index";
import HairDresserSignUp from "./pages/signup_page/index";
import TopAnchoredMenu from "./components/navigation_drawer";
import styled from "styled-components";



function App() {
  const location = useLocation();
  
  // Check if the current path starts with '/auth'
  const isAuthPath = location.pathname.startsWith('/auth');
  return (
    <div>
      <Main>
        {!isAuthPath && <TopAnchoredMenu />}
        <Routes>
          <Fragment>
            <Route path="auth">
              <Route path="login" element={<HairDresserLogin />} />
              <Route path="register" element={<HairDresserSignUp />} />
            </Route>
            <Route path="hair_page" element={<HairdresserPage />} />
            <Route path="" element={<Homepage />} />
            <Route path="favorites" element={<FavoritesPage />} />
          </Fragment>
        </Routes>
      </Main>
    </div>
  );
}

const Main = styled.div`
  padding-top: 100px;

`

export default App;
