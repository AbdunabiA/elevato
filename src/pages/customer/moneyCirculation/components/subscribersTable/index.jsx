import WhiteRowTable from "components/tables/whiteRowTable";
import { obunachilar } from "assets/db";
import { formatNums } from "services/formatNums";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './subscribersTable.scss'
import { useTranslation } from "react-i18next";

const SubscribersTable = ({ data }) => {
  const {t} = useTranslation()
  const navigate = useNavigate();
  const columns = [
    {
      title: t("F.I.SH"),
      key: "full_name",
    },
    {
      title: t("Obuna Summasi"),
      key: "subscription",
      render: (value) => (
        <>
          {formatNums(value)} <span style={{ color: "#B2B7C1" }}>UZS</span>
        </>
      ),
    },
    // {
    //   title: t("Jami bonus"),
    //   key: "all_bonus",
    //   render: (value) => (
    //     <>
    //       {formatNums(value)} <span style={{ color: "#B2B7C1" }}>UZS</span>
    //     </>
    //   ),
    // },
    {
      title: t("Yechilgan summa"),
      key: "clean_out",
      render: (value) => (
        <>
          {formatNums(value)} <span style={{ color: "#B2B7C1" }}>UZS</span>
        </>
      ),
    },
    {
      title: t("Sana"),
      key: "date",
    },
    {
      title: t("Holati"),
      key: "status",
    },
  ];
  return (
    <>
      <div className="money-circilation-table-users">
        {/* <h1 className="title">Mijoz</h1> */}
      </div>
      <WhiteRowTable
        {...{ columns }}
        onRowClick={(data) => navigate(`/subscriber/${data.id}`)}
        data={obunachilar}
        hasPagination
        total={10}
      />
    </>
  );
};

export default SubscribersTable;
