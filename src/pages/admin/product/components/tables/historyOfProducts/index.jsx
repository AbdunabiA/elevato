import Table from "components/tables/table";
import { mahsulotTarqatish2 } from "assets/db";
import "./historyOfProducts.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const HistoryOfProducts = ({data}) => {
  const [inputVal, setInputVal] = useState();
  const {t} = useTranslation()
  // console.log(inputVal);
  const filteredData = data.filter((el) =>{
    return el.product.toLowerCase().includes(inputVal?.toLowerCase())}
  );
  const columns = [
    {
      title: t("Sana"),
      key: "date",
    },
    {
      title: t("Mahsulot"),
      key: "product",
    },
    {
      title: t("Miqdori"),
      key: "amount",
    },
    {
      title: t("Filial"),
      key: "branch",
    },
    {
      title: t("Umumiy summa"),
      key: "overallPayment",
      render: (value) => `${value}$`,
    },
  ];
  return (
    <div className="wrapper">
      <div className="table">
        <div className="table__title">
          <h1 className="title">{t("Jadval")}</h1>
          <div className="buttons">
            <input
              className="product-search__input"
              type="text"
              placeholder="Qidirish"
              onChange={(e) => {
                setTimeout(() => {
                  setInputVal(e.target.value);
                }, 500);
              }}
            />
          </div>
        </div>
        <Table
          columns={columns}
          data={inputVal ? filteredData : data}
        />
      </div>
    </div>
  );
};

export default HistoryOfProducts;
