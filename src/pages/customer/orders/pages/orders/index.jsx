import { ProductCard } from 'components/cards';
import Loader from 'components/loader';
import { GetAll } from 'modules'
import React from 'react'

const CustomerOrders = () => {
  return (
    <GetAll queryKey={["users-products"]} url={"/users-products"}>
      {({ items, isLoading }) => {
        if (isLoading) return <Loader />;

        console.log(items);
        return (
          <div className="container">
            {items?.map((prod) => {
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