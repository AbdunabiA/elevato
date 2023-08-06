// import { Home } from "pages/admin";
import { Home,Branches, Branch, BranchEmployees, Products, ProductsHistory, Statistics, MoneyCirculation, Subscriber, Employee, AddProduct, Subscriptions, CreateTariff, UpdateTariff, UpdateProduct } from "pages/admin";

import {CustomerHome, CustomerProducts, CustomerMoneyCirculation, CustomerOrders, CustomerSubscriptions, CustomerProfile} from 'pages/customer'

import { SignIn, SignUp } from "pages/authPages";

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
          path: "/branch/:id",
          component: <Branch />,
        },
        {
          path: "/branch/:id/employees",
          component: <BranchEmployees />,
        },
      ],
    },
    {
      path: "/products",
      component: <Products />,
      children: [
        {
          path: "/products/history",
          component: <ProductsHistory />,
        },
        {
          path: "/add-product",
          component: <AddProduct />,
        },
        {
          path:'/update-product/:id',
          component:<UpdateProduct/>
        }
      ],
    },
    {
      path: "/money-circulation",
      component: <MoneyCirculation />,
    },
    {
      path: "/statistics",
      component: <Statistics />,
    },
    {
      path: "/subscriber/:id",
      component: <Subscriber />,
    },
    {
      path: "/employee/:id",
      component: <Employee />,
    },
    {
      path: "/subscriptions",
      component: <Subscriptions />,
    },
    {
      path: "/subscriptions/create",
      component: <CreateTariff />,
    },
    {
      path: "/subscriptions/update/:id",
      component: <UpdateTariff />,
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
  ordinary_user: [
    {
      path: "/",
      component: <CustomerHome />,
    },
    {
      path: "/products",
      component: <CustomerProducts />,
    },
    {
      path: "/money-circulation",
      component: <CustomerMoneyCirculation />,
    },
    {
      path: "/subscriptions",
      component: <CustomerSubscriptions />,
    },
    {
      path: "/orders",
      component: <CustomerOrders />,
    },
    {
      path: "/profile",
      component: <CustomerProfile />,
    },
  ],
};

const authRoutes = [
  {
    path: "/sign-in",
    component: <SignIn />,
  },
  {
    path: "/sign-up",
    component: <SignUp />,
  },
];


export {pages, authRoutes}