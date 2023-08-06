import Table from "components/tables/table";
// import { mahsulotTarqatish2 } from "assets/db";
import "./productsTable.scss";
import left from "assets/icons/ArrowLeftIcon.png";
import plus from "assets/icons/ButtonPlusIcon.png";
import file from "assets/icons/ButtonFileIcon.png";
import file2 from "assets/icons/ButtonFileIconArrowUp.svg";
import { Button } from "components/buttons";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import { formatNums } from "services/formatNums";
import { useTranslation } from "react-i18next";

const ProductsTable = ({ data }) => {
  const {i18n} = useTranslation()
  const lang = i18n.language
  const navigate = useNavigate();
  const columns = [
    {
      title: "Nomi",
      key: "name",
    },
    {
      title: "Narxi",
      key: "price",
      render:(val)=>`${val}$`
    },
    {
      title: "Kategoriya",
      key: "category",
    },
    {
      title: "Xolati",
      key: "deleted",
      render: (value) => (
        <span style={{ color: value ? "#FF0000" : "#16FF01" }}>
          {value ? "Faol emas" : "Faol"}
        </span>
      ),
    },
    {
      title: "Taxrirlash",
      render: (value, row) => <Link to={`/update-product/${row.id}`}>Batafsil</Link>,
    },
  ];
  const mahsulotlar = data.reduce((prev, curr) => {
    return [
      ...prev,
      {
        id:curr.id,
        name: curr.name,
        price: formatNums(curr.price),
        category: curr.category[`name_${lang}`],
        deleted: curr.deleted,
      },
    ];
  }, []);
  return (
    <div className="wrapper">
      <h1 className="title">Mahsulotlar ro'yxati</h1>
      <div className="table">
        <div className="table__title">
          <h1 className="title"></h1>
          <div className="buttons">
            {/* <Button
              text={"Tarixni ko'rish"}
              icon={file}
              onClick={() => navigate("history")}
            />
            <Button text={"Mahsulot yuporish"} icon={file2} /> */}
          </div>
        </div>
        <Table columns={columns} data={mahsulotlar} hasPagination total={12} />
      </div>
    </div>
  );
};

export default ProductsTable;
