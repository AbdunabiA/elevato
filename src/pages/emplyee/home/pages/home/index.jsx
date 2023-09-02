import ErrorPage from "components/errorPage";
import Filters from "components/filters";
import Loader from "components/loader";
import { GetAll } from "modules";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { thisMonth } from "services/dates";
import Cards from "../../components/cards";
import OrdersTables from "../../components/ordersTable";


const EmployeeHome = () => {
  const [staticDate, setStaticDate] = useState(thisMonth());
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [month, setMonth] = useState(null);
  return (
    <GetAll
      queryKey={["employee-home"]}
      url={`/employees-main/month/${
        month ? moment(month).format("YYYY-MM") : staticDate
      }/`}
    >
      {({items, isLoading, isError, error}) => {
        if(isLoading) return <Loader/>
        if(isError) return <ErrorPage {...{error}}/>
        const infos = [
          items?.total_sale,
          items?.users_count,
          items?.days,
          items?.residual_products,
        ];
        console.log(items);
        return (
          <div className="container">
            <Filters {...{ staticDate, setStaticDate, month, setMonth }} />
            <Cards {...{infos}}/>
            <OrdersTables data={items?.orders} />
          </div>
        );
      }}
    </GetAll>
  );
}

export default EmployeeHome