// import { Home } from "pages/admin";
import { Home,Branches, Branch, BranchEmployees, Products, ProductsHistory, Statistics } from "pages/admin";



const pages = {
  admin: [
    {
      path: "/",
      component: <Home />,
    },
    {
      path: "/branches",
      component: <Branches />,
      children: [
        {
          path: "/branches/:id",
          component: <Branch />,
        },
        {
          path: "/branches/:id/employees",
          component: <BranchEmployees />,
        },
      ],
    },
    {
      path: "/product",
      component: <Products />,
    },
    {
      path: "/product/history",
      component: <ProductsHistory />,
    },
    // {
    //   path: "/money-circulation",
    //   component: <MoneyCirculation />,
    // },
    {
      path: "/statistics",
      component: <Statistics />,
      children: [
        {
          path: "/statistics/:id",
          component: <Branch />,
        },
      ],
    },
    // {
    //   path: "/settings",
    //   component: <Settings />,
    // },
    // {
    //   path: "/support",
    //   component: <Support />,
    // },
    // {
    //   path: "/big-leap",
    //   component: <BigLeap />,
    // },
  ],
};

const authRoutes = [

]


export {pages, authRoutes}