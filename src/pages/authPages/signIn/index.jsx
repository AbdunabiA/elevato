import logo from 'assets/icons/LogoWithoutBg.svg'
import { Button } from 'components/buttons';
import { Input } from 'components/fields';
import { Field } from 'formik';
import { ContainerForm } from 'modules';
import './signIn.scss'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from 'store/auth';
import { storage } from 'services';

const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <div className="container1">
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
            <h1 className="login-wrapper__right__title">
              Akkauntingizga kiring!
            </h1>
            <p className="login-wrapper__right__redirect">
              Akkauntingiz mavjud emasmi? <span onClick={()=>navigate('/sign-up')}>Bu yerga bosing!</span>
            </p>
            <ContainerForm 
              fields={[
                {
                  name:'userinput',
                  required:true,
                },
                {
                  name:'password',
                  required:true,
                }
              ]}
              url='/login/'
              onSuccess={(data)=>{
                storage.set("token", data?.access);
                dispatch(signIn({...data, isAuthenticated:true}))
                navigate('/')
              }}
              onError={(error)=>{
                console.log(error);
              }}
            >
              {({handleSubmit, isLoading}) => {
                return (
                  <>
                    <Field
                      name="userinput"
                      label="Login"
                      component={Input}
                      wrapperClassName={"login-input"}
                    />
                    <Field
                      name="password"
                      label="Parol"
                      component={Input}
                      wrapperClassName={"login-input"}
                    />
                    {/* <p>Elektron pochta orqali kirish</p> */}
                    <div className="login-page__button-wrapper">
                      <Button
                        text="Kirish"
                        onClick={handleSubmit}
                        type={'submit'}
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
}

export default SignIn