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
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Modal from "components/modal";
import { ContainerForm } from "modules";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Field } from "formik";
import { AsyncSelect, Input } from "components/fields";
import { get } from "lodash";

const ProductDistribution = ({ data, warehouse }) => {
  const [modal, setModal] = useState({ isOpen: false, send: true });
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
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
  // console.log(data);
  return (
    <div className="wrapper">
      <ToastContainer />
      {modal.isOpen ? (
        <Modal onClose={() => setModal({ isOpen: false, send: true })}>
          <ContainerForm
            url="/admin-warehouses-products/"
            method="post"
            onSuccess={() => {
              toast.success("SUCCESSFUL");
              setModal({ isOpen: false, send: true });
            }}
            onError={(error) => {
              toast.error(get(error, "response.data.message", error?.message));
            }}
            fields={[
              {
                name: "comment",
                required:true
                // value:'e'
              },
              {
                name: "summa",
                value: '1',
              },
              {
                name: "warehouse",
                value: warehouse?.id,
                required:true
              },
              {
                name: "product",
                type: "object",
                required:true,
                onSubmitValue: (value) => value?.id,
              },
              {
                name: "amount",
                required:true,
                onSubmitValue: (value) => {
                  if (modal.send) return value;
                  return -value;
                },
              },
            ]}
          >
            {({ handleSubmit, isLoading, values }) => {
              
              return (
                <>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        padding: "20px",
                      }}
                    >
                      <Field
                        name="product"
                        label={t("Mahsulot")}
                        isSearchable
                        component={AsyncSelect}
                        loadOptionsUrl="/admin-products/"
                        lastKeys=".products"
                        optionLabel={`name`}
                        optionValue={`name`}
                        searchKey={`name`}
                      />
                      <Field
                        name="amount"
                        label={t("Soni")}
                        type="number"
                        component={Input}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        padding: "20px",
                      }}
                    >
                      <Field
                        name="comment"
                        label={t("Komentariy")}
                        component={Input}
                      />
                      {/* <Field
                        name="summa"
                        label={t("Summa")}
                        component={Input}
                        disabled
                      /> */}
                    </div>
                  </div>
                  <div style={{display:"flex", justifyContent:"end"}}>
                    <Button
                      text={t("Yuborish")}
                      type={"submit"}
                      onClick={handleSubmit}
                      disabled={isLoading}
                    />
                  </div>
                </>
              );
            }}
          </ContainerForm>
        </Modal>
      ) : null}

      <h1 className="title">{t("Mahsulot tarqatish")}</h1>
      <div className="table">
        <div className="table__title">
          <h1 className="title">{t("Tarix")}</h1>
          <div className="buttons">
            <Button text={t("Tarixni ko'rish")} icon={file} />
            <Button
              text={t("Mahsulot qaytib olish")}
              onClick={() => setModal({ isOpen: true, send: false })}
            />
            <Button
              text={t("Mahsulot yuborish")}
              icon={file2}
              onClick={() => setModal({ isOpen: true, send: true })}
            />
          </div>
        </div>
        <Table columns={columns} data={mahsulotlar} hasPagination total={12} />
      </div>
    </div>
  );
};

export default ProductDistribution;
