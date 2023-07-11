import Filters from "components/filters";
import { GetAll } from "modules";
import { useState } from "react";
import { getLastMonth } from "services/dates";
import HistoryOfProducts from "../../components/tables/historyOfProducts";


const ProductsHistory = () => {
  const [staticDate, setStaticDate] = useState(getLastMonth());
  const [month, setMonth] = useState(null);
  return (
    <div className="container">
      {/* <GetAll> */}
        {
          (()=>{
            return (
              <>
                <Filters {...{ staticDate, setStaticDate, month, setMonth }} />
                <HistoryOfProducts/>
              </>
            );
          })()
        }
      {/* </GetAll> */}
    </div>
  )
}

export default ProductsHistory