import { ContainerForm } from 'modules'
import './employeeInfoForm.scss'
import woman from 'assets/images/Woman.png'
import { Field } from 'formik';
import { Input, TextArea } from 'components/fields';
import { Button } from 'components/buttons';
import Modal from 'components/modal';
import { useState } from 'react';
import { useGet } from 'crud';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

const EmployeeInfoForm = ({data}) => {
    // const [modal, setModal] = useState(false)
    // const data = useGet({url:'/users-profile', queryKey:['']})
    // console.log(data.data);
    const {t} = useTranslation()
  return (
    <ContainerForm
      fields={[
        {
          name: "first_name",
          requred: true,
          value: data?.first_name,
        },
        {
          name: "last_name",
          required: true,
          value: data.last_name,
        },
        {
          name: "phone_number",
          required: true,
          value: data?.phone_number,
        },
      ]}
    >
      {({ handleSubmit, isLoading }) => (
        <div className="employee-info-form">
          <div className="employee-info-form__top">
            <div className="employee-info-form__top__left">
              <div>
                <img
                  className="img-wrapper"
                  src={`https://elevato.pythonanywhere.com/${data?.photo}`}
                  alt=""
                />
              </div>
              <h1 className="title">{data?.first_name} {data?.last_name}</h1>
            </div>
            <div className="employee-info-form__top__right">
              <h1>{t("Ish boshlagan sanasi")}</h1>
              <p>{moment(data?.date).format('DD.MM.YYYY')}</p>
            </div>
          </div>
          <div className="employee-info-form__bottom">
            <h1>Taxrirlash</h1>
            <div className="fields">
              <div className="fields__inputs">
                <Field name="first_name" label="Ism" component={Input} />
                <Field name="last_name" label="Familia" component={Input} />
                <Field
                  name="phone_number"
                  label={t("Telefon raqam")}
                  component={Input}
                />
                {/* <Field
                  name="phone_num2"
                  label="Telefon raqam 2"
                  component={Input}
                /> */}
                {/* <Field
                  name="birth_date"
                  label="Tug'ilgan sana"
                  type="date"
                  component={Input}
                /> */}
              </div>
              <div className="fields__inputs">
                {/* <Field name="address" label="Manzil" component={Input} /> */}
                <div>
                  <label className="label">Passport seriasi</label>
                  <div className="passport_nums">
                    <Field
                      name="passport_series"
                      wrapperClassName="passport_series"
                      component={Input}
                    />
                    <Field
                      name="passport_num"
                      wrapperClassName="passport_num"
                      component={Input}
                    />
                  </div>
                </div>

                {/* <Field name="education" label="Ma'lumoti" component={Input} />
                <Field
                  name="university"
                  label="Tamomlagan oliygohi"
                  component={Input}
                /> */}
              </div>
            </div>
            <div className="textarea">
              <Field name="about" component={TextArea} />
            </div>
          </div>
          <div className="form-buttons">
            <Button text={"Ishdan olish"} color={"#FF0000"} />
            <Button
              text="Saqlash"
              onClick={handleSubmit}
              disabled={isLoading ? true : false}
            />
            {/* <Button
              text={"Parolni ozgartirish"}
              onClick={() => setModal(true)}
            /> */}
          </div>
          {/* {modal ? (
            <Modal onClose={() => setModal(false)}>
              <ContainerForm
                fields={[
                  {
                    name: "username",
                    required: true,
                  },
                  {
                    name: "password",
                    required: true,
                  },
                ]}
              >
                {() => (
                  <>
                    <Field name="username" label="Username" component={Input} />
                    <Field
                      name="password"
                      label="Parol"
                      type="password"
                      component={Input}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        marginTop: "20px",
                      }}
                    >
                      <Button text="saqlash" />
                    </div>
                  </>
                )}
              </ContainerForm>
            </Modal>
          ) : null} */}
        </div>
      )}
    </ContainerForm>
  );
}

export default EmployeeInfoForm