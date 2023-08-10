import { ProductCard } from 'components/cards';
import ErrorPage from 'components/errorPage';
import Loader from 'components/loader';
import { GetAll } from 'modules'
import React from 'react'

const CustomerOrders = () => {
  return (
    <GetAll queryKey={["users-products-order"]} url={"/users-products/order"}>
      {({ items, isLoading, isError, error }) => {
        if (isLoading) return <Loader />;
        if(isError) return <ErrorPage {...{error}}/>
        console.log(items);
        return (
          <div className="container">
            {items?.orders?.map((prod) => {
              return prod?.products?.map((elem, i) => {
                if (!elem.deleted)
                  return (
                    <React.Fragment key={i}>
                      <ProductCard data={elem} />
                    </React.Fragment>
                  );
              });
            })}
          </div>
        );
      }}
    </GetAll>
  );
}

export default CustomerOrders