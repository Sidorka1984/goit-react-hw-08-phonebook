import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import authSelectors from "../redux/auth/auth-selectors";

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = "/contacts",
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const showRedirect = isLoggedIn && restricted;
  console.log(showRedirect);
  return (
    <Route {...routeProps}>
      {showRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
