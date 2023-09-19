import logo from "assets/icons/LogoWithoutBg.svg";
import paymeLogo from "assets/icons/Payme_logo.png";
import { Button } from "components/buttons";
import { Input } from "components/fields";
import { Field } from "formik";
import { ContainerForm } from "modules";
import "./signIn.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "store/auth";
import { storage } from "services";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import qs from "qs";
import { get } from "lodash";

const SignIn = () => {
  const location = useLocation();
  const params = qs.parse(location.search, { ignoreQueryPrefix: true });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
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
              {/* Lorem ipsum dolor sit amet consectetur. Integer morbi interdum
              odio ac. Duis sit habitant gravida sit vulputate ac pulvinar. */}
            </p>
          </div>
        </div>
        <div className="login-wrapper__right">
          <div>
            <h1 className="login-wrapper__right__title">
              {t("Akkauntingizga kiring")}!
            </h1>
            <p className="login-wrapper__right__redirect">
              {t("Akkauntingiz mavjud emasmi")}?{" "}
              <span
                onClick={() =>
                  navigate({
                    pathname: "/sign-up",
                    search: qs.stringify(params),
                  })
                }
              >
                {t("Bu yerga bosing")}!
              </span>
            </p>
            <ToastContainer />
            <ContainerForm
              fields={[
                {
                  name: "userinput",
                  required: true,
                },
                {
                  name: "password",
                  required: true,
                },
              ]}
              url="/login/"
              onSuccess={(data) => {
                storage.set("token", data?.access);
                dispatch(signIn({ ...data, isAuthenticated: true }));
                // console.log(location.pathname);
                // navigate({pathname:location?.state ? location.state : '/'})
                // console.log(data);
                navigate("/");
              }}
              onError={(error) => {
                // console.log(error);
                toast.error(
                  get(error, "response.data.message", error?.message)
                );
                // console.log(error);
              }}
            >
              {({ handleSubmit, isLoading }) => {
                return (
                  <>
                    <Field
                      name="userinput"
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
                    {/* <p>Elektron pochta orqali kirish</p> */}
                    <div className="login-page__button-wrapper">
                      <Button
                        text={t("Kirish")}
                        onClick={handleSubmit}
                        type={"submit"}
                        disabled={isLoading ? true : false}
                      />
                    </div>
                  </>
                );
              }}
            </ContainerForm>
            <div className="payme_partner">
              <p>
                <span>
                  {i18n.language === "ru" ? "В партнерстве с" : ""} 
                </span>
                <span className="payme-logo">
                  <img src={paymeLogo} alt="payme_logo" />
                </span>
                {i18n.language === 'uz' ? 'Payme hamkorligida' : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
