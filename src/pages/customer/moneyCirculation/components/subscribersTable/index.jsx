import WhiteRowTable from "components/tables/whiteRowTable";
import { obunachilar } from "assets/db";
import { formatNums } from "services/formatNums";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './subscribersTable.scss'
import { useTranslation } from "react-i18next";

const SubscribersTable = ({ data }) => {
  const {t, i18n} = useTranslation()
  const navigate = useNavigate();
  const dataCorrected = data.reduce((total, curr)=>{
    return [...total, {amount:curr.amount, full_name:`${curr.user.first_name} ${curr.user.last_name}`, comment_ru:curr.comment_ru, comment_uz:curr.comment_uz}]
  }, [])
  // console.log(dataCorrected);
  const columns = [
    {
      title: t("F.I.SH"),
      key: "full_name",
    },
    {
      title: t("Summa"),
      key: "amount",
      render: (value) => (
        <>
          {formatNums(value)} <span style={{ color: "#B2B7C1" }}>$</span>
        </>
      ),
    },
    {
      title: t("Holati"),
      key: `comment_${i18n.language}`,
    },
  ];
  return (
    <>
      <div className="money-circilation-table-users">
        {/* <h1 className="title">Mijoz</h1> */}
      </div>
      <WhiteRowTable
        {...{ columns }}
        // onRowClick={(data) => navigate(`/subscriber/${data.id}`)}
        data={dataCorrected}
        hasPagination
      />
    </>
  );
};

export default SubscribersTable;
