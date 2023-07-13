import Table2 from 'components/table2'
import './financialInfo.scss'
import { moliyaviyMalumotlar } from 'assets/db'
import { formatNums } from 'services/formatNums';

const FinancialInfo = () => {
  return (
    <>
      <h1 className="title financial-info__title">Moliyaviy malumotlar</h1>
      <Table2
        data={moliyaviyMalumotlar}
        hasPagination
        total={10}
        columns={[
          {
            title: "SANA",
            key: "date",
          },
          {
            title: "OBUNA SUMMASI",
            key: "subscription",
            render: (value) => (
              <>
                {formatNums(value)}{" "}
                <span style={{ color: "#B2B7C1" }}>UZS</span>
              </>
            ),
          },
          {
            title: "KIRITILGAN SUMMA",
            key: "kiritilgan_summa",
            render: (value) => (
              <>
                {formatNums(value)}{" "}
                <span style={{ color: "#B2B7C1" }}>UZS</span>
              </>
            ),
          },
          {
            title: "YECHILGAN SUMMA",
            key: "yechilgan_summa",
            render: (value) => (
              <>
                {formatNums(value)}{" "}
                <span style={{ color: "#B2B7C1" }}>UZS</span>
              </>
            ),
          },
          {
            title: "JAMI BONUS",
            key: "jami_bonus",
            render: (value) => (
              <>
                {formatNums(value)}{" "}
                <span style={{ color: "#B2B7C1" }}>UZS</span>
              </>
            ),
          },
          {
            title: "DEBET",
            key: "debet",
            render: (value) => (
              <>
                {formatNums(value)}{" "}
                <span style={{ color: "#B2B7C1" }}>UZS</span>
              </>
            ),
          },
        ]}
      />
    </>
  );
}

export default FinancialInfo