import { useState,} from "react";
import "./home.scss";
// import {GetAll} from "modules";
import { getLastMonth } from "services/dates";
// import moment from "moment";
import Filters from "components/filters";
import Cards from "./components/cards";
import Charts from "./components/charts";


const Index = () => {
  const [staticDate, setStaticDate] = useState(getLastMonth());
  const [month, setMonth] = useState(null)
  // console.log(
  //   moment(month).format("DD-MM-YYYY")
  // );
  
  return (
    <div className="container">
      {/* <GetAll queryKey={[]}> */}
      {(() => {
        const infos = [80000000, 591, 100000, 73580]
        return (
          <>
            <Filters {...{ staticDate, setStaticDate, month, setMonth }} />
            <Cards {...{ infos }} />
            <Charts />
          </>
        );
      })()}
      {/* </GetAll>  */}
    </div>
  );
};

export default Index;
