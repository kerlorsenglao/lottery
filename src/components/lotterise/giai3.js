import React, { Component } from "react";
import { Row, Col, Typography, Image } from 'antd';
import Loading from '../../assets/images/loading.gif';

const { Text } = Typography;

class Giai3 extends Component {
    constructor(props) {
        super(props);
       
    }
    
    render() {
      
        const {result} = this.props;
        return (
            <div style={{ borderBottom: "1px solid #f0f0f0", }}>
                <Row>
                    <Col span={4}>
                        <div style={{ height: '50px', textAlign: 'center', paddingTop: '35px' }}>
                            <Text strong >Giải 3</Text>
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
                                    {/* <Text strong style={{ color: 'green' }} >55661</Text> */}
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
                                    {/* <Text strong style={{ color: 'green' }} >55661</Text> */}
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
                                    {/* <Text strong style={{ color: 'green' }} >55661</Text> */}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={8}>
                                <div style={{
                                    height: '50px', textAlign: 'center', paddingTop: '15px',
                                    borderLeft: "1px solid #f0f0f0", borderTop: "1px solid #f0f0f0",
                                }}>
                                    {
                                        !result[3]
                                            ? <Image src={Loading} style={{ width: "20px" }} />
                                            : <Text strong style={{ color: 'green' }} >{result[3]}</Text>
                                    }
                                    {/* <Text strong style={{ color: 'green' }} >55661</Text> */}
                                </div>
                            </Col>
                            <Col span={8}>
                                <div style={{
                                    height: '50px', textAlign: 'center', paddingTop: '15px',
                                    borderLeft: "1px solid #f0f0f0", borderTop: "1px solid #f0f0f0"
                                }}>
                                    {
                                        !result[4]
                                            ? <Image src={Loading} style={{ width: "20px" }} />
                                            : <Text strong style={{ color: 'green' }} >{result[4]}</Text>
                                    }
                                    {/* <Text strong style={{ color: 'green' }} >55661</Text> */}
                                </div>
                            </Col>
                            <Col span={8}>
                                <div style={{
                                    height: '50px', textAlign: 'center', paddingTop: '15px',
                                    borderLeft: "1px solid #f0f0f0", borderTop: "1px solid #f0f0f0"
                                }}>
                                    {
                                        !result[5]
                                            ? <Image src={Loading} style={{ width: "20px" }} />
                                            : <Text strong style={{ color: 'green' }} >{result[5]}</Text>
                                    }
                                    {/* <Text strong style={{ color: 'green' }} >55661</Text> */}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Giai3;