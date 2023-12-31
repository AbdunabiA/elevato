import { Button } from "components/buttons";
import WhiteRowTable from "components/tables/whiteRowTable"
import { formatNums } from "services/formatNums";
import { subscriptionsInfo } from "assets/db";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


const SubscriptionsTable = ({data}) => {
  const navigate = useNavigate()
  const {t} = useTranslation()
  const filteredData = data.filter(el => el.deleted !== true)
    const columns = [
      {
        title: t("obuna nomlari"),
        key: "name",
      },
      {
        title: t("ulanish summasi"),
        key: "price",
        render: (value) => (
          <>
            {formatNums(value)} <span style={{ color: "#B2B7C1" }}>$</span>
          </>
        ),
      },
      {
        title: t("Bonus"),
        key: "daily_bonus",
        render: (value) => (
          <>
            {value}$
          </>
        ),
      },
      {
        title: t("Keshbek"),
        key: "cashback",
        render: (value) => (
          <>
            {value} <span style={{ color: "#B2B7C1" }}>%</span>
          </>
        ),
      },
      {
        title:t("Oylik bonus"),
        key:"monthly_bonus",
        render:(value)=> `${value}$`
      },
      {
        title:t("Taxrirlash"),
        render:(_, row)=><Button text={t('Batafsil')} onClick={()=>navigate(`/subscriptions/update/${row.id}`)}/>
      },
      {
        title:t("Holati"),
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