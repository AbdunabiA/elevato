import Tabale2 from 'components/table2'
import { obunachilar } from 'assets/db';

const SubscribersTable = ({data}) => {
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
            {value} <span style={{ color: "#B2B7C1" }}>UZS</span>
          </>
        ),
      },
      {
        title: "Jami bonus",
        key: "all_bonus",
        render: (value) => (
          <>
            {value} <span style={{ color: "#B2B7C1" }}>UZS</span>
          </>
        ),
      },
      {
        title: "Yechilgan summa",
        key: "clean_out",
        render: (value) => (
          <>
            {value} <span style={{ color: "#B2B7C1" }}>UZS</span>
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
    <Tabale2 {...{columns}} data={obunachilar} hasPagination total={10}/>
  )
}

export default SubscribersTable