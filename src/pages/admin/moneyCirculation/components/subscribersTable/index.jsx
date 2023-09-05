import WhiteRowTable from "components/tables/whiteRowTable";
import { obunachilar } from "assets/db";
import { formatNums } from "services/formatNums";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './subscribersTable.scss'
import { useTranslation } from "react-i18next";

const SubscribersTable = ({ data }) => {
  const navigate = useNavigate();
  const {t} = useTranslation()
  const dataCorrected = data.reduce((total, curr)=>{
    console.log(curr);
    return [
      ...total,
      {
        id:curr?.id,
        ["bet"]: curr?.bet,
        ["on_progress"]: curr?.on_progress,
        ["expense"]: curr?.expense,
        ["status"]: curr?.status?.name,
        full_name: `${curr?.first_name} ${curr?.last_name}`,
      },
    ];
  }, [])
  // console.log(dataCorrected);
  const columns = [
    {
      title: t("F.I.SH"),
      key: "full_name",
    },
    {
      title: t("Kiritilgan pul"),
      key: "bet",
      render: (value) => (
        <>
          {formatNums(value)} <span style={{ color: "#B2B7C1" }}>$</span>
        </>
      ),
    },
    {
      title: t("Progress"),
      key: "on_progress",
      render: (value) => (
        <>
          {formatNums(value)} <span style={{ color: "#B2B7C1" }}>$</span>
        </>
      ),
    },
    {
      title: t("Yechib olingan pul"),
      key: "expense",
      render: (value) => (
        <>
          {formatNums(value)} <span style={{ color: "#B2B7C1" }}>$</span>
        </>
      ),
    },
    {
      title: t("Status"),
      key: "status",
    },
  ];
  return (
    <>
      <div className="money-circilation-table-users">
        <h1 className="title">{t("Mijoz")}</h1>
      </div>
      <WhiteRowTable
        {...{ columns }}
        onRowClick={(data) => console.log(data)}
        data={dataCorrected}
        hasPagination
      />
    </>
  );
};

export default SubscribersTable;
