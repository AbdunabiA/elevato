import { Button } from "components/buttons";
import WhiteRowTable from "components/tables/whiteRowTable"
import { formatNums } from "services/formatNums";
import { subscriptionsInfo } from "assets/db";
import { useNavigate } from "react-router-dom";


const SubscriptionsTable = ({data}) => {
  const navigate = useNavigate()
  const filteredData = data.filter(el => el.deleted !== true)
    const columns = [
      {
        title: "obuna nomlari",
        key: "name",
      },
      {
        title: "ulanish summasi",
        key: "price",
        render: (value) => (
          <>
            {formatNums(value)} <span style={{ color: "#B2B7C1" }}>$</span>
          </>
        ),
      },
      {
        title: "bonus",
        key: "daily_bonus",
        render: (value) => (
          <>
            {value}$
          </>
        ),
      },
      {
        title: "keshbek",
        key: "cashback",
        render: (value) => (
          <>
            {value} <span style={{ color: "#B2B7C1" }}>%</span>
          </>
        ),
      },
      {
        title:"Oylik bonus",
        key:"monthly_bonus",
        render:(value)=> `${value}$`
      },
      {
        title:"Tahrirlash",
        render:(_, row)=><Button text={'Batafsil'} onClick={()=>navigate(`/subscriptions/update/${row.id}`)}/>
      },
      {
        title:"holati",
        key:"deleted",
        render:(value)=><span>{value}</span>
      }
    ];
  return (
    <WhiteRowTable
      columns={columns}
      data={filteredData}
      hasPagination
      total={10}
    />
  );
}

export default SubscriptionsTable