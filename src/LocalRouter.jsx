import React, { Fragment } from "react";
import { Route, Routes } from 'react-router-dom';
import HairdresserPage from './pages/hairdresser_page';
import HairdresserFrontPage from "./pages/hairdresser_frontpage";
import HairdresserLoginPage from "./pages/hairdresser_login";


  

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
            <Route path="/" element={<HairdresserPage />}/>
            <Route path="/frontpage" element={<HairdresserFrontPage/>}/>
            <Route path="/login" element={<HairdresserLoginPage />}/>
        </Fragment>
      </Routes>
    </div>
  )
}

export default RoutesTree;