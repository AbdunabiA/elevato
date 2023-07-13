import Tabale2 from 'components/table2'
import { obunachilar } from 'assets/db';
import { formatNums } from 'services/formatNums';
import { useNavigate } from 'react-router-dom';

const SubscribersTable = ({data}) => {
  const navigate = useNavigate()
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
    <Tabale2 {...{columns}} onRowClick={(data)=>navigate(`/subscriber/${data.id}`)} data={obunachilar} hasPagination total={10}/>
  )
}

export default SubscribersTable