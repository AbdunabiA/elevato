import React, { Suspense} from "react";
import Layout  from "../components/layout";
import { Route, Routes } from "react-router-dom";
import {pages, authRoutes} from "./routes";
// import { useSelector } from "react-redux";
// import { get } from "lodash";

const appRoutes = (routes) => {
  
  return routes.map((route, key) => (
  
      <React.Fragment key={key}>
        <Route
          path={route.path}
          element={route.component}
          />
        {route.children && appRoutes(route.children)}
      </React.Fragment>

  ));
};


const routesWrapper = () => {
//   const { isAuthenticated } = useSelector((state) => get(state, "auth"));
const isAuthenticated = true
const role = "admin";
  return (
    <Routes>
      <Route path="*" element={<h2>Not Fonund</h2>} />
      {isAuthenticated ? (
        <Route path="/" element={<Layout />}>
          {appRoutes(pages[role])}
        </Route>
      ) : (
        appRoutes(authRoutes)
      )}
    </Routes>
  );
  // return <Routes>{appRoutes(privateRoutes)}</Routes>;
};

export default routesWrapper;
