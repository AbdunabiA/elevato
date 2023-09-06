import WhiteRowTable from "components/tables/whiteRowTable";
import "./financialInfo.scss";
import { moliyaviyMalumotlar } from "assets/db";
import { formatNums } from "services/formatNums";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import moment from "moment";

const FinancialInfo = ({data}) => {
  const {t, i18n} = useTranslation()
  const lang = i18n.language
  const [num, setNum] = useState(0)
   
  // const num = 0
  return (
    <>
      <h1 className="title financial-info__title">
        {t("Moliyaviy malumotlar")}
      </h1>
      {!data?.length ? (
        <h1 style={{ textAlign: "center" }}>No info</h1>
      ) : (
        <WhiteRowTable
          hasNum
          data={data}
          hasPagination
          columns={[
            {
              title: t("Sana"),
              key: "dateTime",
              render: (value) => {
                return moment(value).format("DD/MM/YYYY");
              },
            },
            {
              title: t("Status"),
              key: "money_type",
            },
            {
              title: t("Miqdori"),
              key: "amount",
              render: (value) => (
                <>
                  {formatNums(value)}
                  <span style={{ color: "#B2B7C1" }}>$</span>
                </>
              ),
            },
            {
              title: t("Komentariy"),
              key: `comment_${lang}`,
            },
          ]}
        />
      )}
    </>
  );
};

export default FinancialInfo;
