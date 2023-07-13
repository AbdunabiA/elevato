import Table2 from 'components/table2'
import './financialInfo.scss'
import { moliyaviyMalumotlar } from 'assets/db'
import { formatNums } from 'services/formatNums';

const FinancialInfo = () => {
  return (
    <div className="financial-info__wrapper">
      <h1 className="title">Moliyaviy malumotlar</h1>
      <Table2
        data={moliyaviyMalumotlar}
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
    </div>
  );
}

export default FinancialInfo