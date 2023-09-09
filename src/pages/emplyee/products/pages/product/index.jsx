import { Button } from "components/buttons";
import ErrorPage from "components/errorPage";
import { AsyncSelect, DropZone, Input, TextArea } from "components/fields";
import Loader from "components/loader";
import { Field } from "formik";
import { get } from "lodash";
import { GetOne } from "modules";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeProduct = () => {
  const { id } = useParams();
  const { i18n, t } = useTranslation();
  const lang = i18n.language;
  const navigate = useNavigate();
  return (
    <GetOne queryKey={["employee-product"]} url={`employees-products/${id}`}>
      {({ item, isLoading, isError, error }) => {
        if (isLoading) return <Loader />;
        if (isError) return <ErrorPage {...{ error }} />;
        console.log(item);
        return (
          <>
            <div>
              <h1 className="title">Mahsulot qo'shish</h1>
              <div className="product-add-fields">
                <div className="product-add-fields__left">
                  <label className="input-field__wrapper">
                    <span className="label">{t("Mahsulot")}</span>
                    <div>
                      <input
                        className="custom-input"
                        type="text"
                        disabled
                        value={get(item, "name", "")}
                      />
                    </div>
                  </label>
                  <label className="input-field__wrapper">
                    <span className="label">{t("Mahsulot narxi")}</span>
                    <div>
                      <input
                        className="custom-input"
                        type="text"
                        disabled
                        value={get(item, "price", "")}
                      />
                    </div>
                  </label>
                </div>
                <div className="product-add-fields__right">
                  <label className="input-field__wrapper">
                    <span className="label">{t("Kategoriya")}</span>
                    <div>
                      <input
                        className="custom-input"
                        type="text"
                        disabled
                        value={get(item, `category.name_${lang}`, "")}
                      />
                    </div>
                  </label>
                  <label className="input-field__wrapper">
                    <span className="label">{t("Ishlab chiqaruvchi")}</span>
                    <div>
                      <input
                        className="custom-input"
                        type="text"
                        disabled
                        value={get(item, "manufacturer", "")}
                      />
                    </div>
                  </label>
                </div>
              </div>
              <div className="product-add-fields">
                <div className="product-add-fields__left">
                  {/* <Field
                    name="about_uz"
                    label="Batafsil UZ"
                    component={TextArea}
                  /> */}
                  <label className="input-field__wrapper">
                    <span className="label">{t("Batafsil")} UZ</span>
                    <div>
                      <input
                        className="custom-input"
                        type="text"
                        disabled
                        value={get(item, `about_uz`, "")}
                      />
                    </div>
                  </label>
                </div>
                <div className="product-add-fields__right">
                  <label className="input-field__wrapper">
                    <span className="label">{t("Batafsil")} RU</span>
                    <div>
                      <input
                        className="custom-input"
                        type="text"
                        disabled
                        value={get(item, "about_ru", "")}
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="dropzone-image">
              <img
                src={`https://paymentstest-60d8729405f3.herokuapp.com${item?.photo}`}
                alt="img"
              />
            </div>
            {/* <div className="add-product__button">
              <Button
                text={"O'chirish"}
                type={"button"}
                color={"#FF0000"}
                onClick={() =>
                  deleteProduct({
                    method: "delete",
                    url: `/admin-products/${id}`,
                    onSuccess: () => navigate(-1),
                    onError: (error) => toast.error(error.message),
                  })
                }
                disabled={deleteLoading ? true : false}
              />
              <Button
                text={"Saqlash"}
                onClick={handleSubmit}
                type={"submit"}
                disabled={isLoading ? true : false}
              />
            </div> */}
          </>
        );
      }}
    </GetOne>
  );
};

export default EmployeeProduct;
