import Table from "components/tables/table";
import "./ordersTable.scss";
import { useTranslation } from "react-i18next";
import { Button } from "components/buttons";
import icon from "assets/icons/ButtonFileIconArrowUp.svg";
import { usePost } from "crud";
import { useQueryClient } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { get } from "lodash";
import Modal from "components/modal";
import { Field } from "formik";
import { useState } from "react";

const OrdersTables = ({ data }) => {
  const { t, i18n } = useTranslation();
  const { mutate: sendProduct, isLoading: sendLoading } = usePost();
  const queryClient = useQueryClient();
  const [modal, setModal] = useState({ isOpen: false, data: null });
  const dataCorrected = data.reduce((total, curr) => {
    // console.log(curr);
    return [
      ...total,
      {
        id: curr?.id,
        full_name: `${curr?.user?.first_name} ${curr?.user?.last_name}`,
        date: curr?.date,
        sum: curr?.amount * curr?.product?.price,
        total: curr?.amount,
        phone: curr?.user?.phone_number,
        prodName: curr?.product?.name,
        done: curr?.done,
      },
    ];
  }, []);
  // console.log(dataCorrected);

  return (
    <div>
      <ToastContainer />
      {modal?.isOpen ? (
        <Modal onClose={()=>setModal({isOpen:false, data:null})}>
          <div>
            <ToastContainer />
            <div className="product-send-fields">
              <div className="product-send-fields__left">
                <label className="input-field__wrapper">
                  <span className="label">{t("Ism va Familiya")}</span>
                  <input
                    type="text"
                    className="custom-input"
                    disabled
                    value={modal?.data?.full_name}
                  />
                </label>

                <label className="input-field__wrapper">
                  <span className="label">{t("Telefon raqam")}</span>
                  <input
                    type="text"
                    className="custom-input"
                    disabled
                    value={modal?.data?.phone ? modal?.data?.phone : ""}
                  />
                </label>

                <label className="input-field__wrapper">
                  <span className="label">{t("Nomi")}</span>
                  <input
                    type="text"
                    className="custom-input"
                    disabled
                    value={modal?.data?.prodName}
                  />
                </label>
              </div>
              <div className="product-send-fields__right">
                <label className="input-field__wrapper">
                  <span className="label">{t("Miqdori")}</span>
                  <input
                    type="text"
                    className="custom-input"
                    disabled
                    value={modal?.data?.prodAmount}
                  />
                </label>
                <label className="input-field__wrapper">
                  <span className="label">{t("Summa")}</span>
                  <input
                    type="text"
                    className="custom-input"
                    disabled
                    value={modal?.data?.sum}
                  />
                </label>
                <Button
                  text={t("Mahsulot sotish")}
                  disabled={sendLoading}
                  onClick={() => {
                    sendProduct({
                      url: "/employees-products/sales/",
                      method: "post",
                      values: {
                        order: modal?.data?.id,
                        done: true,
                      },
                      onSuccess: () => {
                        queryClient.invalidateQueries("employee-home");
                        toast.success("SUCCESSFUL");
                        setModal({isOpen:false, data:null})
                      },
                      onError: (error) => {
                        toast.error(
                          get(error, "response.data.message", error?.message)
                        );
                      },
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </Modal>
      ) : null}

      <Table
        columns={[
          {
            title: t("Ism va Familiya"),
            key: "full_name",
          },
          {
            title: t("Sana"),
            key: "date",
          },
          {
            title: t("Summa"),
            key: "sum",
            render: (value) => `${value}$`,
          },
          {
            title: t("Jami"),
            key: "total",
          },
          {
            title: "",
            render: (value, row) => (
              <Button
                onClick={() => {
                  // console.log(row);
                  setModal({
                    isOpen: true,
                    data: {
                      full_name: row?.full_name,
                      phone: row?.phone,
                      prodName: row?.prodName,
                      prodAmount: row?.total,
                      sum: row?.sum,
                      id: row?.id,
                    },
                  });
                }}
                key={row?.id}
                disabled={row?.done ? true : false}
                icon={icon}
                text={t("Mahsulot sotish")}
              />
            ),
          },
        ]}
        data={dataCorrected}
        hasPagination
      />
    </div>
  );
};

export default OrdersTables;
