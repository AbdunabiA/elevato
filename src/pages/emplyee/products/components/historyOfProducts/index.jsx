import Table from "components/tables/table";
import { mahsulotTarqatish2 } from "assets/db";
import "./historyOfProducts.scss";
import { useState } from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";
import arrowLeft from "assets/icons/ArrowCircleLeftYellow.png";
import { useNavigate } from "react-router-dom";

const HistoryOfProducts = ({data}) => {
  const [inputVal, setInputVal] = useState();
  const {t} = useTranslation()
  const navigate = useNavigate()
  const dataCorrected = data.reduce((total, curr)=>{
    return [...total, {
        date:curr?.dateTime, 
        amount:curr?.amount, 
        sum:curr?.summa, 
        name:curr?.product?.name,
        warehouse:curr?.warehouse?.name
      }]
  }, [])
  const filteredData = dataCorrected.filter((el) =>
    el.name.toLowerCase().includes(inputVal?.toLowerCase())
  );
  const columns = [
    {
      title: t("Sana"),
      key: "date",
      render:(value)=>moment(value).format('DD/MM/YYYY')
    },
    {
      title: t("Mahsulot"),
      key: "name",
    },
    {
      title: t("Miqdori"),
      key: "amount",
    },
    {
      title: t("Filial"),
      key: "warehouse",
    },
    {
      title: t("Umumiy summa"),
      key: "sum",
      render: (value) => `${value}$`,
    },
  ];
  return (
    <div className="wrapper">
      <div className="tariff__arrow-circle-left" onClick={() => navigate(-1)}>
        <img src={arrowLeft} alt="" />
      </div>
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
          data={inputVal ? filteredData : dataCorrected}
          hasPagination
        />
      </div>
    </div>
  );
};

export default HistoryOfProducts;
