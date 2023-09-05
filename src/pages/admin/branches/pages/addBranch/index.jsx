import arrowLeft from "assets/icons/ArrowCircleLeftYellow.png";
import { ContainerForm } from "modules";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Field } from "formik";
import { useTranslation } from "react-i18next";
import { Input, TextArea } from "components/fields";
import { Button } from "components/buttons";
import { get } from "lodash";
import CustomInputMask from "components/fields/inputMask";

const AdminAddBranch = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <ContainerForm
      method="post"
      url="/admin-warehouses/"
      onSuccess={() => {
        navigate(-1);
      }}
      onError={(error) => {
        toast.error(get(error, "response.data.message", error?.message));
      }}
      fields={[
        {
          name: "name",
          required: true,
        },
        {
          name: "phone",
          required: true,
          value: "+998",
          onSubmitValue: (value) => {
            return `+${value.match(/\d+/g).join("")}`;
          },
        },
        {
          name: "address_uz",
          required: true,
        },
        {
          name: "address_ru",
          required: true,
        },
        {
          name: "about_uz",
        },
        {
          name: "about_ru",
        },
      ]}
    >
      {({ handleSubmit, isLoading }) => {
        return (
          <div className="container">
            <ToastContainer />
            <div
              className="tariff__arrow-circle-left"
              onClick={() => navigate(-1)}
            >
              <img src={arrowLeft} alt="" />
            </div>
            <div className="product-add-fields">
              <div className="product-add-fields__left">
                <Field name="name" label={t("Nomi")} component={Input} />
                <Field
                  name="address_uz"
                  label={`${t("Adres")} UZ`}
                  component={Input}
                />
                <Field
                  name="about_uz"
                  label={`${t("Tavsifi")} UZ`}
                  component={TextArea}
                />
              </div>
              <div className="product-add-fields__left">
                <Field
                  name="phone"
                  label={t("Telefon raqam")}
                  component={CustomInputMask}
                  mask="+999 (99) 999-99-99"
                />
                <Field
                  name="address_ru"
                  label={`${t("Adres")} RU`}
                  component={Input}
                />
                <Field
                  name="about_ru"
                  label={`${t("Tavsifi")} RU`}
                  component={TextArea}
                />
              </div>
            </div>
            <div className="add-product__button">
              <Button
                text={t("Saqlash")}
                onClick={handleSubmit}
                type={"submit"}
                disabled={isLoading}
              />
            </div>
          </div>
        );
      }}
    </ContainerForm>
  );
};

export default AdminAddBranch;
