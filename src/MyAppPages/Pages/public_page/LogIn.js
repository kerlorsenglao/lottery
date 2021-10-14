import React, { Component } from "react";
import { Layout, Typography, Col, Menu } from 'antd';
import Login from "../../../components/pages/form/user/Login";
import {Link} from 'react-router-dom'

const {Content} = Layout;
const {Text} = Typography;

class LogIn extends Component {

    render() {
        return (
            <div>
                <div style={{ height: '38px', backgroundColor: 'red', }}>
                    <Col xs={{ span: 24, offset: 0 }}
                        sm={{ span: 12, offset: 2 }}
                        md={{ span: 20, offset: 2 }}
                        lg={{ span: 17, offset: 3 }}
                    >
                        <Menu onClick={this.handleClick} mode="horizontal"
                            style={{ borderRight: 'none', height: '39px', backgroundColor: 'red', }}>
                            <Menu.Item key="hanoi">
                                <Link to={{ pathname: "/" }}>
                                    <Text strong style={{ color: 'black' }}>Home</Text>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </div>
                <Content className="site-layout" style={{ padding: '0 20px', marginTop: 1, }}>
                    {/* User Login Form */}
                        <Login/>
                    {/* User Login Form */}
                </Content>
            </div>
        )
    }
}

export default LogIn;
