import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
const Dashboard = lazy(() => import("./containers/Dashboard/Dashboard"));
const publicRoutes = [
  {
    path: "/404",
    component: lazy(() => import("./containers/Pages/404")),
  },
  {
    path: "/505",
    component: lazy(() => import("./containers/Pages/500")),
  },
  {
    path: "/signin",
    component: lazy(() => import("./containers/Pages/SignIn/SignIn")),
  },
];
function PrivateRoute({ children, ...rest }) {
  const isLoggedIn = useSelector((userData) => userData.auth.token);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
const privateSub = "/admin";
export { privateSub };
export default function Routes() {
  return (
    <Suspense fallback={"loading ..."}>
      <Router>
        <Switch>
          {publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} exact={true}>
              <route.component />
            </Route>
          ))}

          <PrivateRoute path={privateSub}>
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </Suspense>
  );
}
