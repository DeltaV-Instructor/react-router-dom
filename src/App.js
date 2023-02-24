import React from "react";
import "./App.css";
//1. Import our other components
import AboutUs from './pages/AboutUs';
import OtherContent from './pages/FAQ';
import NavHeader from "./components/NavHeader";
//Docs = https://reactrouter.com/en/main/start/overview
//2. Step one add npm i react-router-dom@6.4.4
//https://www.npmjs.com/package/react-router-dom/v/6.4.4

//3. Add the import for our router. 
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


//3. add our create Browser router 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavHeader />}>
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="othercontent" element={<OtherContent />} />
    </Route>
  )
);


class App extends React.Component {
  render() {
    return (
      <>
        <h1>Lets add some router Navigation</h1>
        <RouterProvider router={router} />
      </>
    );
  }
}

export default App;
