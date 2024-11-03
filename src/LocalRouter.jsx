import React, { Fragment } from "react";
import { Route, Routes } from 'react-router-dom';
import HairdresserPage from './pages/hairdresser_page';


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
        </Fragment>
      </Routes>
    </div>
  )
}

export default RoutesTree;