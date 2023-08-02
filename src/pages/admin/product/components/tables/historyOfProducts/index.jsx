import Table from "components/tables/table";
import { mahsulotTarqatish2 } from "assets/db";
import "./historyOfProducts.scss";
import { useState } from "react";

const HistoryOfProducts = () => {
  const [inputVal, setInputVal] = useState();
  console.log(inputVal);
  const filteredData = mahsulotTarqatish2.filter((el) =>
    el.branch.toLowerCase().includes(inputVal?.toLowerCase())
  );
  const columns = [
    {
      title: "Sana",
      key: "date",
    },
    {
      title: "Mahsulot",
      key: "product",
    },
    {
      title: "Miqdori",
      key: "amount",
    },
    {
      title: "Filial",
      key: "branch",
    },
    {
      title: "Umumiy summa",
      key: "overallPayment",
      render: (value) => `${value}uzs`,
    },
  ];
  return (
    <div className="wrapper">
      <div className="table">
        <div className="table__title">
          <h1 className="title">Jadval</h1>
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
          data={inputVal ? filteredData : mahsulotTarqatish2}
          hasPagination
          total={12}
        />
      </div>
    </div>
  );
};

export default HistoryOfProducts;
