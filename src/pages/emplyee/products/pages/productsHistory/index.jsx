import ErrorPage from "components/errorPage";
import Loader from "components/loader";
import Table from "components/tables/table";
import { GetAll } from "modules";
import React from "react";
import HistoryOfProducts from "../../components/historyOfProducts";

const EmployeeProductsHistory = () => {
  return (
    <GetAll
      queryKey={["employee-products-history"]}
      url={"/employees-products/history/"}
    >
      {({ items, isLoading, isError, error }) => {
        if (isLoading) return <Loader />;
        if (isError) return <ErrorPage />;
        console.log(items);
        return (
          <div className="container">
            <HistoryOfProducts data={items?.products_history}/>
          </div>
        );
      }}
    </GetAll>
  );
};

export default EmployeeProductsHistory;
