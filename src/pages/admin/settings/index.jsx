import { useQueryClient } from "@tanstack/react-query";
import { Button } from "components/buttons";
import ErrorPage from "components/errorPage";
import { Input } from "components/fields";
import CustomInputMask from "components/fields/inputMask";
import Loader from "components/loader";
import Modal from "components/modal";
import WhiteRowTable from "components/tables/whiteRowTable";
import { usePost } from "crud";
import { Field } from "formik";
import { get } from "lodash";
import { ContainerForm, GetAll } from "modules";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "services";

const AdminSettings = () => {
  const { t } = useTranslation();
  const [modal, setModal] = useState(false);
  const [changeModal, setChangeModal] = useState(false);
  const [cardWritten, setCardWritten] = useState(false);
  const [minut, setMinut] = useState(1);
  const [sec, setSec] = useState(59);
  const queryClient = useQueryClient()

  const { mutate: deleteCard, isLoading: deleteLoading } = usePost();

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

  return (
    <div className="container">
      <ToastContainer />
      <GetAll queryKey={["admin-settings"]} url={"/admin-bonuses-settings/"}>
        {({ items, isLoading, isError, error }) => {
          if (isLoading) return <Loader />;
          if (isError) return <ErrorPage {...{ error }} />;
          // console.log(items);
          return (
            <div>
              <WhiteRowTable
                hasPagination
                data={[items]}
                columns={[
                  {
                    title: t("Taklif qilinuvchi uchun"),
                    key: "for_follower",
                  },
                  {
                    title: t("Taklif qiluvchi uchun"),
                    key: "for_offerer",
                  },
                  {
                    title: `1-${t("Avlod")}`,
                    key: "generation1",
                  },
                  {
                    title: `2-${t("Avlod")}`,
                    key: "generation2",
                  },
                  {
                    title: `3-${t("Avlod")}`,
                    key: "generation3",
                  },
                  {
                    title: `4-${t("Avlod")}`,
                    key: "generation4",
                  },
                  {
                    title: `5-${t("Avlod")}`,
                    key: "generation5",
                  },
                  {
                    title: `6-${t("Avlod")}`,
                    key: "generation6",
                  },
                  {
                    title: `7-${t("Avlod")}`,
                    key: "generation7",
                  },
                  {
                    title: t("O'zgartirish"),
                    render: () => {
                      return (
                        <Button
                          text={t("O'zgartirish")}
                          onClick={() => setChangeModal(true)}
                        />
                      );
                    },
                  },
                ]}
              />
              {changeModal ? (
                <Modal onClose={() => setChangeModal(false)}>
                  <ContainerForm
                    url="/admin-bonuses-settings/"
                    method="put"
                    onSuccess={()=>{
                      toast.success("SUCCESSFUL")
                      setChangeModal(false);
                      queryClient.invalidateQueries("admin-settings");
                    }}
                    onError={(error)=>{
                      toast.error(
                        get(error, "response.data.message", error?.message)
                      );
                    }}
                    fields={[
                      {
                        name: "for_follower",
                        value: items?.for_follower,
                      },
                      {
                        name: "for_offerer",
                        value: items?.for_offerer,
                      },
                      {
                        name: "generation1",
                        value: items?.generation1,
                      },
                      {
                        name: "generation2",
                        value: items?.generation3,
                      },
                      {
                        name: "generation3",
                        value: items?.generation3,
                      },
                      {
                        name: "generation4",
                        value: items?.generation4,
                      },
                      {
                        name: "generation5",
                        value: items?.generation5,
                      },
                      {
                        name: "generation6",
                        value: items?.generation6,
                      },
                      {
                        name: "generation7",
                        value: items?.generation7,
                      },
                    ]}
                  >
                    {({ handleSubmit, isLoading }) => {
                      return (
                        <div>
                          <div style={{ display: "flex", gap: "20px" }}>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                              }}
                            >
                              <Field
                                name="for_follower"
                                label={t("Taklif qilinuvchi uchun")}
                                component={Input}
                              />
                              <Field
                                name="for_offerer"
                                label={t("Taklif qiluvchi uchun")}
                                component={Input}
                              />
                              <Field
                                name="generation1"
                                label={`1-${t("Avlod")}`}
                                component={Input}
                              />
                              <Field
                                name="generation2"
                                label={`2-${t("Avlod")}`}
                                component={Input}
                              />
                              <Field
                                name="generation3"
                                label={`3-${t("Avlod")}`}
                                component={Input}
                              />
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                              }}
                            >
                              <Field
                                name="generation4"
                                label={`4-${t("Avlod")}`}
                                component={Input}
                              />
                              <Field
                                name="generation5"
                                label={`5-${t("Avlod")}`}
                                component={Input}
                              />
                              <Field
                                name="generation6"
                                label={`6-${t("Avlod")}`}
                                component={Input}
                              />
                              <Field
                                name="generation7"
                                label={`7-${t("Avlod")}`}
                                component={Input}
                              />
                            </div>
                          </div>
                          <div
                            style={{ display: "flex", justifyContent: "end" }}
                          >
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
                </Modal>
              ) : null}
              <div
                style={{
                  marginTop: "50px",
                  display: "flex",
                  gap: "20px",
                  justifyContent: "end",
                }}
              >
                <ToastContainer />
                {modal ? (
                  <Modal onClose={() => setModal(false)}>
                    <ContainerForm
                      url={
                        cardWritten
                          ? "/payments/card/verify/"
                          : "/payments/card/create/"
                      }
                      onSuccess={() => {
                        if (!cardWritten) {
                          setCardWritten(true);
                          setSec(59);
                          setMinut(1);
                        } else {
                          setModal(false);
                          // queryClient.invalidateQueries("customer-profile");
                          toast.success("SUCCESSFUL");
                        }
                      }}
                      onError={(error) => {
                        toast.error(
                          get(error, "response.data.message", error?.message)
                        );
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
                <Button
                  text={t("Kartani o'chirish")}
                  disabled={deleteLoading}
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
                        // queryClient.invalidateQueries("customer-profile");
                      },
                      url: "/payments/card/delete/",
                    })
                  }
                />
                <Button
                  text={t("Karta qo'shish")}
                  onClick={() => {
                    setModal(true);
                  }}
                />
              </div>
            </div>
          );
        }}
      </GetAll>
    </div>
  );
};

export default AdminSettings;
