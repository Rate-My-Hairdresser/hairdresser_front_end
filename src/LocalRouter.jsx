import React, { Fragment, useState } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import HairdresserPage from './pages/hairdresser_page';
import Homepage from "./pages/home_page";import FavoritesPage from './pages/favorite_page';
import HairDresserLogin from "./pages/login_page/index";
import HairDresserSignUp from "./pages/signup_page/index";
import TopAnchoredMenu from "./components/navigation_drawer";
import styled from "styled-components";
import { colors } from "./general/colors";

import HairDresserUserMenu from "./components/navigation_drawer/hairdresser_usermenu";
import PasswordRecoveryPage from "./pages/passrecovery_page";



function App() {
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

  // Check if the current path starts with '/auth'
  const isAuthPath = location.pathname.startsWith('/auth');
  return (
    <div>
      <div style={ !isAuthPath ? {paddingTop: '100px'} : {}}>
        {!isAuthPath && <TopAnchoredMenu />}
        <Routes>
          <Fragment>
            <Route path="auth">
              <Route path="login" element={<HairDresserLogin />} />
              <Route path="register" element={<HairDresserSignUp />} />
              <Route path="password_reset" element={<PasswordRecoveryPage />} />
            </Route>
            <Route path="hair_page" element={<HairdresserPage />} />
            <Route path="" element={<Homepage />} />
            <Route path="favorites" element={<FavoritesPage />} />
          </Fragment>
        </Routes>
      </div>
    </div>
  );
}

export default App;