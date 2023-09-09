import { Home,Branches, Branch, BranchEmployees, Products, ProductsHistory, Statistics, MoneyCirculation, Subscriber, Employee, AddProduct, Subscriptions, CreateTariff, UpdateTariff, UpdateProduct, AdminAddBranch, AdminUpdateBranch, AdminSettings, AdminUsers, AdminNotifications} from "pages/admin";

import {CustomerHome, CustomerProducts, CustomerMoneyCirculation, CustomerOrders, CustomerSubscriptions, CustomerProfile, CustomerNotifications} from 'pages/customer'

import { EmployeeHome, EmployeeMoneyCirculation, EmployeeBranches, EmployeeBranchEmployees, EmployeeProducts, EmployeeProductsHistory, EmployeeSalesHistory, EmployeeProduct, EmployeeSubscriptions } from "pages/emplyee";

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
        {
          path: "/branches/add",
          component: <AdminAddBranch />,
        },
        {
          path: "/branches/update/:id",
          component: <AdminUpdateBranch />,
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
          path: "/update-product/:id",
          component: <UpdateProduct />,
        },
      ],
    },
    {
      path: "/users",
      component: <AdminUsers />,
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
    {
      path: "/settings",
      component: <AdminSettings />,
    },
    {
      path: "/notifications",
      component: <AdminNotifications />,
    },
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
    {
      path: "/notifications",
      component: <CustomerNotifications />,
    },
  ],
  employee: [
    {
      path: "/",
      component: <EmployeeHome />,
    },
    {
      path: "/money-circulation",
      component: <EmployeeMoneyCirculation />,
    },
    {
      path: "/branches",
      component: <EmployeeBranches />,
      children: [
        {
          path: "/branches/employees",
          component: <EmployeeBranchEmployees />,
        },
      ],
    },
    {
      path: "/products",
      component: <EmployeeProducts />,
      children: [
        {
          path: "/products/history",
          component: <EmployeeProductsHistory />,
        },
        {
          path: "/products/sales-history",
          component: <EmployeeSalesHistory />,
        },
        {
          path: "/products/:id",
          component: <EmployeeProduct />,
        },
      ],
    },
    {
      path: "/subscriptions",
      component: <EmployeeSubscriptions />,
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