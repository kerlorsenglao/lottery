import React, { Component } from "react";
import { Row, Col, Typography, message, Button } from 'antd';
import InputDacbiet from "./input/input_dacbiet";
import InputGiai1 from "./input/input_giai1";
import InputGiai2 from "./input/input_giai2";
import InputGiai3 from "./input/input_giai3";
import InputGiai4 from "./input/input_giai4";
import InputGiai5 from "./input/input_giai5";
import InputGiai6 from "./input/input_giai6";
import InputGiai7 from "./input/input_giai7";

import Time from "../../calendar/time";
// import Vietnam from "./results";
// import Calendars from "../../calendar/calendar";
import dateFormat from "dateformat";
// import Dacbiet from "../../../lotterise/dacbiet";



const { Title, Text } = Typography;
class LotteryCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            giai2: ["",""],
            giai3: ["","","","","",""],
            giai4: ["","","",""],
            giai5: ["","","","","",""],
            giai6: ["","",""],
            giai7: ["","","",""]
        }
    }

    onFinish = (values) => {
        const name = this.state.name;
        const pass = this.state.password;
        const username = values.username;
        const password = values.password;
        const cf_password = values.cf_password;

        if (name == username) {
            message.warning('This user already existed');
        } else {
            if (password == cf_password) {
                message.success('Add new user successfully');
            } else {
                message.error('Your comferm password not correct');
            }
        }
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    onCreate = () => {
        setTimeout(() => {
            this.setState({
                giai2: [23654, 85962],
                giai3: [45879, 52634, 41528, 45786, 85475, 21035],
                giai4: [4526, 8596, 7458, 1203],
                giai5: [4587, 5234, 1528, 4786, 5475, 2135],
                giai6: [415, 650, 548],
                giai7: [12, 52, 10, 11],
            })
        },5000);
    }
    render() {
        const {
            giai2,
            giai3,
            giai4,
            giai5,
            giai6,
            giai7
        } = this.state;
        return (
            <div className="site-layout-background"
                style={{ minHeight: 380, }}
            >
                <div style={{ paddingTop: "10px" }}>
                    <Row>
                        <Col xs={{ span: 24, offset: 0 }}
                            md={{ span: 8, offset: 0 }}
                            lg={{ span: 6, offset: 3 }} //Calendar
                            // lg={{ span: 5, offset: 3 }} //Menu1
                            style={{
                                backgroundColor: "white", maxHeight: '95px',
                                marginTop: '4px', marginBottom: '15px',
                            }}>
                            <div style={{
                                height: '45px', backgroundColor: 'lightblue',
                                textAlign: 'center', paddingTop: '10px'
                            }}>
                                <Text strong style={{ fontSize: 18 }}>
                                    {
                                        dateFormat(new Date().toLocaleDateString(), 'dd-mm-yyyy')
                                    }
                                </Text>
                            </div>
                            <div style={{ height: '1px', backgroundColor: 'wheat' }}></div>
                            <div style={{ textAlign: 'center' }}>
                                <Time color='red' size={30} />
                            </div>
                        </Col>
                        <Col xs={{ span: 24, offset: 0 }}
                            md={{ span: 15, offset: 1 }}
                            lg={{ span: 11, offset: 1 }}
                            style={{
                                backgroundColor: 'white', minHeight: '600px',
                                marginTop: '4px'
                            }}>
                            <div style={{
                                border: "1px solid #f0f0f0", textAlign: 'center',
                                backgroundColor: 'lightblue'
                            }}>
                                <Title level={4} strong style={{ color: 'red', paddingTop: '6px' }}>FORM INPUT</Title>
                            </div>
                            <div style={{ height: '1px', backgroundColor: 'wheat' }}></div>
                            <div style={{ marginLeft: '1px', marginRight: '1px' }}>
                                <InputDacbiet />
                                <InputGiai1 />
                                <div style={{ marginRight: '5px', paddingBottom: '4px', paddingTop: '4px', borderBottom: "1px solid #f0f0f0", textAlign: 'right' }}>
                                    <Button type='primary' onClick={this.onCreate}>create all</Button>
                                </div>
                                <InputGiai2 val ={giai2}/>
                                <InputGiai3 val={giai3} />
                                <InputGiai4 val={giai4} />
                                <InputGiai5 val={giai5} />
                                <InputGiai6 val={giai6} />
                                <InputGiai7 val={giai7} />
                            </div>

                            {/* <Vietnam/> */}
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default LotteryCreate;