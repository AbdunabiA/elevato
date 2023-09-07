import Filters from 'components/filters'
import { GetAll } from 'modules'
import React, { useState } from 'react'
import { thisMonth } from 'services/dates';
import Cards from '../../components/cards';
import SubscribersTable from '../../../users/components/subscribersTable';
import moment from 'moment';
import Loader from 'components/loader';
import ErrorPage from 'components/errorPage';
import MoneyOrdersTable from '../../components/moneyOrdersTable';

const MoneyCirculation = () => {
  const [staticDate, setStaticDate] = useState(thisMonth());
  const [month, setMonth] = useState(null);
  
  return (
    <div className="container">
      <GetAll
        queryKey={["money-circulation"]}
        url={`/admin-finance/month/${
          month ? moment(month).format("YYYY-MM") : staticDate
        }/`}
      >
        {({ items, isLoading, isError, error }) => {
          if (isLoading) return <Loader />;
          if (isError) return <ErrorPage {...{ error }} />;
          const infos = [
            items?.head_info?.total_income,
            items?.head_info?.bonus,
            items?.head_info?.admin_income,
            items?.head_info?.admin_expenses,
          ];
          console.log(items);
          return (
            <>
              <Filters {...{ staticDate, setStaticDate, month, setMonth }} />
              <Cards {...{ infos }} />
              <MoneyOrdersTable data={items?.money_orders}/>
            </>
          );
        }}
      </GetAll>
    </div>
  );
}

export default MoneyCirculation