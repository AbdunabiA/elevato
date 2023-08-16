import { ContainerForm } from 'modules'
import './subscriberInfoForm.scss'
import { Field } from 'formik'
import { Input } from 'components/fields'
import avatar from 'assets/images/avatar.png'
import { formatNums } from 'services/formatNums'
import { Button } from 'components/buttons'
import { get } from 'lodash'
import { useTranslation } from 'react-i18next'
import moment from 'moment'
import { useState } from 'react'
import Modal from 'components/modal'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubscriberInfoForm = ({data}) => {
  const {t} = useTranslation()
  const [passwordModal, setPasswordModal] = useState(false)
  return (
    <div className="subscriber-info-form__wrapper">
      <ContainerForm
        fields={[
          {
            name: "first_name",
            type: "string",
            required: true,
            value: get(data, "user.first_name", ""),
          },
          {
            name: "last_name",
            type: "string",
            required: true,
            value: get(data, "user.last_name", ""),
          },
          {
            name: "phone_number",
            type: "string",
            min: 9,
            max: 13,
            required: true,
            value: get(data, "user.phone_number", ""),
          },
          {
            name: "card_number",
            min: 16,
            required: true,
            value: get(data, "card.number", ""),
          },
          {
            name: "card_expirey",
            required: true,
            value: get(data, "card.expire", ""),
          },
          {
            name: "passport_num",
            type: "string",
            min: 5,
            required: true,
            value: get(data, "user.passport_num", ""),
          },
          {
            name: "passport_series",
            type: "string",
            min: 2,
            required: true,
            value: get(data, "user.passport_series", ""),
          },
          {
            name: "birth_date",
            required: true,
            value: get(data, "user.dateOfBirth", ""),
          },
          // {
          //   name: "email",
          //   type: "string",
          //   // value:get(data, 'user.email', '')
          // },
        ]}
        url='/change-user-info/'
        method={'patch'}
        onSuccess={()=>{
          toast.success("successful")
        }}
        onError={(error)=>{
          toast.error(error.message)
        }}
      >
        {({handleSubmit, isLoading:patchLoading}) => (
          <>
            <div className="subscriber-info-form__wrapper__top">
              <div className="subscriber-info-form__wrapper__top__left">
                <div className="img-wrapper">
                  {!data?.user?.photo ? (
                    <img src={avatar} alt="img" />
                  ) : (
                    <img
                      src={`https://elevato.pythonanywhere.com${data?.user?.photo}`}
                      alt="img"
                    />
                  )}
                </div>
                <h1 className="title">
                  {data?.user?.first_name} {data?.user?.last_name}
                </h1>
              </div>
              <div className="subscriber-info-form__wrapper__top__right">
                <div>
                  <h1 className="title">
                    {data?.status?.name}|{data?.status?.cashback}%
                  </h1>
                  <p>{t("Obuna turi")}</p>
                </div>
                <div>
                  <h1 className="title">{formatNums(data?.money)}$</h1>
                  <p>{t("Hisob raqamidagi summa")}</p>
                </div>
              </div>
            </div>
            <div className="subscriber-info-form__wrapper__middle">
              <div className="start-work">
                <h1>{t("Ish boshlagan sanasi")}:</h1>
                <p>{moment(data?.user?.date).format("DD.MM.YYYY")}</p>
              </div>
              {/* <div className="start-work">
                <h1>{t("Keyingi obuna to’lovi kuni")}:</h1>
                <p>12.04.2023</p>
              </div> */}
            </div>
            <div className="subscriber-info-form__wrapper__bottom">
              <h1>{t("Taxrirlash")}</h1>
              <div className="fields">
                <div className="fields__inputs">
                  <Field name="first_name" label={t("Ism")} component={Input} />
                  <Field
                    name="last_name"
                    label={t("Familiya")}
                    component={Input}
                  />

                  <Field
                    name="card_number"
                    label={t("Karta raqami")}
                    component={Input}
                    type="number"
                    wrapperClassName="card_num"
                  />
                  <Field
                    name="card_expirey"
                    label={t("Karta amal qlish muddati")}
                    component={Input}
                    wrapperClassName="card_exp"
                  />
                </div>
                <div
                  className="fields__inputs"
                  // style={{ border: "1px solid black" }}
                >
                  {/* <Field
                    name="email"
                    label="Elektron po'chta"
                    component={Input}
                  /> */}
                  <div>
                    <label className="label">{t("Passport seria")}</label>
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
                  <Field
                    name="birth_date"
                    label={t("Tug'ilgan sana")}
                    type="date"
                    component={Input}
                  />
                  <Field
                    name="phone_number"
                    label={t("Telefon raqam")}
                    component={Input}
                  />
                  <div>
                    <span>{t("Taklif id")}</span>
                    <div 
                      className='profile-offer-id'
                      onClick={(e)=>{
                        navigator.clipboard.writeText(
                          `https://elevatto.netlify.app/sign-up?id=${e.target.innerText}`
                        );
                        toast.success('COPIED')
                      }}
                    >
                      {data.user.offer_id}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {
              passwordModal ? (
                <Modal onClose={()=>setPasswordModal(false)}>
                  <ContainerForm
                    fields={[
                      {
                        name:'password',
                        required:true,
                        min:8
                      },
                      {
                        name:'confirm_password',
                        required:true,
                        min:8
                      }
                    ]}
                  >
                    {
                      ({handleSubmit:submitPassword, isLoading:passwordLoading})=>{
                        return (
                          <>
                            <Field
                              component={Input}
                              name="password"
                              label={t("Parol")}
                            />
                            <Field
                              component={Input}
                              name="confirm_password"
                              label={t("Parolni tasdiqlang")}
                            />
                            <div>
                              <Button 
                                text={t('Saqlash')} 
                                onClick={submitPassword}
                                disabled={passwordLoading ? true : false}
                                type={'submit'}
                              />
                            </div>
                          </>
                        );
                      }
                    }
                  </ContainerForm>
                </Modal>
              ) : null
            }
            <div className="form-buttons">
              {/* <Button 
                text={t("Parol o'zgartirish")} 
                type={'button'}
                onClick={()=>setPasswordModal(true)}
              /> */}
              <Button 
                text="saqlash" 
                onClick={handleSubmit} 
                disabled={patchLoading ? true : false}
                type={'submit'}
              />
            </div>
          </>
        )}
      </ContainerForm>
      <ToastContainer/>
    </div>
  );
}

export default SubscriberInfoForm