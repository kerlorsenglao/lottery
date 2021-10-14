import { Route, Switch } from "react-router";
import React, { Component } from 'react';
// import Login from "../components/pages/form/user/Login";
// import AddUser from "../components/pages/form/user/AddUser";
// import LotteryShow from "../components/pages/form/lottery/form_show";
// import LotteryCreate from "../components/pages/form/lottery/form_crud";
import Public_Show_Lottery from "../Pages/public_page/public_lottery_show";
import Private_Lottery_Show from "../Pages/private_page/private_lottery_show";
import Create_Lottery from "../Pages/private_page/add_lottery";
// import Add_User from "../Pages/private_page/add_user";
import LogIn from "../Pages/public_page/LogIn";
import ProtectedRoute from "./protected_route";
import Profile from "../Pages/private_page/profile_user"

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Public_Show_Lottery}/>
                <Route path="/login" component={LogIn}/>
                <ProtectedRoute path="/admin" exact component={Private_Lottery_Show}/>
                <ProtectedRoute path="/admin/lottery" component={Create_Lottery}/>
                {/* <ProtectedRoute path="/admin/adduser" component={Add_User}/> */}
                <ProtectedRoute path="/admin/profile" component={Profile}/>
                {/* <Route path="/admin" exact component={Private_Lottery_Show}/> */}
                {/* <Route path="/admin/lottery" exact component={Create_Lottery}/> */}
                {/* <Route path="/admin/adduser" exact component={Add_User}/> */}
            </Switch>
        );
    }
}

export default Routes;