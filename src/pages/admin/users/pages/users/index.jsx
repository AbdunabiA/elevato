import ErrorPage from "components/errorPage";
import Loader from "components/loader";
import { GetAll } from "modules";
import React, { useState } from "react";
import { thisMonth } from "services/dates";
import SubscribersTable from "../../components/subscribersTable";

const AdminUsers = () => {
  const [staticDate, setStaticDate] = useState(thisMonth());
  return (
    <div className="container">
      <GetAll
        queryKey={["money-circulation"]}
        url={`/admin-finance/month/${staticDate}/`}
      >
        {({ items, isLoading, isError, error }) => {
          if (isLoading) return <Loader />;
          if (isError) return <ErrorPage />;
          return <SubscribersTable data={items?.users_payments} />;
        }}
      </GetAll>
    </div>
  );
};

export default AdminUsers;
