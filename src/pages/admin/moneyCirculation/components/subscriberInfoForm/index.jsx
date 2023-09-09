import { ContainerForm } from "modules";
import "./subscriberInfoForm.scss";
import { Field } from "formik";
import { Input } from "components/fields";
import woman from "assets/images/Woman.png";
import { formatNums } from "services/formatNums";
import { Button } from "components/buttons";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { usePost } from "crud";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { get } from "lodash";

const SubscriberInfoForm = ({ data }) => {
  const { t } = useTranslation();
  const { mutate: deleteUser, isLoading: deleteLoading } = usePost();
  return (
    <div className="subscriber-info-form__wrapper">
      <ToastContainer />
      <ContainerForm
        fields={[
          {
            name: "name",
            type: "string",
            value: data?.first_name,
          },
          {
            name: "surname",
            type: "string",
            value: data?.last_name,
          },
          {
            name: "phone_num",
            type: "string",
            value: data?.phone_number ? data?.phone_number : "",
          },
          {
            name: "card_num",
            value: `${data?.passport_series}${data?.passport_num}`,
          },
          // {
          //   name: "passport",
          //   type: "string",
          //   min: 7,
          //   required: true,
          // },
          {
            name: "birth_date",
            value: data?.dateOfBirth,
          },
          // {
          //   name: "email",
          //   type: "string",
          // },
        ]}
      >
        {() => (
          <>
            <div className="subscriber-info-form__wrapper__top">
              <ToastContainer />
              <div className="subscriber-info-form__wrapper__top__left">
                <div className="img-wrapper">
                  <img
                    src={`https://paymentstest-60d8729405f3.herokuapp.com${data?.photo}`}
                    alt="img"
                  />
                </div>
                <h1 className="title">
                  {data?.first_name} {data?.last_name}
                </h1>
              </div>
              <div className="subscriber-info-form__wrapper__top__right">
                <div>
                  <h1 className="title">{data?.status?.name}</h1>
                  <p>{t("Obuna turi")}</p>
                </div>
                <div>
                  <h1 className="title">
                    {formatNums(Math.round(data?.money))}$
                  </h1>
                  <p>{t("Hisob raqamidagi summa")}</p>
                </div>
              </div>
            </div>
            <div className="subscriber-info-form__wrapper__middle">
              <div className="start-work">
                <h1>{t("Ish boshlagan sanasi")}:</h1>
                <p>{moment(data?.date).format("DD/MM/YYYY")}</p>
              </div>
              {/* <div className="start-work">
                <h1>Keyingi obuna to’lovi kuni</h1>
                <p>12.04.2023</p>
              </div> */}
            </div>
            <div className="subscriber-info-form__wrapper__bottom">
              {/* <h1>Taxrirlash</h1> */}
              <div className="fields">
                <div className="fields__inputs">
                  <Field
                    name="name"
                    label={t("Ism")}
                    component={Input}
                    disabled
                  />
                  <Field
                    name="surname"
                    label={t("Familiya")}
                    component={Input}
                    disabled
                  />
                  <Field
                    name="phone_num"
                    label={t("Telefon raqam")}
                    component={Input}
                    disabled
                  />
                </div>
                <div className="fields__inputs">
                  {/* <Field
                    name="passport"
                    label="Passport seriasi"
                    component={Input}
                  /> */}
                  <Field
                    name="card_num"
                    label={t("Passport seria")}
                    component={Input}
                    disabled
                  />
                  <Field
                    name="birth_date"
                    label={t("Tug'ilgan sana")}
                    component={Input}
                    type="date"
                    disabled
                  />
                  {/* <Field
                    name="email"
                    label="Elektron pochta"
                    component={Input}
                    type="email"
                  /> */}
                </div>
              </div>
            </div>
            <div className="form-buttons">
              <Button
                text={t("To'xtatish")}
                color={"#FF0000"}
                type={"button"}
                onClick={() => {
                  deleteUser({
                    url: `/admin-users/${data?.id}`,
                    method: "delete",
                    onSuccess: () => {
                      toast.success("SUCCESSFUL");
                    },
                    onError: (error) => {
                      toast.error(
                        get(error, "response.data.message", error?.message)
                      );
                    },
                  });
                }}
              />
              {/* <Button text={t("Saqlash")} /> */}
            </div>
          </>
        )}
      </ContainerForm>
    </div>
  );
};

export default SubscriberInfoForm;
