import Table from "components/tables/table";
// import { mahsulotTarqatish } from "assets/db";
import "./productDistribution.scss";
import left from "assets/icons/ArrowLeftIcon.png";
import plus from "assets/icons/ButtonPlusIcon.png";
import file from "assets/icons/ButtonFileIcon.png";
import file2 from "assets/icons/ButtonFileIconArrowUp.svg";
import { Button } from "components/buttons";
import moment from "moment";
import { formatNums } from "services/formatNums";

const ProductDistribution = ({data}) => {
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
      render: (value) => `${value}$`,
    },
  ];
  const mahsulotlar = data?.reduce((prev, curr) => {
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
  }, []);
  console.log(data);
  return (
    <div className="wrapper">
      <h1 className="title">Mahsulot tarqatish</h1>
      <div className="table">
        <div className="table__title">
          <h1 className="title">Tarix</h1>
          <div className="buttons">
            <Button text={"Tarixni ko'rish"} icon={file} />
            <Button text={"Mahsulot yuporish"} icon={file2} />
          </div>
        </div>
        <Table columns={columns} data={mahsulotlar} hasPagination total={12} />
      </div>
    </div>
  );
};

export default ProductDistribution;
