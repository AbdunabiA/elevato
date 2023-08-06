import logo from "assets/icons/LogoWithoutBg.svg";
import { Button } from "components/buttons";
import { Input } from "components/fields";
import { Field } from "formik";
import { ContainerForm } from "modules";
import "./signUp.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "store/auth";
import { storage } from "services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({ phone_number: false, phone_verified:false });
  const dispatch = useDispatch()
  
  return (
    <div className="container1">
      <ToastContainer/>
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
            <h2>Xush kelibsiz!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Integer morbi interdum
              odio ac. Duis sit habitant gravida sit vulputate ac pulvinar.
            </p>
          </div>
        </div>
        <div className="login-wrapper__right">
          <div>
            <h1 className="login-wrapper__right__title">Akkaunt yarating!</h1>
            <p className="login-wrapper__right__redirect">
              Akkauntingiz mavjudmi?
              <span onClick={() => navigate("/sign-in")}>
                {" "}
                Bu yerga bosing!
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
                      },
                      {
                        name: "confirm_password",
                        compare: "password",
                        required: true,
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
                      },
                    ]
                  : [
                      {
                        name: "verify",
                        required: true,
                      },
                    ]
              }
              url={
                !userInfo?.phone_number ? "/signup/" : userInfo?.phone_verified ? '/change-user-info/':'/verify/'
              }
              onSuccess={(data) => {
                console.log(data);
                if(!userInfo?.phone_number){
                  setUserInfo((prev)=>{
                    return {...prev, phone_number:true}
                  })
                  dispatch(signIn({ ...data, isAuthenticated: false }));
                  storage.set('token', data?.access)
                } else if (!userInfo?.phone_verified) {
                  setUserInfo((prev) => {
                    return { ...prev, phone_verified: true };
                  });
                } else {
                  console.log('SUCCESSFUL');
                }
              }}
              onError={(error) => {
                toast.error(error?.message)
              }}
            >
              {({ handleSubmit, isLoading }) => {
                return (
                  <>
                    {!userInfo?.phone_number ? (
                      <Field
                        name="email_phone_number"
                        label="Telefon raqam"
                        component={Input}
                        wrapperClassName={"login-input"}
                      />
                    ) : userInfo?.phone_verified ? (
                      <div className="registration-fields">
                        <div className="registration-fields__inputs">
                          <Field
                            name="first_name"
                            label="Ism"
                            component={Input}
                            wrapperClassName={"login-input"}
                          />
                          <Field
                            name="last_name"
                            label="Familiya"
                            component={Input}
                            wrapperClassName={"login-input"}
                          />
                          <Field
                            name="username"
                            label="Username"
                            component={Input}
                            wrapperClassName={"login-input"}
                          />
                          <Field
                            name="password"
                            label="Parol"
                            component={Input}
                            wrapperClassName={"login-input"}
                          />
                        </div>
                        <div className="registration-fields__inputs">
                          <Field
                            name="confirm_password"
                            label="Parolni tasdiqlang"
                            component={Input}
                            wrapperClassName={"login-input"}
                          />
                          <div className="registration-fields__inputs__passport">
                            <label>Passport seria-raqam</label>
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
                          <Field
                            name="offer_id"
                            label="Taklif id"
                            component={Input}
                            wrapperClassName={"login-input"}
                          />
                        </div>
                      </div>
                    ) : (
                      <Field
                        name="verify"
                        label="Parol"
                        component={Input}
                        wrapperClassName={"login-input"}
                      />
                    )}
                    {/* <p>Elektron pochta orqali kirish</p> */}
                    <div className="login-page__button-wrapper">
                      <Button
                        text="Yuborish"
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
