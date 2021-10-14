import React, { Component } from "react";
import { Row, Col, Typography, Image } from 'antd';
import Loading from '../../assets/images/loading.gif';


const { Text } = Typography;

class Giai4 extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        const { result } = this.props;
        return (
            <div style={{ borderBottom: "1px solid #f0f0f0", }}>
                <Row>
                    <Col span={4}>
                        <div style={{ height: '50px', textAlign: 'center', paddingTop: '15px' }}>
                            <Text strong >Giải 4</Text>
                        </div>
                    </Col>
                    <Col span={5}>
                        <div style={{
                            height: '50px', textAlign: 'center', paddingTop: '15px',
                            borderLeft: "1px solid #f0f0f0"
                        }}>
                            {
                                !result[0]
                                    ? <Image src={Loading} style={{ width: "20px" }} />
                                    : <Text strong style={{ color: 'green' }} >{result[0]}</Text>
                            }
                            {/* <Text strong style={{ color: 'green' }} >8612</Text> */}
                        </div>
                    </Col>
                    <Col span={5}>
                        <div style={{
                            height: '50px', textAlign: 'center', paddingTop: '15px',
                            borderLeft: "1px solid #f0f0f0"
                        }}>
                            {
                                !result[1]
                                    ? <Image src={Loading} style={{ width: "20px" }} />
                                    : <Text strong style={{ color: 'green' }} >{result[1]}</Text>
                            }
                            {/* <Text strong style={{ color: 'green' }} >7712</Text> */}
                        </div>
                    </Col>
                    <Col span={5}>
                        <div style={{
                            height: '50px', textAlign: 'center', paddingTop: '15px',
                            borderLeft: "1px solid #f0f0f0"
                        }}>
                            {
                                !result[2]
                                    ? <Image src={Loading} style={{ width: "20px" }} />
                                    : <Text strong style={{ color: 'green' }} >{result[2]}</Text>
                            }
                            {/* <Text strong style={{ color: 'green' }} >5512</Text> */}
                        </div>
                    </Col>
                    <Col span={5}>
                        <div style={{
                            height: '50px', textAlign: 'center', paddingTop: '15px',
                            borderLeft: "1px solid #f0f0f0"
                        }}>
                            {
                                !result[3]
                                    ? <Image src={Loading} style={{ width: "20px" }} />
                                    : <Text strong style={{ color: 'green' }} >{result[3]}</Text>
                            }
                            {/* <Text strong style={{ color: 'green' }} >0157</Text> */}
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Giai4;