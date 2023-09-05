import plusIcon from "assets/icons/blackPlusIcon.png";
import "./cards.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Modal from "components/modal";
import { ContainerForm } from "modules";
import { Field } from "formik";
import { Input } from "components/fields";
import { Button } from "components/buttons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { get } from "lodash";

const Cards = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [modal, setModal] = useState();

  return (
    <div className="cards-add">
      <ToastContainer/>
      <div className="cards-add__card" onClick={() => navigate("/add-product")}>
        <div>
          <img src={plusIcon} alt="icon" />
        </div>
        <h1>{t("Mahsulot qo'shish")}</h1>
      </div>
      <div className="cards-add__card" onClick={() => setModal(true)}>
        <div>
          <img src={plusIcon} alt="icon" />
        </div>
        <h1>{t("Kategoriya qo'shish")}</h1>
      </div>
      {modal ? (
        <Modal onClose={()=>setModal(false)}>
          <ContainerForm
            url="/admin-product-categories/"
            method="post"
            onSuccess={()=>{
              toast.success('SUCCESSFUL')
              setModal(false)
            }}
            onError={(error)=>{
              toast.error(get(error, "response.data.message", error?.message));
            }}
            fields={[
              {
                name:'name_uz',
                required:true,
              },
              {
                name:'name_ru',
                required:true,
              }
            ]}
          >
            {({ handleSubmit, isLoading }) => {
              return (
                <div className="category-create-form">
                  <div className="category-create-inputs">
                    <Field
                      name="name_uz"
                      label={`${t("Nomi")} UZ`}
                      component={Input}
                    />
                    <Field
                      name="name_ru"
                      label={`${t("Nomi")} RU`}
                      component={Input}
                    />
                  </div>
                  <div className="category-create-button">
                    <Button
                      type={"submit"}
                      onClick={handleSubmit}
                      disabled={isLoading}
                      text={t('Saqlash')}
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
};

export default Cards;
