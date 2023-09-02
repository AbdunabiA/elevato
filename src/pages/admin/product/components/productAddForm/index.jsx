import { AsyncSelect, DropZone, Input, TextArea } from "components/fields";
import { Field } from "formik";
import { ContainerForm } from "modules"
import './productAddForm.scss'
import { Button } from "components/buttons";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


const ProductAddForm = () => {
  const {i18n, t} = useTranslation()
  const lang = i18n.language
  const navigate = useNavigate()
  return (
    <ContainerForm 
      fields={[
        {
          name:'name',
          required:true,
        },
        {
          name:'price',
          required:true,
        },
        {
          name:'manufacturer',
        },
        {
          name:'category',
          type:'object',
          onSubmitValue: (value) => value?.id,
        },
        {
          name:'about_uz',
          required:true,
        },
        {
          name:'about_ru',
          required:true,
        },
      ]}
      url="/admin-products/"
      onSuccess={(data)=>{
        navigate(`/update-product/${data?.id}`)
      }}
      onError={(error)=>{
        toast.error(error?.message)
      }}
    >
        {
            ({handleSubmit, isLoading})=>{
                return (
                  <>
                    <div>
                      <ToastContainer />
                      <h1 className="title">{t("Mahsulot qo'shish")}</h1>
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
                    <div className="add-product__button">
                      <Button
                        text={t("Saqlash")}
                        onClick={handleSubmit}
                        type={"submit"}
                        disabled={isLoading ? true : false}
                      />
                    </div>
                  </>
                );
            }
        }
    </ContainerForm>
  )
}

export default ProductAddForm