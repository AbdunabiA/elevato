import { useNavigate, useParams } from "react-router-dom"
import './updateProduct.scss'
import { GetOne } from "modules"
import { AsyncSelect, DropZone, Input, TextArea } from "components/fields";
import { Field } from "formik";
import { ContainerForm } from "modules";
import { Button } from "components/buttons";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "components/loader";
import ErrorPage from "components/errorPage";
import { get } from "lodash";
import { useQueryClient } from "@tanstack/react-query";
import { usePost } from "crud";

const UpdateProduct = () => {
    const {id} = useParams()
    const {i18n, t} = useTranslation();
    const lang = i18n.language;
    const queryClient = useQueryClient()
    const {mutate:deleteProduct, isLoading:deleteLoading} = usePost()
    const navigate = useNavigate()
  return (
    <GetOne queryKey={['admin-product']} url={`/admin-products/${id}`}>
        {
            ({item, isLoading, isError, error})=>{
                if(isLoading) return < Loader/>
                if(isError) return <ErrorPage {...{error}}/>
                console.log(item);
                return (
                  <div className="container">
                    <ContainerForm
                      fields={[
                        {
                          name: "name",
                          required: true,
                          value: get(item, "name", ""),
                        },
                        {
                          name: "price",
                          required: true,
                          value: get(item, "price", ""),
                        },
                        {
                          name: "manufacturer",
                          value: get(item, "manufacturer", ""),
                        },
                        {
                          name: "category",
                          type: "object",
                          value: get(item, 'category', {}),
                          onSubmitValue: (value) => value?.id,
                        },
                        {
                          name: "about_uz",
                          required: true,
                          value: get(item, "about_uz", ""),
                        },
                        {
                          name: "about_ru",
                          required: true,
                          value: get(item, "about_ru", ""),
                        },
                      ]}
                      url="/admin-products/"
                      onSuccess={(data) => {
                        console.log(data);
                        toast.success("O'zgardi");
                      }}
                      onError={(error) => {
                        toast.error(error?.message);
                      }}
                    >
                      {({ handleSubmit, isLoading }) => {
                        return (
                          <>
                            <div>
                              <ToastContainer />
                              <h1 className="title">Mahsulot qo'shish</h1>
                              <div className="product-add-fields">
                                <div className="product-add-fields__left">
                                  <Field
                                    name="name"
                                    label={t("Mahsulot to'liq nomi")}
                                    component={Input}
                                  />
                                  <Field
                                    name="price"
                                    label={t("Mahsulot narxi")}
                                    component={Input}
                                    type="number"
                                  />
                                </div>
                                <div className="product-add-fields__right">
                                  <Field
                                    name="category"
                                    label={t("Kategoriya")}
                                    isSearchable
                                    component={AsyncSelect}
                                    loadOptionsUrl="/categories/"
                                    lastKeys=".categories"
                                    optionLabel={`name_${lang}`}
                                    optionValue={`name_${lang}`}
                                    searchKey={`name_${lang}`}
                                  />
                                  <Field
                                    name="manufacturer"
                                    label={t("Ishlab chiqaruvchi")}
                                    component={Input}
                                  />
                                </div>
                              </div>
                              <div className="product-add-fields">
                                <div className="product-add-fields__left">
                                  <Field
                                    name="about_uz"
                                    label={`${t("Batafsil")} UZ`}
                                    component={TextArea}
                                  />
                                </div>
                                <div className="product-add-fields__right">
                                  <Field
                                    name="about_ru"
                                    label={`${t("Batafsil")} RU`}
                                    component={TextArea}
                                  />
                                </div>
                              </div>
                            </div>
                            <div>
                              <DropZone
                                sendUrl={`/admin-products/${id}/`}
                                onSuccess={(data) =>
                                  queryClient.invalidateQueries("admin-product")
                                }
                                onError={(err) => toast.error(err?.message)}
                                method="patch"
                                photoUrl={get(item, "photo", "")}
                              />
                            </div>
                            <div className="add-product__button">
                              <Button
                                text={t("O'chirish")}
                                type={"button"}
                                color={"#FF0000"}
                                onClick={() =>
                                  deleteProduct({
                                    method: "delete",
                                    url: `/admin-products/${id}`,
                                    onSuccess: () => navigate(-1),
                                    onError: (error) =>
                                      toast.error(error.message),
                                  })
                                }
                                disabled={deleteLoading}
                              />
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
                  </div>
                );
            }
        }
    </GetOne>
  )
}

export default UpdateProduct