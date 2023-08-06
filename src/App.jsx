
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import RoutesWrapper from './routes'
import { get } from 'lodash';
import { useEffect } from 'react';
import { storage } from 'services';

function App() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => get(state, "auth"));
  // const isAuthenticated = true
  const location = useLocation()
  useEffect(() => {
    if(!isAuthenticated) {
      if(location.pathname !== '/sign-up'){
        navigate("/sign-in");
      }
    }
  }, [isAuthenticated]);

 

  return (
    <RoutesWrapper/>
  )
}

export default App
