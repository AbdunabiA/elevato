// import { Home } from "pages/admin";
import { Home,Branches, Branch } from "pages/admin";



const pages = {
  admin: [
    {
      path: "/",
      component: <Home />,
    },
    {
      path: "/branches",
      component: <Branches />,
      children:[
        {
          path:'/branches/:id',
          component:<Branch/>,
        }
      ]
    },
    // {
    //   path: "/product",
    //   component: <Product />,
    // },
    // {
    //   path: "/money-circulation",
    //   component: <MoneyCirculation />,
    // },
    // {
    //   path: "/statistics",
    //   component: <Statistics />,
    // },
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