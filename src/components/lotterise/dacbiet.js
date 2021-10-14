import React, { Component } from "react";

import axios from "axios";
import { API_URL } from "../../API/api_url";

import { Row, Col, Typography, Image } from 'antd';
import Loading from '../../assets/images/loading.gif';
// import { getAllDacBiet,getDacBietToday } from "../../API/lotteryAPI";
// import { getDateFormat } from "../../helpers/Helper";


const { Text } = Typography;
class Dacbiet extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const {result} = this.props;
        return (
            <div style={{ borderBottom: "1px solid #f0f0f0", }}>
                <Row>
                    <Col span={4}>
                        <div style={{
                            minHeight: '40px', textAlign: 'center',
                            paddingTop: '15px',
                        }}>
                            <Text strong >Đặc Biệt</Text>
                        </div>
                    </Col>
                    <Col span={20}>
                        <div style={{
                            minHeight: '50px', textAlign: 'center', paddingTop: '15px',
                            borderLeft: "1px solid #f0f0f0"
                        }}>
                            {
                                result
                                    ? 
                                    <Text strong style={{ color: 'red' }} >{result}</Text>
                                    : 
                                    <Image src={Loading} style={{ width: "20px" }} />
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Dacbiet;