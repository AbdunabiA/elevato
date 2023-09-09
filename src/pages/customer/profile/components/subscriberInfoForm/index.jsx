import { ContainerForm } from "modules";
import "./subscriberInfoForm.scss";
import { Field } from "formik";
import { Input } from "components/fields";
import avatar from "assets/images/avatar.png";
import { formatNums } from "services/formatNums";
import { Button } from "components/buttons";
import { get } from "lodash";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { useEffect, useState } from "react";
import Modal from "components/modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomInputMask from "components/fields/inputMask";
import plusIcon from "assets/icons/AddPlusIcon.png";
import { useGet, usePost } from "crud";
import { useQueryClient } from "@tanstack/react-query";

const SubscriberInfoForm = ({ data }) => {
  const { t } = useTranslation();
  const [passwordModal, setPasswordModal] = useState(false);
  const [cardModal, setCardModal] = useState(false);
  const [cardWritten, setCardWritten] = useState(false);
  const [minut, setMinut] = useState(1);
  const [sec, setSec] = useState(59);
  const queryClient = useQueryClient();

  const { data: profileData } = useGet({
    queryKey: ["customer-profile"],
    url: "/users-profile",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (sec > 0) {
        setSec(sec - 1);
      }
      if (sec === 0) {
        if (minut === 0) {
          clearInterval(interval);
        } else {
          setSec(59);
          setMinut(minut - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [sec]);
  function resendCode() {
    setSec(59);
    setMinut(1);
    api
      .get("/payments/card/new-verify/")
      .then((data) => {
        // console.log(data);
      })
      .catch((error) => {
        // console.log('Error', error);
        toast.error(get(error, "response.data.message", error?.message));
      });
  }

  const { mutate: deleteCard, isLoading: cardDeleteLoading } = usePost();
  return (
    <div className="subscriber-info-form__wrapper">
      <ToastContainer />
      {cardModal ? (
        <Modal onClose={() => setCardModal(false)}>
          <ContainerForm
            url={
              cardWritten ? "/payments/card/verify/" : "/payments/card/create/"
            }
            onSuccess={() => {
              if (!cardWritten) {
                setCardWritten(true);
                setSec(59);
                setMinut(1);
              } else {
                setCardModal(false);
                queryClient.invalidateQueries("customer-profile");
                toast.success("SUCCESSFUL");
              }
            }}
            onError={(error) => {
              toast.error(get(error, "response.data.message", error?.message));
            }}
            fields={
              cardWritten
                ? [
                    {
                      name: "code",
                      required: true,
                      min: 6,
                      onSubmitValue: (value) => {
                        return `${value.match(/\d+/g).join("")}`;
                      },
                    },
                  ]
                : [
                    {
                      name: "number",
                      required: true,
                      min: 19,
                      onSubmitValue: (value) => {
                        return `${value.match(/\d+/g).join("")}`;
                      },
                    },
                    {
                      name: "expire",
                      required: true,
                      min: 5,
                      onSubmitValue: (value) => {
                        return `${value.match(/\d+/g).join("")}`;
                      },
                    },
                    {
                      name: "phone",
                      required: true,
                      min: 19,
                      value:"+998",
                      onSubmitValue: (value) => {
                        return `+${value.match(/\d+/g).join("")}`;
                      },
                    },
                  ]
            }
          >
            {({ handleSubmit, isLoading }) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                    padding: "30px",
                  }}
                >
                  {cardWritten ? (
                    <>
                      <Field
                        label={t("Parol")}
                        name="code"
                        mask="999 999"
                        component={CustomInputMask}
                      />
                      {sec === 0 && minut === 0 ? (
                        <Button
                          text={t("kodni qayta yuborish")}
                          onClick={() => resendCode()}
                        />
                      ) : (
                        <p className={""}>
                          {minut < 10 ? `0${minut}` : minut} :
                          {sec < 10 ? `0${sec}` : sec}
                        </p>
                      )}
                    </>
                  ) : (
                    <>
                      <Field
                        name={"number"}
                        label={t("Karta raqami")}
                        mask="9999 9999 9999 9999"
                        component={CustomInputMask}
                      />
                      <Field
                        name={"expire"}
                        label={t("Karta amal qlish muddati")}
                        mask="99/99"
                        component={CustomInputMask}
                      />
                      <Field
                        name={"phone"}
                        label={t("Karta ulangan telefon raqam")}
                        mask="+999 (99) 999-99-99"
                        component={CustomInputMask}
                      />
                    </>
                  )}
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
      ) : null}

      {passwordModal ? (
        <Modal onClose={() => setPasswordModal(false)}>
          <ContainerForm
            fields={[
              {
                name: "password",
                required: true,
                min: 8,
              },
              {
                name: "confirm_password",
                required: true,
                min: 8,
              },
            ]}
            url="/reset-password/"
            onSuccess={() => {
              toast.success("SUCCESSFUL");
              setPasswordModal(false);
            }}
            onError={(error) => {
              toast.error(get(error, "response.data.message", error?.message));
            }}
            method="put"
          >
            {({ handleSubmit: submitPassword, isLoading: passwordLoading }) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    alignItems: "center",
                    padding: "30px",
                  }}
                >
                  <Field component={Input} name="password" label={t("Parol")} />
                  <Field
                    component={Input}
                    name="confirm_password"
                    label={t("Parolni tasdiqlang")}
                  />
                  <Button
                    text={t("Saqlash")}
                    onClick={submitPassword}
                    disabled={passwordLoading}
                    type={"submit"}
                  />
                </div>
              );
            }}
          </ContainerForm>
        </Modal>
      ) : null}

      <ContainerForm
        fields={[
          {
            name: "first_name",
            type: "string",
            required: true,
            value: get(data, "user.first_name", ""),
          },
          {
            name: "last_name",
            type: "string",
            required: true,
            value: get(data, "user.last_name", ""),
          },
          {
            name: "phone_number",
            type: "string",
            min: 9,
            max: 13,
            required: true,
            value: get(data, "user.phone_number", ""),
            onSubmitValue: (value) => {
              return `+${value.match(/\d+/g).join("")}`;
            },
          },
          {
            name: "card_number",
            min: 16,
            // required: true,
            value: get(data, "card.number", ""),
            onSubmitValue: (value) => {
              if (typeof value === "number") return value;
              return `${value?.match(/\d+/g).join("")}`;
            },
          },
          {
            name: "card_expirey",
            // required: true,
            value: get(data, "card.expire", ""),
            onSubmitValue: (value) => {
              if (typeof value === "number") return value;
              return `${value?.match(/\d+/g).join("")}`;
            },
          },
          {
            name: "passport_num",
            type: "string",
            min: 5,
            required: true,
            value: get(data, "user.passport_num", ""),
          },
          {
            name: "passport_series",
            type: "string",
            min: 2,
            required: true,
            value: get(data, "user.passport_series", ""),
          },
          {
            name: "birth_date",
            required: true,
            value: get(data, "user.dateOfBirth", ""),
          },
          // {
          //   name: "email",
          //   type: "string",
          //   // value:get(data, 'user.email', '')
          // },
        ]}
        url="/change-user-own-info/"
        method={"patch"}
        onSuccess={() => {
          toast.success("successful");
          queryClient.invalidateQueries("customer-profile");
        }}
        onError={(error) => {
          toast.error(get(error, "response.data.message", error?.message));
        }}
      >
        {({ handleSubmit, isLoading: patchLoading, values }) => (
          <>
            <div className="subscriber-info-form__wrapper__top">
              <div className="subscriber-info-form__wrapper__top__left">
                <div className="img-wrapper">
                  {!data?.user?.photo ? (
                    <img src={avatar} alt="img" />
                  ) : (
                    <img
                      src={`https://paymentstest-60d8729405f3.herokuapp.com${data?.user?.photo}`}
                      alt="img"
                    />
                  )}
                </div>
                <h1 className="title">
                  {data?.user?.first_name} {data?.user?.last_name}
                </h1>
              </div>
              <div className="subscriber-info-form__wrapper__top__right">
                <div>
                  <h1 className="title">
                    {data?.status?.name}|{data?.status?.cashback}%
                  </h1>
                  <p>{t("Obuna turi")}</p>
                </div>
                <div>
                  <h1 className="title">{formatNums(data?.money)}$</h1>
                  <p>{t("Hisob raqamidagi summa")}</p>
                </div>
              </div>
            </div>
            <div className="subscriber-info-form__wrapper__middle">
              <div className="start-work">
                <h1>{t("Ish boshlagan sanasi")}:</h1>
                <p>{moment(data?.user?.date).format("DD.MM.YYYY")}</p>
              </div>
              {/* <div className="start-work">
                <h1>{t("Keyingi obuna to’lovi kuni")}:</h1>
                <p>12.04.2023</p>
              </div> */}
            </div>
            <div className="subscriber-info-form__wrapper__bottom">
              <h1>{t("Taxrirlash")}</h1>
              <div className="fields">
                <div className="fields__inputs">
                  <Field name="first_name" label={t("Ism")} component={Input} />
                  <Field
                    name="last_name"
                    label={t("Familiya")}
                    component={Input}
                  />
                  <Field
                    name="card_number"
                    label={t("Karta raqami")}
                    component={CustomInputMask}
                    type="number"
                    wrapperClassName="card_num"
                    mask={"9999 9999 9999 9999"}
                    disabled
                  />
                  <Field
                    name="card_expirey"
                    label={t("Karta amal qlish muddati")}
                    component={CustomInputMask}
                    wrapperClassName="card_exp"
                    mask={"99/99"}
                    disabled
                  />
                </div>
                <div
                  className="fields__inputs"
                  // style={{ border: "1px solid black" }}
                >
                  <div>
                    <label className="label">{t("Passport seria")}</label>
                    <div className="passport_nums">
                      <Field
                        name="passport_series"
                        wrapperClassName="passport_series"
                        component={Input}
                      />
                      <Field
                        name="passport_num"
                        wrapperClassName="passport_num"
                        component={Input}
                      />
                    </div>
                  </div>
                  <Field
                    name="birth_date"
                    label={t("Tug'ilgan sana")}
                    type="date"
                    component={Input}
                  />
                  <Field
                    name="phone_number"
                    label={t("Telefon raqam")}
                    component={CustomInputMask}
                    mask={"+999 (99) 999-99-99"}
                  />
                  <div>
                    <span>{t("Taklif id")}</span>
                    <div
                      className="profile-offer-id"
                      onClick={(e) => {
                        navigator.clipboard.writeText(
                          `https://elevato.me/sign-up?offer_id=${e.target.innerText}`
                        );
                        toast.success("COPIED");
                      }}
                    >
                      {data.user.offer_id}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <ToastContainer/> */}
            <div className="form-buttons">
              <Button
                text={t("Parol o'zgartirish")}
                type={"button"}
                onClick={() => setPasswordModal(true)}
              />
              <Button
                text={t("Kartani o'chirish")}
                disabled={cardDeleteLoading}
                type={"button"}
                color={"#FF0000"}
                onClick={() =>
                  deleteCard({
                    method: "delete",
                    onError: (error) => {
                      toast.error(
                        get(error, "response.data.message", error?.message)
                      );
                    },
                    onSuccess: () => {
                      toast.success("DELETED");
                      queryClient.invalidateQueries("customer-profile");
                    },
                    url: "/payments/card/delete/",
                  })
                }
              />
              <Button
                text={t("Karta qo'shish")}
                type={"button"}
                onClick={() => {
                  // console.log(values);
                  setCardModal(true);
                }}
              />
              <Button
                text={t("Saqlash")}
                onClick={handleSubmit}
                disabled={patchLoading}
                type={"submit"}
              />
            </div>
          </>
        )}
      </ContainerForm>
    </div>
  );
};

export default SubscriberInfoForm;
