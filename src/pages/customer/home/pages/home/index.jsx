import Loader from 'components/loader';
import { GetAll } from 'modules';
import React, { useState } from 'react'
import Cards from '../../components/cards';
import { getLastMonth } from 'services/dates';
import Filters from 'components/filters';
import Charts from '../../components/carts';

const CustomerHome = () => {
  const [staticDate, setStaticDate] = useState(getLastMonth());
  const [month, setMonth] = useState(null);
  return (
    <GetAll queryKey={['']}>
      {
        ({items, isLoading})=>{
          if(isLoading) return <Loader/>
          const infos = [600000, 5000, 40]
          return (
            <div className="container">
              <Filters {...{ staticDate, setStaticDate, month, setMonth }} />
              <Cards {...{ infos }} />
              <Charts/>
            </div>
          );
        }
      }
    </GetAll>
  )
}

export default CustomerHome