import React, { lazy, Suspense } from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
const routes = {
  home: {
    path: "",
    component: lazy(() => import("./../Home")),
    exact: true,
    show: true,
  },

  users: {
    path: "users",
    component: lazy(() => import("./../Users")),
    exact: true,
    show: true,
  },
};
export { routes };
export default function AppRouter() {
  const { url } = useRouteMatch();
  return (
    <Suspense fallback={"loading ...."}>
      <Switch>
        {Object.values(routes).map((route, idx) =>
          route.show ? (
            <Route exact={route.exact} key={idx} path={`${url}/${route.path}`}>
              <route.component />
            </Route>
          ) : null
        )}
      </Switch>
    </Suspense>
  );
}
