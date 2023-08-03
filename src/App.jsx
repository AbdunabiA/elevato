
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import RoutesWrapper from './routes'
import { get } from 'lodash';
import { useEffect } from 'react';
import { storage } from 'services';

function App() {
  const navigate = useNavigate();
  // const { isAuthenticated } = useSelector((state) => get(state, "auth"));
  const isAuthenticated = true
  useEffect(() => {
    if (isAuthenticated) {
      // navigate("/");
    } else {
      navigate("/auth/sign-in");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    let role = storage.get('role')
    if (!role) storage.set("role", "admin");
  }, []);

  return (
    <RoutesWrapper/>
  )
}

export default App
