import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import UserInfo from "./Components/UserInfo/UserInfo.jsx";
import Github, { gitInfo } from "./Components/Github/Github.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact-us" element={<Contact />} />

        {/* by the below way we can get the parameters from the use dynamically by nesting   */}
      <Route path="userinfo" element={<UserInfo />}>
        <Route path=":data" element={<UserInfo />} />
      </Route>

      <Route loader={gitInfo} path="github" element={<Github/>}/>
              {/* we passed the function here but we need to use this data as well so refer to the line 3 of Github.jsx */}
    </Route>
  )
  );
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// const router = createBrowserRouter(
//     [{
//       path:'/',   //is a top level element
//       element:<Layout/>,
//       children:[
//         {
//           path:'',
//           element:<Home/>
//         },
//         {
//           path:"about",
//           element:<About/>
//         },{
//           path:'contact-us',
//           element:<Contact/>
//         }
//       ]
//     }]
// )

// the same thing can be done using more simpler syntax as well
