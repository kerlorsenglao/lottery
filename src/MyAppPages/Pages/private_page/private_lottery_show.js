import React, { Component } from "react";
import { Layout, Col, } from 'antd';
import LotteryShow from "../../../components/pages/form/lottery/form_show";
import NavBar from "../../../components/pages/nav/NavBar";
import {withRouter} from 'react-router-dom';

const { Content,} = Layout;

class Private_Lottery_Show extends Component {

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
                    <LotteryShow />
                </Content>
            </div>
        )
    }
}

export default withRouter(Private_Lottery_Show);
