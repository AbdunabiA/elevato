import Filters from 'components/filters'
import { GetAll } from 'modules'
import React, { useState } from 'react'
import { getLastMonth } from 'services/dates';
import Cards from '../../components/cards';
import SubscribersTable from '../../components/subscribersTable';
import moment from 'moment';
import Loader from 'components/loader';
import ErrorPage from 'components/errorPage';

const MoneyCirculation = () => {
  const [staticDate, setStaticDate] = useState(getLastMonth());
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
              <SubscribersTable />
            </>
          );
        }}
      </GetAll>
    </div>
  );
}

export default MoneyCirculation