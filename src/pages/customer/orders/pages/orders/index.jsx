import Loader from 'components/loader';
import { GetAll } from 'modules'
import React from 'react'

const CustomerOrders = () => {
  return (
    <GetAll queryKey={['customers-orders']} url={'/users-products/order'}>
        {
            ({items, isLoading})=>{
                if(isLoading) return <Loader/>

                console.log(items);
                return <div>CustomerOrders</div>;
            }
        }
    </GetAll>
  )
}

export default CustomerOrders