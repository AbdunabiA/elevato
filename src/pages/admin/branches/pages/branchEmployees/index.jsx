import EmployeeBigCards from "../../components/employeeBigCards";
import { ContainerForm, GetAll } from "modules";
import Loader from "components/loader";
import ErrorPage from "components/errorPage";
import { useParams } from "react-router-dom";
import { useGet } from "crud";
import { Button } from "components/buttons";
import { useTranslation } from "react-i18next";
import Modal from "components/modal";
import { Field } from "formik";
import { Input } from "components/fields";
import CustomInputMask from "components/fields/inputMask";
import { useState } from "react";
import "./branchEmployees.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQueryClient } from "@tanstack/react-query";
import { get } from "lodash";


const BranchEmployees = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [modal, setModal] = useState(false);
  const queryClient = useQueryClient()
  // console.log(id);
  return (
    <div className="container">
      <ToastContainer />
      <GetAll
        queryKey={["admin-branch"]}
        url={`/admin-warehouses/${id}/month/2023-07`}
      >
        {({ items, isLoading, isError, error }) => {
          if (isLoading) return <Loader />;
          if (isError) return <ErrorPage {...{ error }} />;
          console.log(items);
          return (
            <div>
              <Button
                text={t("Xodim qo'shish")}
                onClick={() => setModal(true)}
              />
              <EmployeeBigCards data={items} />
              {modal ? (
                <Modal onClose={() => setModal(false)}>
                  <ContainerForm
                    url="/admin-employees/"
                    method="post"
                    onSuccess={() => {
                      toast.success("SUCCESSFUL");
                      queryClient.invalidateQueries("admin-branch");
                      setModal(false);
                    }}
                    onError={(error) => {
                      toast.error(
                        get(error, "response.data.message", error?.message)
                      );
                    }}
                    fields={[
                      {
                        name: "first_name",
                        required: true,
                      },
                      {
                        name: "last_name",
                        required: true,
                      },
                      {
                        name: "username",
                        required: true,
                      },
                      {
                        name: "password",
                        required: true,
                        min: 8,
                      },
                      {
                        name: "confirm_password",
                        compare: "password",
                        required: true,
                        min: 8,
                      },
                      {
                        name: "passport_series",
                        required: true,
                        max: 2,
                      },
                      {
                        name: "passport_num",
                        required: true,
                        max: 7,
                      },
                      {
                        name: "phone_number",
                        required: true,
                        value:"+998",
                        onSubmitValue: (value) => {
                          return `+${value.match(/\d+/g).join("")}`;
                        },
                      },
                      {
                        name: "dateOfBirth",
                        required: true,
                      },
                      {
                        name:'warehouse',
                        value:items?.warehouse?.id
                      }
                    ]}
                  >
                    {({ handleSubmit, isLoading, values }) => {
                      // console.log(values);
                      return (
                        <div>
                          <div
                            style={{
                              display: "flex",
                              gap: "20px",
                              flexWrap: "wrap",
                            }}
                          >
                            <div>
                              <Field
                                name="first_name"
                                label={t("Ism")}
                                component={Input}
                              />
                              <Field
                                name="last_name"
                                label={t("Familiya")}
                                component={Input}
                              />
                              <Field
                                name="username"
                                label={t("Login")}
                                component={Input}
                              />
                              <Field
                                name="password"
                                label={t("Parol")}
                                component={Input}
                              />
                            </div>
                            <div>
                              <Field
                                name="confirm_password"
                                label={t("Parolni tasdiqlang")}
                                component={Input}
                              />
                              <div className="registration-fields__inputs__passport">
                                <label>{t("Passport seria")}</label>
                                <div>
                                  <Field
                                    name="passport_series"
                                    component={Input}
                                    wrapperClassName={
                                      "login-input reg__passport-series"
                                    }
                                  />
                                  <Field
                                    name="passport_num"
                                    component={Input}
                                    wrapperClassName={
                                      "login-input reg__passport-num"
                                    }
                                  />
                                </div>
                              </div>
                              <Field
                                name="phone_number"
                                label={t("Telefon raqam")}
                                component={CustomInputMask}
                                mask={"+998 (99) 999-99-99"}
                              />
                              <Field
                                name="dateOfBirth"
                                label={t("Tug'ilgan sana")}
                                component={CustomInputMask}
                                placeholder={"YYYY-MM-DD"}
                                mask="9999-99-99"
                              />
                            </div>
                          </div>
                          <div
                            style={{
                              marginTop: "20px",
                              display: "flex",
                              justifyContent: "end",
                            }}
                          >
                            <Button
                              text={t("Saqlash")}
                              onClick={handleSubmit}
                              disabled={isLoading}
                              type={"submit"}
                            />
                          </div>
                        </div>
                      );
                    }}
                  </ContainerForm>
                </Modal>
              ) : null}
            </div>
          );
        }}
      </GetAll>
    </div>
  );
};

export default BranchEmployees;
