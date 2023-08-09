
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import RoutesWrapper from './routes'
import { get } from 'lodash';
import { Suspense, useEffect } from 'react';
import { storage } from 'services';
import { useTranslation } from 'react-i18next';

function App() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => get(state, "auth"));
  // const {i18n} = useTranslation()

  // if(i18n.language == 'ru-RU'){
  //   i18n.changeLanguage('ru')
  // }
    
  const location = useLocation()
  useEffect(() => {
    if(!isAuthenticated) {
      if(location.pathname !== '/sign-up'){
        navigate("/sign-in");
      }
    }
  }, [isAuthenticated]);


 

  return (
    <Suspense fallback='loading...'>
      <RoutesWrapper/>
    </Suspense>
  )
}

export default App
