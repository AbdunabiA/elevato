import WhiteRowTable from "components/tables/whiteRowTable";
import { obunachilar } from "assets/db";
import { formatNums } from "services/formatNums";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './subscribersTable.scss'

const SubscribersTable = ({ data }) => {
  const navigate = useNavigate();
  const columns = [
    {
      title: "F.I.SH",
      key: "full_name",
    },
    {
      title: "Obuna Summasi",
      key: "subscription",
      render: (value) => (
        <>
          {formatNums(value)} <span style={{ color: "#B2B7C1" }}>UZS</span>
        </>
      ),
    },
    {
      title: "Jami bonus",
      key: "all_bonus",
      render: (value) => (
        <>
          {formatNums(value)} <span style={{ color: "#B2B7C1" }}>UZS</span>
        </>
      ),
    },
    {
      title: "Yechilgan summa",
      key: "clean_out",
      render: (value) => (
        <>
          {formatNums(value)} <span style={{ color: "#B2B7C1" }}>UZS</span>
        </>
      ),
    },
    {
      title: "Sana",
      key: "date",
    },
    {
      title: "Holati",
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
