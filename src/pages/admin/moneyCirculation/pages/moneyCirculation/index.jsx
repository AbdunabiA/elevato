import Filters from 'components/filters'
import { GetAll } from 'modules'
import React, { useState } from 'react'
import { getLastMonth } from 'services/dates';
import Cards from '../../components/cards';
import SubscribersTable from '../../components/subscribersTable';

const MoneyCirculation = () => {
  const [staticDate, setStaticDate] = useState(getLastMonth());
  const [month, setMonth] = useState(null);
  return (
    <div className='container'>
      {/* <GetAll> */}
        {
          (()=>{
            const infos = [100000000, 500, 500000, 500000, 2000000]
            return (
              <>
                <Filters {...{ staticDate, setStaticDate, month, setMonth }} />
                <Cards {...{infos}}/>
                <SubscribersTable/>
              </>
            );
          })()
        }
      {/* </GetAll> */}
    </div>
  )
}

export default MoneyCirculation