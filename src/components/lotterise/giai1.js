import React, { Component } from "react";
import { Row, Col, Typography, Image } from 'antd';
import Loading from '../../assets/images/loading.gif';


const { Text } = Typography;
class Giai1 extends Component {
    constructor(props) {
        super(props);
     
    }

    render() {
        
        const {result} = this.props;
        
        return (
            <div style={{ borderBottom: "1px solid #f0f0f0", }}>
                <Row>
                    <Col span={4}>
                        <div style={{ height: '50px', textAlign: 'center', paddingTop: '15px' }}>
                            <Text strong >Giải 1</Text>
                        </div>
                    </Col>
                    <Col span={20}>
                        <div style={{
                            height: '50px', textAlign: 'center', paddingTop: '15px',
                            borderLeft: "1px solid #f0f0f0"
                        }}>
                            {
                                !result
                                    ? <Image src={Loading} style={{ width: "20px" }} />
                                    : <Text strong style={{ color: 'blue' }} >{result}</Text>
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Giai1;