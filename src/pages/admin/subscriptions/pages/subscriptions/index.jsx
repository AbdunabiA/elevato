import Filters from "components/filters"
import { GetAll } from "modules"
import { useState } from "react";
import { thisMonth } from "services/dates";
import Cards from "../../components/cards";
import SubscriptionsTable from "../../components/table";
import Loader from "components/loader";



const Subscriptions = () => {
    const [staticDate, setStaticDate] = useState(thisMonth());
    const [month, setMonth] = useState(null);

  return (
    <div className="container">
        <GetAll queryKey={['admin-subscriptions']} url={'/admin-status-packages'}>
            {
                ({items, isLoading})=>{
                  if(isLoading) return <Loader/>
                    const cardsInfoes = [items.total_income, items?.bonus, items?.users]
                    console.log(items);
                    return (
                      <>
                        <Filters
                          {...{ staticDate, setStaticDate, month, setMonth }}
                        />
                        <Cards infos={cardsInfoes}/>
                        <SubscriptionsTable data={items?.statuses}/>
                      </>
                    );
                }
            }
        </GetAll>
    </div>
  )
}

export default Subscriptions