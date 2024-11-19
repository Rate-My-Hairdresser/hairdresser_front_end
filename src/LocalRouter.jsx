import React, { Fragment } from "react";
import { Route, Routes } from 'react-router-dom';
import HairdresserPage from './pages/hairdresser_page';
import Homepage from "./pages/home_page";import FavoritesPage from './pages/favorite_page';
import HairDresserLogin from "./pages/login_page/index";
import HairDresserSignUp from "./pages/signup_page/index";


  

/*
    How to use the router:

    When adding a new page please add a new <Route> element

    path="/<insert path here>"

    this is how the address is gotten to:
    i.e http://localhost:3000/hairdresser : path="/hairdresser"
    
    element is just the page itself
*/


const RoutesTree = () => {
  return (
    <div>
      <Routes>
        <Fragment>
            <Route path="/hair_page" element={<HairdresserPage />}/>
            <Route path="/" element={<Homepage />}/>
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/login" element={<HairDresserLogin />} />
            <Route path="/register" element={<HairDresserSignUp/>} />
        </Fragment>
      </Routes>
    </div>
  )
}

export default RoutesTree;