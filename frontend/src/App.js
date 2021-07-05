import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './containers/Layout';
import Home from './containers/Home';
import Login from './containers/Login'
import Signup from './containers/Signup'
import ResetPassword from './containers/ResetPassword'
import ResetPasswordConfirm from './containers/ResetPasswordConfirm'
import Activate from './containers/Activate'
import {compose} from "redux";
import store from "./store";
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/signup" component={Signup}/>
                        <Route exact path="/reset-password" component={ResetPassword}/>
                        <Route exact path="/password/reset/confirm/:uid/:token" component={ResetPasswordConfirm}/>
                        <Route exact path="/activate/:uid/:token" component={Activate}/>
                    </Switch>
                </Layout>
            </Router>
        </Provider>
    )
}

export default App;