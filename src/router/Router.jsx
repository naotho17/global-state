import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/templete/DefaultLayout";
import { HeaderOnly } from "../components/templete/HeaderOnly";
export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* "/"の時はDefaultLayoutで囲う */}
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        {/* "/users"の時はHeaderOnlyで囲う */}
        <Route exact path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
