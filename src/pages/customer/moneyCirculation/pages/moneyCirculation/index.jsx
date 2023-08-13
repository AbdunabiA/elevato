import Filters from "components/filters";
import { GetAll } from "modules";
import React, { useState } from "react";
import { thisMonth } from "services/dates";
import Cards from "../../components/cards";
import SubscribersTable from "../../components/subscribersTable";
import moment from "moment";
import Loader from "components/loader";
import ErrorPage from "components/errorPage";

const CustomerMoneyCirculation = () => {
  const [staticDate, setStaticDate] = useState(thisMonth());
  const [month, setMonth] = useState(null);

  return (
    <GetAll queryKey={["customer-money-circulation"]} url={"/users-finance/"}>
      {({ items, isLoading, isError, error }) => {
        if (isLoading) return <Loader />;
        if (isError) return <ErrorPage {...{error}}/>
        // console.log(items);
        const infos = [
          items?.total_money,
          items?.on_progress,
          items?.bet,
          items?.expense,
        ];
        return (
          <div className="container">
            <Filters {...{ staticDate, setStaticDate, month, setMonth }} />
            <Cards {...{ infos }} />
            <SubscribersTable data={items?.money}/>
          </div>
        );
      }}
    </GetAll>
  );
};

export default CustomerMoneyCirculation;
