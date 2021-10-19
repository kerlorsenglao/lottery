import React, { Component } from 'react';
import { Menu, Typography, message, Button, } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import LotteryCreate from '../form/lottery/form_crud';


const { Text } = Typography;
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'home',
            isAuth: false,
            logout_status: false,
        }
    }

    handleClick = e => {
        console.log('click ', e);
        localStorage.setItem('menuActive', e.key);
        this.setState({ current: e.key });
    };

    logOut = () => {
        localStorage.clear();
        this.setState({
            logout_status: true,
        })
        message.success('Change to guest successfully')
    }
    componentDidMount() {
        var isAuth = JSON.parse(localStorage.getItem('isAuth'));
        if (isAuth) {
            this.setState({
                isAuth: isAuth,
            })
        }
    }
    render() {
        let { current, isAuth, logout_status,Array } = this.state;
        var menuActive = localStorage.getItem('menuActive');
        if (logout_status) {
            return <Redirect to="/" />
        }
        if (menuActive) {
            current = menuActive;
        }
        return (
            <Menu onClick={this.handleClick}  mode="horizontal" defaultSelectedKeys={[current]}
                style={{ borderRight: 'none', height: '39px', backgroundColor: 'red', }}>
                <Menu.Item key="home" style={{fontWeight:'bold'}}>
                    <Link to={{ pathname: "/home" }}>Home</Link>
                </Menu.Item>
                <Menu.Item key="lottery" style={{fontWeight:'bold'}}>
                    <Link to={{ pathname: "/lottery" }} >
                        Create
                    </Link>
                    {/* <Link to={{ pathname: "/admin/lottery" }}>
                        <Text strong style={{ color: 'black' }}>Create Lottery</Text>
                    </Link> */}
                </Menu.Item>
                <Menu.Item key="profile" style={{fontWeight:'bold'}}>
                    <Link to={{ pathname: "/profile" }}>
                        Profile
                    </Link>

                    {/* <Link to={{ pathname: "/admin/profile" }}>
                        <Text strong style={{ color: 'black' }}>My Profile</Text>
                    </Link> */}
                </Menu.Item>
                <Menu.Item style={{ paddingBottom: '10px' }} onClick={this.logOut}>
                    Log out
                    {/* <Text strong style={{ color: 'black' }}>Log Out</Text> */}
                </Menu.Item>
            </Menu>
        )
    }
}

export default NavBar;