import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";
import Explore from "../Routes/Explore";
import Search from "../Routes/Search";
import Profile from "../Routes/Profile";

const LoggedInRoutes = () => (
    // 여기서 Switch 는 하나의 라우트만 렌더링해줌
    <Switch>
        <Route exact path="/" component={Feed}/>
        <Route path="/explore" component={Explore} />
        <Route path="/search" component={Search}/>
        <Route path="/:name" component={Profile} />
    </Switch>
);

const LoggedOutRoutes = () => (
    <Switch>
        <Route exact path="/" component={Auth}/>
    </Switch>
);
const AppRouter = ({isLoggedIn}) => 
    isLoggedIn ? <LoggedInRoutes/> : <LoggedOutRoutes/>;

AppRouter.prototype = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;