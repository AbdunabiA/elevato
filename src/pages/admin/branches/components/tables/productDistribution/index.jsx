import Table from "components/table";
import { mahsulotTarqatish } from "assets/db";
import './productDistribution.scss'
import left from 'assets/icons/ArrowLeftIcon.png'
import plus from 'assets/icons/ButtonPlusIcon.png'
import file from 'assets/icons/ButtonFileIcon.png'
import file2 from 'assets/icons/ButtonFileIconArrowUp.svg'
import { Button } from "components/buttons";

const ProductDistribution = () => {
    const columns = [
      {
        title: "Shartnoma raqami",
        key: "contractId",
      },
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
        title: "To'landi",
        key: "payed",
        render: (value) => `${value}uzs`,
      },
      {
        title: "Umumiy to'lov",
        key: "overallPayment",
        render: (value) => `${value}uzs`,
      },
    ];
  return (
    <div className="wrapper">
      <h1 className="title">Mahsulot tarqatish</h1>
      <div className="table">
        <div className="table__title">
          <h1 className="title">Tarix</h1>
          <div className="buttons">
          <Button text={"Qaytib olish"} icon={left}/>
          <Button text={"Tarixni ko'rish"} icon={file}/>
          <Button text={'Mahsulot yuporish'} icon={file2}/>
          </div>
        </div>
        <Table
          columns={columns}
          data={mahsulotTarqatish}
          hasPagination
          total={12}
        />
      </div>
    </div>
  );
}

export default ProductDistribution