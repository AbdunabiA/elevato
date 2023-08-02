import { ContainerForm } from 'modules'
import arrowLeft from 'assets/icons/ArrowCircleLeftYellow.png'
import './createTariff.scss'
import { Field } from 'formik'
import { Input } from 'components/fields'
import { Button } from 'components/buttons'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateTariff = () => {
  const navigate = useNavigate()
  return (
    <div className="container">
      <ToastContainer/>
      <div className="tariff__arrow-circle-left" onClick={() => navigate(-1)}>
        <img src={arrowLeft} alt="" />
      </div>
      <ContainerForm
        fields={[
          {
            name: "name",
            required: true,
          },
          {
            name: "cashback",
            required: true,
          },
          {
            name: "price",
            required: true,
          },
          {
            name: "daily_bonus",
            required: true,
          },
          {
            name: "monthly_bonus",
            required: true,
          },
        ]}
        url="/admin-status-packages/"
        onSuccess={(data) => {
          toast.success("Qo'shildi")
        }}
        onError={(error) => {
          toast.error(error.message)
        }}
      >
        {({ handleSubmit, isLoading }) => {
          return (
            <div className="create-tariff__form">
              <h1 className="title">Tarif yaratish</h1>
              <div className="create-tariff__form__fields">
                <Field
                  name="name"
                  label="Tarif to'liq nomi"
                  component={Input}
                />
                <Field
                  name="cashback"
                  label="Cashback"
                  type="number"
                  component={Input}
                />
                <Field
                  name="price"
                  label="Summasi"
                  type="number"
                  component={Input}
                />
                <Field
                  name="daily_bonus"
                  label="Kunlik bonus"
                  component={Input}
                  type="number"
                />
                <Field
                  name="monthly_bonus"
                  label="Oylik bonus"
                  component={Input}
                  type="number"
                />
              </div>
              <div className="create-tariff__form__button">
                <Button
                  text={"Yaratish"}
                  type={"submit"}
                  onClick={handleSubmit}
                  disabled={isLoading ? true : false}
                />
              </div>
            </div>
          );
        }}
      </ContainerForm>
    </div>
  );
}

export default CreateTariff