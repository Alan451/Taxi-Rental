import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Pages
import ForgotPassword from '../pages/ForgotPassword'
import Login from '../pages/Login'


const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/forgotpassword" component={ForgotPassword} />
        </Switch>
      </div>
    </BrowserRouter>
  );
  
  export default AppRouter;