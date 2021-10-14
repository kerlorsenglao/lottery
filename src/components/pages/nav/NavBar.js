import React, { Component } from 'react';
import { Menu, Typography,message } from 'antd';
import { Link,Redirect } from 'react-router-dom';


const { Text } = Typography;
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '',
            isAuth: false,
            logout_status : false,
        }
    }

    handleClick = e => {
        console.log('click ', e);
        localStorage.setItem('menuActive',e.key);
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
        let { current,isAuth,logout_status } = this.state;
        var menuActive = localStorage.getItem('menuActive');
        if(logout_status){
            return <Redirect to="/"/>
        }
        if(menuActive){
            current = menuActive;
        }
        return (
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal"
                style={{ borderRight: 'none', height: '39px', backgroundColor: 'red', }}>
                <Menu.Item key="home">
                    <Link to={{ pathname: "/admin" }}>
                        <Text strong style={{ color: 'black' }}>Home</Text>
                    </Link>
                </Menu.Item>
                {
                    JSON.parse(localStorage.getItem('isAuth')) ?
                        <Menu.Item key="lottery" >
                            <Link to={{ pathname: "/admin/lottery" }}>
                                <Text strong style={{ color: 'black' }}>Create Lottery</Text>
                            </Link>
                        </Menu.Item>
                        : null
                }
                {/* {
                    isAuth ?
                        <Menu.Item key="adduser" >
                            <Link to={{ pathname: "/admin/adduser" }}>
                                <Text strong style={{ color: 'black' }}>Add User</Text>
                            </Link>
                        </Menu.Item>
                        : null
                } */}
                {
                    isAuth ?
                        <Menu.Item key="profile" >
                            <Link to={{ pathname: "/admin/profile" }}>
                                <Text strong style={{ color: 'black' }}>My Profile</Text>
                            </Link>
                        </Menu.Item>
                        : null
                }
                {
                    isAuth ?
                        <Menu.Item style={{ paddingBottom: '10px' }} onClick={this.logOut}>
                            <Text strong style={{ color: 'black' }}>Log Out</Text>
                        </Menu.Item>
                        : null
                }

            </Menu>
        )
    }
}

export default NavBar;