import { useState,} from "react";
import "./index.scss";
import {GetAll} from "modules";
import { getLastMonth } from "services/dates";
import moment from "moment";
import Filters from "components/filters";


const Index = () => {
  const [filter, setFIlter] = useState(getLastMonth());
  const [date, setDate] = useState(null)
  // console.log(
  //   moment(date).format("DD-MM-YYYY")
  // );
  
  return (
    <div className="container">
      {/* <GetAll queryKey={[]}> */}
      {(() => {
        return (
          <>
            <Filters {...{filter, setFIlter, date, setDate}}/>
          </>
        );
      })()}
      {/* </GetAll>  */}
    </div>
  );
};

export default Index;
