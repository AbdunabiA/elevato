import { ContainerForm, GetOne } from "modules";
import arrowLeft from "assets/icons/ArrowCircleLeftYellow.png";
import "./updateTariff.scss";
import { Field } from "formik";
import { Input } from "components/fields";
import { Button } from "components/buttons";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "components/loader";
import ErrorPage from "components/errorPage";
import { get } from "lodash";
import { usePost } from "crud";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQueryClient } from "@tanstack/react-query";

const UpdateTariff = () => {
  const navigate = useNavigate();
  const {id} = useParams()
  const {mutate} = usePost()
  const queryClient = useQueryClient();
  return (
    <GetOne queryKey={['one-tariff']} url={`admin-status-packages/${id}`}>
      {
        ({item, isLoading, isError, error})=>{
          if(isLoading) return <Loader/>
          if(isError) return <ErrorPage {...{error}}/>
          console.log(item);
          return (
            <div className="container">
              <div
                className="tariff__arrow-circle-left"
                onClick={() => navigate(-1)}
              >
                <img src={arrowLeft} alt="" />
                <ToastContainer />
              </div>
              <ContainerForm
                method={"put"}
                fields={[
                  {
                    name: "name",
                    value: get(item, "name", ""),
                    required: true,
                  },
                  {
                    name: "cashback",
                    value: get(item, "cashback", ""),
                    required: true,
                  },
                  {
                    name: "price",
                    value: get(item, "price", ""),
                    required: true,
                  },
                  {
                    name: "daily_bonus",
                    value: get(item, "daily_bonus", ""),
                    required: true,
                  },
                  {
                    name: "monthly_bonus",
                    value: get(item, "monthly_bonus", ""),
                    required: true,
                  },
                ]}
                url={`/admin-status-packages/${id}/`}
                onSuccess={(data) => {
                  queryClient.invalidateQueries("one-tariff");
                  toast.success("Saqlandi");
                }}
                onError={(error) => {
                  console.log(error);
                  toast.error(error?.message);
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
                          onClick={() =>
                            mutate({
                              url: `admin-status-packages/${id}`,
                              method: "delete",
                              onSuccess: () => {
                                navigate(-1);
                              },
                              onError: (error) => toast.error(error?.message),
                            })
                          }
                          text={"Tarifni o'chirish"}
                          color={"#FF0000"}
                          disabled={isLoading ? true : false}
                          type={"button"}
                        />
                        <Button
                          text={"Saqlash"}
                          disabled={isLoading ? true : false}
                          onClick={handleSubmit}
                          type={"submit"}
                        />
                      </div>
                    </div>
                  );
                }}
              </ContainerForm>
            </div>
          );
        }
      }
  </GetOne>
  );
};

export default UpdateTariff;
