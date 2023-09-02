import logo from "assets/icons/LogoWithoutBg.svg";
import { Button } from "components/buttons";
import { Input } from "components/fields";
import { Field } from "formik";
import { ContainerForm } from "modules";
import "./signUp.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "store/auth";
import { api, storage } from "services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import qs from "qs";
import { get } from "lodash";
import CustomInputMask from "components/fields/inputMask";

const SignUp = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const params = qs.parse(location.search, { ignoreQueryPrefix: true });
  const [userInfo, setUserInfo] = useState({ phone_number: false, phone_verified:false});
  const dispatch = useDispatch()
  const {t} = useTranslation()
  const [minut, setMinut] = useState(1);
  const [sec, setSec] = useState(59);
  

   useEffect(() => {
     const interval = setInterval(() => {
       if (sec > 0) {
         setSec(sec - 1);
       }
       if (sec === 0) {
         if (minut === 0) {
           clearInterval(interval);
         } else {
           setSec(59);
           setMinut(minut - 1);
         }
       }
     }, 1000);

     return () => {
       clearInterval(interval);
     };
   }, [sec]);
  function resendCode() {
    setSec(59)
    setMinut(1)
    api.get('/new-verify/').then((data)=>{
      console.log(data);
    })
    .catch((error)=>{
      toast.error(error?.response?.data?.message);
    })
  }
  
  return (
    <div className="container1">
      <ToastContainer />
      <div className="login-wrapper">
        <div className="login-wrapper__left">
          <div className="login-wrapper__left__logo">
            <div className="login-wrapper__left__logo-wrapper">
              <img src={logo} alt="" />
            </div>
            <div></div>
          </div>
          <div className="squares-wrapper">
            <div className="black-square"></div>
            <div className="white-square"></div>
            <div className="yellow-square"></div>
          </div>
          <div className="login-wrapper__left__texts">
            <h2>{t("Xush kelibsiz")}!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Integer morbi interdum
              odio ac. Duis sit habitant gravida sit vulputate ac pulvinar.
            </p>
          </div>
        </div>
        <div className="login-wrapper__right">
          <div>
            <h1 className="login-wrapper__right__title">
              {t("Akkaunt yarating")}!
            </h1>
            <p className="login-wrapper__right__redirect">
              {t("Akkauntingiz mavjudmi")}?
              <span onClick={() => navigate({ pathname: "/sign-in", search:qs.stringify(params) })}>
                {t("Bu yerga bosing")}!
              </span>
            </p>
            <ContainerForm
              fields={
                !userInfo?.phone_number
                  ? [
                      {
                        name: "email_phone_number",
                        min: 13,
                        value: "+998",
                        required: true,
                        onSubmitValue:(value)=>{
                          return `+${value.match(/\d+/g).join('')}`
                        }
                      },
                    ]
                  : userInfo?.phone_verified
                  ? [
                      {
                        name: "first_name",
                        required: true,
                      },
                      {
                        name: "last_name",
                        required: true,
                      },
                      {
                        name: "username",
                        required: true,
                      },
                      {
                        name: "password",
                        required: true,
                        min: 8,
                      },
                      {
                        name: "confirm_password",
                        compare: "password",
                        required: true,
                        min: 8,
                      },
                      {
                        name: "passport_series",
                        required: true,
                        max: 2,
                      },
                      {
                        name: "passport_num",
                        required: true,
                        min: 7,
                      },
                      {
                        name: "offer_id",
                        required: true,
                        value:get(params, 'offer_id', '')
                      },
                      {
                        name: "dateOfBirth",
                      },
                    ]
                  : [
                      {
                        name: "code",
                        required: true,
                      },
                    ]
              }
              url={
                !userInfo?.phone_number
                  ? "/signup/"
                  : userInfo?.phone_verified
                  ? "/change-user-info/"
                  : "/verify/"
              }
              method={
                !userInfo?.phone_number
                  ? "post"
                  : userInfo?.phone_verified
                  ? "put"
                  : "post"
              }
              onSuccess={(data) => {
                // console.log(data);
                if (!userInfo?.phone_number) {
                  setUserInfo((prev) => {
                    return { ...prev, phone_number: true };
                  });
                  dispatch(signIn({ ...data, isAuthenticated: false }));
                  storage.set("token", data?.access);
                  setSec(59);
                  setMinut(1);
                } else if (!userInfo?.phone_verified) {
                  setUserInfo((prev) => {
                    return { ...prev, phone_verified: true };
                  });
                  dispatch(signIn({ ...data, isAuthenticated: false }));
                  storage.set("token", data?.access);
                  // clearInterval(interval);
                } else {
                  storage.remove("token");
                  // clearInterval(interval);
                  navigate({ pathname: "/sign-in", replace: true });
                }
              }}
              onError={(error) => {
                toast.error(error?.response?.data?.message);
                // console.log(error);
              }}
            >
              {({ handleSubmit, isLoading }) => {
                return (
                  <>
                    {!userInfo?.phone_number ? (
                      <Field
                        name="email_phone_number"
                        label={t("Telefon raqam")}
                        component={CustomInputMask}
                        wrapperClassName={"login-input"}
                        mask={'+998 (99) 999-99-99'}
                      />
                    ) : userInfo?.phone_verified ? (
                      <div className="registration-fields">
                        <div className="registration-fields__inputs">
                          <Field
                            name="first_name"
                            label={t("Ism")}
                            component={Input}
                            wrapperClassName={"login-input"}
                          />
                          <Field
                            name="last_name"
                            label={t("Familiya")}
                            component={Input}
                            wrapperClassName={"login-input"}
                          />
                          <Field
                            name="username"
                            label={t("Login")}
                            component={Input}
                            wrapperClassName={"login-input"}
                          />
                          <Field
                            name="password"
                            label={t("Parol")}
                            component={Input}
                            wrapperClassName={"login-input"}
                            type="password"
                          />
                        </div>
                        <div className="registration-fields__inputs">
                          <Field
                            name="confirm_password"
                            label={t("Parolni tasdiqlang")}
                            component={Input}
                            wrapperClassName={"login-input"}
                            type="password"
                          />
                          <div className="registration-fields__inputs__passport">
                            <label>{t("Passport seria")}</label>
                            <div>
                              <Field
                                name="passport_series"
                                component={Input}
                                wrapperClassName={
                                  "login-input reg__passport-series"
                                }
                              />
                              <Field
                                name="passport_num"
                                component={Input}
                                wrapperClassName={
                                  "login-input reg__passport-num"
                                }
                              />
                            </div>
                          </div>
                          {/* <Field
                            name="offer_id"
                            label={t("Taklif id")}
                            component={Input}
                            wrapperClassName={"login-input"}
                          /> */}
                          <Field
                            name="dateOfBirth"
                            label={t("Tug'ilgan sana")}
                            component={Input}
                            wrapperClassName={"login-input"}
                            type="date"
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <Field
                          name="code"
                          label={t("Parol")}
                          component={Input}
                          wrapperClassName={"login-input"}
                          type="password"
                        />
                        {sec === 0 && minut === 0 ? (
                          <Button
                            text={t("kodni qayta yuborish")}
                            onClick={() => resendCode()}
                          />
                        ) : (
                          <p className={""}>
                            {minut < 10 ? `0${minut}` : minut} :
                            {sec < 10 ? `0${sec}` : sec}
                          </p>
                        )}
                      </>
                    )}
                    {/* <p>Elektron pochta orqali kirish</p> */}
                    <div className="login-page__button-wrapper">
                      <Button
                        text={t("Yuborish")}
                        onClick={handleSubmit}
                        type={"submit"}
                        disabled={isLoading ? true : false}
                      />
                    </div>
                  </>
                );
              }}
            </ContainerForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
