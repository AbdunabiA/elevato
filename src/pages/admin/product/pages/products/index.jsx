import Filters from "components/filters";
import { GetAll } from "modules";
import moment from "moment/moment";
import { useState } from "react";
import { getLastMonth } from "services/dates";
import Cards from "../../components/cards";
import ProductsSales from "../../components/productsSales";
import ProductsDistribution from "../../components/tables/productsDistribution";
import Loader from "components/loader";
import ProductsTable from "../../components/tables/productsTable";
import ErrorPage from "components/errorPage";

const Products = () => {
  
  // console.log(
  //   moment(month).format("DD-MM-YYYY")
  // );
  // console.log(staticDate);
  return (
    <div className="container">
      <GetAll queryKey={['admin-products']} url={'/admin-products'}>
      {({items, isLoading, isError, error}) => {
        if(isLoading) return <Loader/>
        if(isError) return <ErrorPage {...{error}}/>
        console.log(items);

        return (
          <>
            <Cards />
            <ProductsSales data={items.products_diagram} />
            <ProductsTable data={items.products} />
            <ProductsDistribution data={items.distribution} />
          </>
        );
      }}
      </GetAll> 
    </div>
  );
};

export default Products;
