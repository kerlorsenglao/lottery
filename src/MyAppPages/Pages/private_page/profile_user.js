import React, { Component } from "react";
import { Layout, Col } from 'antd';
import NavBar from "../../../components/pages/nav/NavBar";
import Profile from "../../../components/pages/form/user/MyProfile";
const { Content, } = Layout;

class UserProfile extends Component {

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
                        <NavBar/>
                        {/* //////NavBar////// */}
                    </Col>
                </div>
                <Content className="site-layout" style={{ padding: '0 20px', marginTop: 1, }}>
                    {/* /// Profile /// */}
                    <Profile/>
                    {/* /// Profile /// */}
                </Content>
            </div>
        )
    }
}

export default UserProfile;
