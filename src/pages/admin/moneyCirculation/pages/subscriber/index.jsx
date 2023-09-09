import { GetAll } from "modules";
import React from "react";
import SubscriberInfoForm from "../../components/subscriberInfoForm";
import FinancialInfo from "../../components/financialInfo";
import { useParams } from "react-router-dom";
import Loader from "components/loader";
import ErrorPage from "components/errorPage";

const Subscriber = () => {
    const {id} = useParams()
  return (
    <div className="container">
      <GetAll
        queryKey={['admin-user-info']}
        url={`/admin-users/${id}`}
      >
        {({ items, isLoading, isError, error }) => {
          if(isLoading) return <Loader/>
          if(isError) return <ErrorPage {...{error}}/>
          // console.log(items);
          return (
            <>
              <SubscriberInfoForm data={items}/>
              <FinancialInfo data={items?.financial_information}/>
            </>
          );
        }}
      </GetAll>
    </div>
  );
};

export default Subscriber;
