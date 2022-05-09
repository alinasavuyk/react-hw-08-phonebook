import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container';
import { authOperations,authSelectors } from './redux/auth';
import { lazy, Suspense} from "react";
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import PublicRoute from './components/PublicRoute/PublicRoute'


const  HomeView = lazy(() => import('./views/HomeView'));
const ContactsView = lazy(() => import('./views/ContactsView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));

export default function App() {
  const dispatch = useDispatch();
const isFetchingCurrentUser=useSelector(authSelectors.getIsFetchingCurrentUser)
console.log(isFetchingCurrentUser)
  useEffect(() => {
    function fetchCurrent(){
       dispatch(authOperations.fetchCurrentUser())
 }
 fetchCurrent()
 }, [dispatch]);

  return (
    !isFetchingCurrentUser&&(
<Container>
      <AppBar />
      <Suspense fallback={<h1>Загрузка...</h1>}>
      <Routes>
        <Route path="/react-hw-08-phonebook" element={
              <PublicRoute >
             <HomeView/>
             </PublicRoute>
        } />
        <Route path="/react-hw-08-phonebook/register" element={
           <PublicRoute restricted>
             <RegisterView/>
           </PublicRoute>
        } />
        <Route path="/react-hw-08-phonebook/login" element={
              <PublicRoute restricted>
                <LoginView/>
              </PublicRoute>} />
              <Route
              path="/react-hw-08-phonebook/contacts"
              element={
                <PrivateRoute>
                  <ContactsView />
                </PrivateRoute>
              }
            />
        </Routes>
        </Suspense>
    </Container>
    )
    
  );
}
