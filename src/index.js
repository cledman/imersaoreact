import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import CadastroVideo from "./pages/register/Video";
import ErrorPage from "./pages/errors";
import CadastroCategoria from "./pages/register/Category";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/register/video" component={CadastroVideo} />
      <Route path="/register/category" component={CadastroCategoria} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
