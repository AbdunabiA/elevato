import { Card } from "components/cards";
import "./cards.scss";
import shoppingCart from "assets/icons/ShoppingCart.png";
import mijozlar from "assets/icons/MijozlarIcon.png";
import mahsulot from "assets/icons/MahsulotIcon.png";
import { formatNums } from "services/formatNums";
import plus from "assets/icons/AddPlusIconWhite.svg";
import minus from "assets/icons/CircleMinusIconWhite.svg";
import { useTranslation } from "react-i18next";
import Modal from "components/modal";
import { ContainerForm } from "modules";
import { Field } from "formik";
import { Button } from "components/buttons";
import { useState } from "react";
import { Input } from "components/fields";
import { useGet } from "crud";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { get } from "lodash";
import { useQueryClient } from "@tanstack/react-query";

const Cards = ({ infos }) => {
  const {t} = useTranslation()
  const queryClient = useQueryClient()
    const { data } = useGet({
      queryKey: ["cutomer-valyuta"],
      url: "/payments/card-and-amount-info/",
    });
    const [modal, setModal] = useState({
      isOpen: false,
      add: false,
      take: false,
    });



  const cards = [
    {
      icon: shoppingCart,
      title: t("Hisob raqamidagi summa"),
      count: formatNums(Math.round(infos[0])),
      val: "$",
    },
    {
      icon: mijozlar,
      title: t("Debet"),
      count: formatNums(Math.round(infos[1])),
      val: "$",
    },
    {
      icon: mahsulot,
      title: t("Kirim"),
      count: formatNums(Math.round(infos[2])),
      val: "$",
      right_side: true,
      right_icon: plus,
      right_side_click: () =>
        setModal({ isOpen: true, add: true, take: false }),
    },
    {
      icon: shoppingCart,
      title: t("Chiqim"),
      count: formatNums(Math.round(infos[3])),
      val: "$",
      right_side: true,
      right_icon: minus,
      right_side_click: () =>
        setModal({ isOpen: true, add: false, take: true }),
    },
  ];
  return (
    <div className="cards">
      <ToastContainer/>
      {cards.map((card, i) => {
        return <Card key={i} {...{ card }} />;
      })}


      {modal.isOpen && modal.add ? (
        <Modal
          onClose={() => setModal({ isOpen: false, add: false, take: false })}
        >
          <ContainerForm
            url="/payments/create-payment/"
            fields={[
              {
                name: "amount",
                required: true,
              },
            ]}
            onSuccess={() => {
              setModal({ isOpen: false, add: false, take: false });
              // console.log('succ');
              toast.success("SUCCESSFUL");
              queryClient.invalidateQueries("money-circulation");
            }}
            onError={(error) => {
              toast.error(get(error, "response.data.message", error?.message));
            }}
          >
            {({ handleSubmit, isLoading, values }) => {
              return (
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                    padding: "30px",
                  }}
                >
                  {modal.add ? (
                    <>
                      <Field name="amount" label="UZS" component={Input} />
                      <label className="input-field__wrapper">
                        <span className="label">USD</span>
                        <div>
                          <input
                            className="custom-input"
                            disabled
                            type="text"
                            value={
                              values?.amount
                                ? Math.round(
                                    (values?.amount / data?.data?.USD) * 100
                                  ) / 100
                                : ""
                            }
                          />
                        </div>
                      </label>
                      <label className="input-field__wrapper">
                        <span className="label">{t("Karta raqami")}</span>
                        <div>
                          <input
                            className="custom-input"
                            type="text"
                            disabled
                            value={get(data, "data.card_number", "")}
                          />
                        </div>
                      </label>
                    </>
                  ) : null}
                  <Button
                    text={t("Saqlash")}
                    type={"submit"}
                    onClick={handleSubmit}
                    disabled={isLoading}
                  />
                </div>
              );
            }}
          </ContainerForm>
        </Modal>
      ) : modal.isOpen && modal.take ?  (
        <Modal
          onClose={() => setModal({ isOpen: false, add: false, take: false })}
        >
          <ContainerForm
            url="/users-money-order/"
            fields={[
              {
                name: "amount",
                required: true,
              },
            ]}
            onSuccess={() => {
              toast.success("SUCCESSFUL");
              setModal({ isOpen: false, add: false, take: false });
              queryClient.invalidateQueries("money-circulation");
            }}
            onError={(error) => {
              toast.error(get(error, "response.data.message", error?.message));
            }}
          >
            {({ handleSubmit, isLoading, values }) => {
              return (
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                    padding: "30px",
                  }}
                >
                  {modal.take ? (
                    <>
                      <Field name="amount" label="USD" component={Input} />
                      <label className="input-field__wrapper">
                        <span className="label">UZS</span>
                        <div>
                          <input
                            className="custom-input"
                            disabled
                            type="text"
                            value={
                              values?.amount
                                ? Math.round(
                                    values?.amount * data?.data?.USD * 100
                                  ) / 100
                                : ""
                            }
                          />
                        </div>
                      </label>
                      <label className="input-field__wrapper">
                        <span className="label">{t("Karta raqami")}</span>
                        <div>
                          <input
                            className="custom-input"
                            type="text"
                            disabled
                            value={get(data, "data.card_number", "")}
                          />
                        </div>
                      </label>
                    </>
                  ) : null}
                  <Button
                    text={t("Saqlash")}
                    type={"submit"}
                    onClick={handleSubmit}
                    disabled={isLoading}
                  />
                </div>
              );
            }}
          </ContainerForm>
        </Modal>
      ):null}



    </div>
  );
};

export default Cards;
