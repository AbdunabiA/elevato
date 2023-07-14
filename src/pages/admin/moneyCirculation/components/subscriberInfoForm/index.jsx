import { ContainerForm } from 'modules'
import './subscriberInfoForm.scss'
import { Field } from 'formik'
import { Input } from 'components/fields'
import woman from 'assets/images/Woman.png'
import { formatNums } from 'services/formatNums'
import { Button } from 'components/buttons'

const SubscriberInfoForm = () => {
  return (
    <div className="subscriber-info-form__wrapper">
      <ContainerForm
        fields={[
          {
            name: "name",
            type: "string",
            required: true,
          },
          {
            name: "surname",
            type: "string",
            required: true,
          },
          {
            name: "phone_num",
            type: "string",
            min: 9,
            max: 13,
            required: true,
          },
          {
            name: "card_num",
            min: 16,
            required: true,
          },
          {
            name: "passport",
            type: "string",
            min: 7,
            required: true,
          },
          {
            name: "birth_date",
            required: true,
          },
          {
            name: "email",
            type: "string",
          },
        ]}
      >
        {() => (
          <>
            <div className="subscriber-info-form__wrapper__top">
              <div className="subscriber-info-form__wrapper__top__left">
                <div className="img-wrapper">
                  <img src={woman} alt="img" />
                </div>
                <h1 className="title">Xurshida Zokirova</h1>
              </div>
              <div className="subscriber-info-form__wrapper__top__right">
                <div>
                  <h1 className="title">Bronza</h1>
                  <p>Obuna turi</p>
                </div>
                <div>
                  <h1 className="title">{formatNums(14000000)}</h1>
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
                  <Field name="name" label="Ism" component={Input} />
                  <Field name="surname" label="Familia" component={Input} />
                  <Field name="phone_num" label="Telefon" component={Input} />
                  <Field
                    name="card_num"
                    label="Karta raqami"
                    component={Input}
                    type="number"
                  />
                </div>
                <div className="fields__inputs">
                  <Field
                    name="passport"
                    label="Passport seriasi"
                    component={Input}
                  />
                  <Field
                    name="birth_date"
                    label="Tug'ilgan sana"
                    component={Input}
                    type='date'
                  />
                  <Field
                    name="email"
                    label="Elektron pochta"
                    component={Input}
                    type="email"
                  />
                </div>
              </div>
            </div>
            <div className="form-buttons">
              <Button text={"Ishdan olish"} color={"#FF0000"} />
              <Button text="saqlash" />
            </div>
          </>
        )}
      </ContainerForm>
    </div>
  );
}

export default SubscriberInfoForm