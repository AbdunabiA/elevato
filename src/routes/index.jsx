import React, { Suspense, useState} from "react";
import Layout  from "../components/layout";
import { Route, Routes } from "react-router-dom";
import {pages, authRoutes} from "./routes";
import { storage } from "services";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";
// import { get } from "lodash";

const appRoutes = (routes) => {
  return routes.map((route, key) => (
    <React.Fragment key={key}>
      <Route
        path={route.path}
        element={<Suspense fallback="LOADING...">{route.component}</Suspense>}
      />
      {route.children && appRoutes(route.children)}
    </React.Fragment>
  ));
};


const routesWrapper = () => {
//   const { isAuthenticated } = useSelector((state) => get(state, "auth"));
const isAuthenticated = true
// const role =
  // const [role, setRole] = useState('admin')
  // if (storage.get("role") !== role){
  //   setRole(storage.get("role"))
  // } else {
  //   setRole('admin')
  // }
  const role = useSelector((state) => state.auth.role);

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
