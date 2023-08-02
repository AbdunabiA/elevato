import Table from "components/tables/table";
// import { mahsulotTarqatish2 } from "assets/db";
import "./productsDistribution.scss";
import left from "assets/icons/ArrowLeftIcon.png";
import plus from "assets/icons/ButtonPlusIcon.png";
import file from "assets/icons/ButtonFileIcon.png";
import file2 from "assets/icons/ButtonFileIconArrowUp.svg";
import { Button } from "components/buttons";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { formatNums } from "services/formatNums";

const ProductsDistribution = ({data}) => {
  const navigate = useNavigate();
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
  const mahsulotlar = data.reduce((prev, curr)=>{
    return [
      ...prev,
      {
        date: moment(curr.dateTime).format("DD/MM/YYYY"),
        product: curr.product.name,
        amount: curr.amount,
        branch: curr.warehouse.name,
        overallPayment: formatNums(curr.summa),
      },
    ];
  }, [])
  return (
    <div className="wrapper">
      <h1 className="title">Mahsulot sotuvi</h1>
      <div className="table">
        <div className="table__title">
          <h1 className="title">Tarixi</h1>
          <div className="buttons">
            <Button
              text={"Tarixni ko'rish"}
              icon={file}
              onClick={() => navigate("history")}
            />
            <Button text={"Mahsulot yuporish"} icon={file2} />
          </div>
        </div>
        <Table
          columns={columns}
          data={mahsulotlar}
          hasPagination
          total={12}
        />
      </div>
    </div>
  );
};

export default ProductsDistribution;
