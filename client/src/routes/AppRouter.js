import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Pages
import ForgotPassword from '../pages/ForgotPassword'
import Login from '../pages/Login'
import Student from '../pages/StudentPage'
import Driver from '../pages/DriverPage'
import Signup from '../pages/Signup'
const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/student" component = {Student} />
          <Route path="/driver" component = {Driver} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </BrowserRouter>
  );
  
  export default AppRouter;