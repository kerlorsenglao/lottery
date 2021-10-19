import React, { Component } from "react";
import { Layout, Typography, Col, Menu, Button } from 'antd';
import LotteryShow from "../../../components/pages/form/lottery/form_show";
import { Link } from "react-router-dom";
const { Content } = Layout;
const { Text } = Typography;

class Public_Show_Lottery extends Component {

    render() {
        return (
            <div>
                <div style={{ height: '38px', backgroundColor: 'red', }}>
                    <Col xs={{ span: 24, offset: 0 }}
                        sm={{ span: 12, offset: 2 }}
                        md={{ span: 20, offset: 2 }}
                        lg={{ span: 17, offset: 3 }}
                    >
                        {/* //////NavBar////// */}
                        <Menu onClick={this.handleClick} mode="horizontal"
                            style={{ borderRight: 'none', height: '39px', backgroundColor: 'red', }}>
                            <Menu.Item key="hanoi">
                                <Link to={{ pathname: "/" }}>
                                    <Text strong style={{ color: 'black' }}>Home</Text>
                                </Link>
                            </Menu.Item>
                            {/* <Menu.Item key='login'>
                                <Link to={{ pathname: "/admin" }}>
                                    <Text strong style={{ color: 'black' }}>login</Text>
                                </Link>
                            </Menu.Item> */}
                        </Menu>
                        {/* //////NavBar////// */}
                    </Col>
                </div>
                <Content className="site-layout" style={{ padding: '0 20px', marginTop: 1, }}>
                    <LotteryShow />
                </Content>
            </div>
        )
    }
}

export default Public_Show_Lottery;
