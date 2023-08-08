import { ContainerForm } from 'modules'
import './subscriberInfoForm.scss'
import { Field } from 'formik'
import { Input } from 'components/fields'
import woman from 'assets/images/Woman.png'
import { formatNums } from 'services/formatNums'
import { Button } from 'components/buttons'
import { get } from 'lodash'

const SubscriberInfoForm = ({data}) => {
  return (
    <div className="subscriber-info-form__wrapper">
      <ContainerForm
        fields={[
          {
            name: "first_name",
            type: "string",
            required: true,
            value: get(data, 'user.first_name', '')
          },
          {
            name: "last_name",
            type: "string",
            required: true,
            value:get(data, 'user.last_name', '')
          },
          {
            name: "phone_number",
            type: "string",
            min: 9,
            max: 13,
            required: true,
            // value : get(data, 'user.phone_number', '')
          },
          {
            name: "card_number",
            min: 16,
            required: true,
          },
          {
            name: "card_expirey",
            min: 16,
            required: true,
          },
          {
            name: "passport_num",
            type: "string",
            min: 5,
            required: true,
            value: get(data, 'user.passport_num', '')
          },
          {
            name: "passport_series",
            type: "string",
            min: 2,
            required: true,
            value:get(data, 'user.passport_series', '')
          },
          {
            name: "birth_date",
            required: true,
          },
          // {
          //   name: "email",
          //   type: "string",
          //   // value:get(data, 'user.email', '')
          // },
        ]}
      >
        {() => (
          <>
            <div className="subscriber-info-form__wrapper__top">
              <div className="subscriber-info-form__wrapper__top__left">
                <div className="img-wrapper">
                  <img src={woman} alt="img" />
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
                  <p>Obuna turi</p>
                </div>
                <div>
                  <h1 className="title">{formatNums(data?.money)}</h1>
                  <p>Hisob raqamidagi summa</p>
                </div>
              </div>
            </div>
            <div className="subscriber-info-form__wrapper__middle">
              <div className="start-work">
                <h1>Ish boshlangan sanasi:</h1>
                <p>12.04.2018</p>
              </div>
              <div className="start-work">
                <h1>Keyingi obuna to’lovi kuni</h1>
                <p>12.04.2023</p>
              </div>
            </div>
            <div className="subscriber-info-form__wrapper__bottom">
              <h1>Taxrirlash</h1>
              <div className="fields">
                <div className="fields__inputs">
                  <Field name="first_name" label="Ism" component={Input} />
                  <Field name="last_name" label="Familia" component={Input} />
                  <Field
                    name="phone_number"
                    label="Telefon raqam"
                    component={Input}
                  />
                  <div>
                    <label>Karta raqami</label>
                    <div className="card_number">
                      <Field
                        name="card_number"
                        component={Input}
                        type="number"
                        wrapperClassName="card_num"
                      />
                      <Field
                        name="card_expirey"
                        component={Input}
                        wrapperClassName="card_exp"
                      />
                    </div>
                  </div>
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
                  <Field
                    name="birth_date"
                    label="Tug'ilgan sana"
                    type="date"
                    component={Input}
                  />
                </div>
              </div>
            </div>
            <div className="form-buttons">
              <Button text="saqlash" />
            </div>
          </>
        )}
      </ContainerForm>
    </div>
  );
}

export default SubscriberInfoForm