import React, { Component } from "react";
import { Row, Col, Typography, Image } from 'antd';
import Loading from '../../assets/images/loading.gif';

const { Text } = Typography;

class Giai6 extends Component {
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
                            <Text strong >Giải 6</Text>
                        </div>
                    </Col>
                    <Col span={20}>
                        <Row>
                            <Col span={8}>
                                <div style={{
                                    height: '50px', textAlign: 'center', paddingTop: '15px',
                                    borderLeft: "1px solid #f0f0f0",
                                }}>
                                    {
                                        !result[0]
                                            ? <Image src={Loading} style={{ width: "20px" }} />
                                            : <Text strong style={{ color: 'green' }} >{result[0]}</Text>
                                    }
                                    {/* <Text strong style={{ color: 'green' }} >550</Text> */}
                                </div>
                            </Col>
                            <Col span={8}>
                                <div style={{
                                    height: '50px', textAlign: 'center', paddingTop: '15px',
                                    borderLeft: "1px solid #f0f0f0"
                                }}>
                                    {
                                        !result[1]
                                            ? <Image src={Loading} style={{ width: "20px" }} />
                                            : <Text strong style={{ color: 'green' }} >{result[1]}</Text>
                                    }
                                    {/* <Text strong style={{ color: 'green' }} >561</Text> */}
                                </div>
                            </Col>
                            <Col span={8}>
                                <div style={{
                                    height: '50px', textAlign: 'center', paddingTop: '15px',
                                    borderLeft: "1px solid #f0f0f0"
                                }}>
                                    {
                                        !result[2]
                                            ? <Image src={Loading} style={{ width: "20px" }} />
                                            : <Text strong style={{ color: 'green' }} >{result[2]}</Text>
                                    }
                                    {/* <Text strong style={{ color: 'green' }} >661</Text> */}
                                </div>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </div>
        )
    }
}

export default Giai6;