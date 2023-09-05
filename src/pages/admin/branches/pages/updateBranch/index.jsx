import ErrorPage from "components/errorPage";
import Loader from "components/loader";
import { ContainerForm, GetOne } from "modules";
import React from "react";
import { useParams } from "react-router-dom";
import arrowLeft from "assets/icons/ArrowCircleLeftYellow.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Field } from "formik";
import { useTranslation } from "react-i18next";
import { Input, TextArea } from "components/fields";
import { Button } from "components/buttons";
import { get } from "lodash";
import CustomInputMask from "components/fields/inputMask";

const AdminUpdateBranch = () => {
    const {id} = useParams()
    const {t} = useTranslation()
    const navigate = useNavigate()
  return (
    <div className="container">
                  <ToastContainer />
    <GetOne
      queryKey={['admin-warehouse-update']}
      url={`/admin-warehouses/${id}/`}
    >
      {({ item, isLoading, isError, error }) => {
        if (isLoading) return <Loader />;
        if (isError) return <ErrorPage {...{ error }} />;
        console.log(item);
        return (
          <ContainerForm
            method="put"
            url={`/admin-warehouses/${id}/`}
            onSuccess={() => {
              toast.success("SUCCESSFUL");
            }}
            onError={(error) => {
              toast.error(get(error, "response.data.message", error?.message));
            }}
            fields={[
              {
                name: "name",
                value: get(item, "name", ""),
                required: true,
              },
              {
                name: "phone",
                required: true,
                value: get(item, "phone", ""),
                onSubmitValue: (value) => {
                  return `+${value.match(/\d+/g).join("")}`;
                },
              },
              {
                name: "address_uz",
                value: get(item, "address_uz", ""),
                required: true,
              },
              {
                name: "address_ru",
                value: get(item, "address_ru", ""),
                required: true,
              },
              {
                name: "about_uz",
                value:get(item, 'about_uz', '')
              },
              {
                name: "about_ru",
                value:get(item, 'about_ru', '')
              },
            ]}
          >
            {({ handleSubmit, isLoading }) => {
              return (
                <>
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
            </>
              );
            }}
          </ContainerForm>
        );
      }}
    </GetOne>
    </div>
  );
};

export default AdminUpdateBranch;
