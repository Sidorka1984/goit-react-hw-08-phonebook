import { useEffect, Suspense, lazy } from "react";
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Toaster, toast } from "react-hot-toast";
import operations from './redux/auth/auth-operation';
import AppBar from './component/AppBar/AppBar.jsx';
import PrivateRoute from './component/PrivateRoute';
import PublicRoute from './component/PublicRoute';
import authSelectors from './redux/auth/auth-selectors.js';
// import { getError } from './redux/auth/auth-selectors.js';
import ContactLoader from './Loader/Loader';



const HomeView = lazy(() => import('./views/HomeView/HomeView.jsx'));
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView.jsx'));
const LoginView = lazy(() => import('./views/LoginView/LoginView.jsx'));
const ContactsView =lazy(()=>import('./views/ContactView/ContactView.jsx'))

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrent = useSelector(authSelectors.getIsFetchingCurrent);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    toast.error( 'Invalid Authorization &#10060');
  }, [])

  return (
    <div>
      {isFetchingCurrent ? (
        <ContactLoader />
      ) : (
          <>
            <AppBar />
            {/* <Toaster autoClose={4000} position="top-right" /> */}
            <Switch>
              <Suspense fallback={<ContactLoader />}>
                <PublicRoute exact path='/'>
                  <HomeView />
                </PublicRoute>
                <PublicRoute path="/singup" restricted>
                  <RegisterView />
                </PublicRoute>
                <PublicRoute path="/login" restricted redirectTo="/contacts">
                  <LoginView />
                </PublicRoute>
                <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
              </Suspense>
            </Switch>
          </>
      )}
    </div>
  )
}
export default App;
