import Loader from 'components/loader';
import { GetAll } from 'modules'
import React from 'react'

const CustomerMoneyCirculation = () => {
  return (
    <GetAll queryKey={['customer-money-circulation']} url={'/users-finance/'}>
        {
            ({items, isLoading})=>{
                if(isLoading) return <Loader/>
                console.log(items);
                return <div>CustomerMoneyCirculation</div>;
            }
        }
    </GetAll>
  )
}

export default CustomerMoneyCirculation