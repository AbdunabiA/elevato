import Filters from "components/filters";
import { GetAll } from "modules";
import moment from "moment/moment";
import { useState } from "react";
import { thisMonth } from "services/dates";
import Cards from "../../components/cards";
import ProductDistribution from "../../components/tables/productDistribution";
import { EmployeeSmallCard } from "components/cards";
import EmployeeSmallCards from "../../components/employeeSmallCards";
import { BranchSalesCirculation } from "../../components/charts";
import { useParams } from "react-router-dom";
import Loader from "components/loader";
import { useGet } from "crud";
const Branch = () => {
  const [staticDate, setStaticDate] = useState(thisMonth());
  const [month, setMonth] = useState(null);
  const { id } = useParams();

  return (
    <div className="container">
      <GetAll
        queryKey={["admin-branch"]}
        url={`/admin-warehouses/${id}/month/${
          month ? moment(month).format("YYYY-MM") : staticDate
        }/`}
      >
        {({ items, isLoading }) => {
          if (isLoading) return <Loader />;
          const infos = [
            items?.total_income,
            items?.days,
            items?.products_amount,
          ];
          console.log(items);
          return (
            <>
              <Filters {...{ staticDate, setStaticDate, month, setMonth }} />
              <Cards {...{ infos }} />
              <EmployeeSmallCards data={items?.employees} />
              <ProductDistribution
                data={items?.products_history}
                warehouse={items?.warehouse}
              />
              <BranchSalesCirculation data={items} />
            </>
          );
        }}
      </GetAll>
    </div>
  );
};
export default Branch;
