import { ProductCard } from 'components/cards';
import ErrorPage from 'components/errorPage';
import Loader from 'components/loader';
import { GetAll } from 'modules'
import React from 'react'
import Cards from '../../components/cards';

const CustomerOrders = () => {
  return (
    <GetAll queryKey={["users-products-order"]} url={"/users-products/order"}>
      {({ items, isLoading, isError, error }) => {
        if (isLoading) return <Loader />;
        if(isError) return <ErrorPage {...{error}}/>
        const infos = [items?.total_orders, items?.active_orders]
        console.log(items);
        return (
          <div className="container">
            <Cards infos={infos}/>
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