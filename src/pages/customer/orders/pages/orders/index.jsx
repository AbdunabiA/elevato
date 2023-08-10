import { ProductCard } from 'components/cards';
import ErrorPage from 'components/errorPage';
import Loader from 'components/loader';
import { GetAll } from 'modules'
import React from 'react'
import Cards from '../../components/cards';
import OrderedProductCard from 'components/cards/orderedProductCard';
import './orders.scss'

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
            <Cards infos={infos} />
            {/* <OrderedProductCard /> */}
            {items?.orders?.map((prod, i) => {
                if (!prod.deleted)
                  return (
                    <div className='ordered-products__wrapper' key={i}>
                      <OrderedProductCard data={prod} />
                    </div>
                  );
            })}
          </div>
        );
      }}
    </GetAll>
  );
}

export default CustomerOrders