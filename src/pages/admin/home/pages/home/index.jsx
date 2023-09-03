import { useState } from "react";
import "./home.scss";
import {GetAll} from "modules";
import { thisMonth } from "services/dates";
import moment from "moment";
import Filters from "components/filters";
import Cards from "../../components/cards";
import Charts from "../../components/charts";
import { useTranslation } from "react-i18next";
import Loader from "components/loader";


const Home = () => {
  const [staticDate, setStaticDate] = useState(thisMonth());
  const [month, setMonth] = useState(null);
  const {t, i18n} = useTranslation()
  // console.log(
  //   moment(month).format("DD-MM-YYYY")
  // );
  return (
    <div className="container">
      <GetAll
        queryKey={["home-data"]}
        url={`/admin-main/month/${
          month ? moment(month).format("YYYY-MM") : staticDate
        }/`}
        onError={()=>{}}
      >
        {({items, isLoading, isError, error}) => {
        if(isLoading) return <Loader/>
        console.log('Error',error);
        if(isError) return <p>error</p>
          const infos = [items?.total_income, items?.users, items?.days, items?.products_amount];
          console.log(items);
          return (
            <>
              <Filters {...{ staticDate, setStaticDate, month, setMonth }} />
              <Cards {...{ infos }} />
              <Charts data={items}/>
            </>
          );
        }}
      </GetAll>
    </div>
  );
};

export default Home;
