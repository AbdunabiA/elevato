import Filters from "components/filters";
import { GetAll } from "modules";
import { useState } from "react";
import { getLastMonth, thisMonth } from "services/dates";
import HistoryOfProducts from "../../components/tables/historyOfProducts";
import moment from "moment";
import { formatNums } from "services/formatNums";
import Loader from "components/loader";
import ErrorPage from "components/errorPage";

const ProductsHistory = () => {
  // const [staticDate, setStaticDate] = useState(thisMonth());
  // const [month, setMonth] = useState(null);
  return (
    <div className="container">
      <GetAll queryKey={["admin-products"]} url={"/admin-products"}>
        {({ items, isLoading, isError, error }) => {
          if (isLoading) return <Loader />;
          if (isError) return <ErrorPage {...{ error }} />;

          const correctedData = items.distribution.reduce((prev, curr) => {
            return [
              ...prev,
              {
                date: moment(curr.dateTime).format("DD/MM/YYYY"),
                product: curr.product.name,
                amount: curr.amount,
                branch: curr.warehouse.name,
                overallPayment: formatNums(curr.summa),
              },
            ];
          }, []);
          return (
            <>
              {/* <Filters {...{ staticDate, setStaticDate, month, setMonth }} /> */}
              <HistoryOfProducts data={correctedData}/>
            </>
          );
        }}
      </GetAll>
    </div>
  );
};

export default ProductsHistory;
