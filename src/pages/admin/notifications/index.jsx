import { Button } from "components/buttons";
import ErrorPage from "components/errorPage";
import Loader from "components/loader";
import { ContainerForm, GetAll } from "modules";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import arrowLeft from "assets/icons/ArrowCircleLeftYellow.png";
import Modal from "components/modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQueryClient } from "@tanstack/react-query";
import { get } from "lodash";
import { Field } from "formik";
import { Input, TextArea } from "components/fields";
import { usePost } from "crud";
import './notifications.scss'

const AdminNotifications = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [modal, setModal] = useState(false);
  const queryClient = useQueryClient();
  const {mutate:deleteNotification, isLoading:deleteLoading} = usePost()
  return (
    <div className="container">
      <div className="tariff__arrow-circle-left" onClick={() => navigate(-1)}>
        <img src={arrowLeft} alt="" />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Button text={t("Xabar qo'shish")} onClick={() => setModal(true)} />
      </div>
      <ToastContainer />
      {modal ? (
        <Modal onClose={() => setModal(false)}>
          <ContainerForm
            url="/admin-notifications/"
            method="post"
            onSuccess={() => {
              toast.success("SUCCESSFUL");
              setModal(false);
              queryClient.invalidateQueries("admin-notifications");
            }}
            onError={(error) => {
              toast.error(get(error, "response.data.message", error?.message));
            }}
            fields={[
              {
                name: "title_uz",
                required: true,
              },
              {
                name: "title_ru",
                required: true,
              },
              {
                name: "message_ru",
                required: true,
              },
              {
                name: "message_uz",
                required: true,
              },
            ]}
          >
            {({ handleSubmit, isLoading }) => {
              return (
                <div>
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Field
                        name="title_uz"
                        label={`${t("Nomi")} UZ`}
                        component={Input}
                      />
                      <Field
                        name="message_uz"
                        label={`${t("Xabar")} UZ`}
                        component={TextArea}
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
                        name="title_ru"
                        label={`${t("Nomi")} RU`}
                        component={Input}
                      />
                      <Field
                        name="message_ru"
                        label={`${t("Xabar")} RU`}
                        component={TextArea}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      marginTop: "20px",
                    }}
                  >
                    <Button
                      text={t("Saqlash")}
                      type={"submit"}
                      onClick={handleSubmit}
                      disabled={isLoading}
                    />
                  </div>
                </div>
              );
            }}
          </ContainerForm>
        </Modal>
      ) : null}
      <GetAll queryKey={["admin-notifications"]} url={"/admin-notifications"}>
        {({ items, isLoading, isError, error }) => {
          if (isLoading) return <Loader />;
          if (isError) return <ErrorPage {...{ error }} />;
          console.log(items);
          return (
            <div>
              {items?.map((notif, i) => {
                return (
                  <div key={i} className="users-notification__wrapper">
                    <h2>{notif[`title_${lang}`]}</h2>
                    <p>{notif[`message_${lang}`]}</p>
                    <div className="notification-delete-button">
                      <Button
                        text={t("O'chirish")}
                        disabled={deleteLoading}
                        type={"button"}
                        color={"#FF0000"}
                        onClick={() =>
                          deleteNotification({
                            method: "delete",
                            onError: (error) => {
                              toast.error(
                                get(
                                  error,
                                  "response.data.message",
                                  error?.message
                                )
                              );
                            },
                            onSuccess: () => {
                              toast.success("DELETED");
                              queryClient.invalidateQueries(
                                "admin-notifications"
                              );
                            },
                            url: `/admin-notifications/${notif?.id}`,
                          })
                        }
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        }}
      </GetAll>
    </div>
  );
};

export default AdminNotifications;
