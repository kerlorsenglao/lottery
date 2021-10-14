import React, { Component } from 'react';
import { Typography, Row, Col } from 'antd';
import { } from 'antd';
import dateFormat from 'dateformat';
import './styles.css';


const { Text } = Typography;
class DateTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }
    onPanelChange = (value, mode) => {
        console.log(value, mode);
    }
    callTime = () => {
        setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000);
    }
    render() {
        const { date } = this.state;
        return (

            <div style={{ backgroundColor: 'lightblue', height: '38px', paddingTop: '8px' }}>
                {/* ------Calendar----- */}
                <Row>
                    <Col span={12} style={{ textAlign: 'center' }}>
                        <Text strong style={{ color: 'black', }}>
                            {dateFormat(this.state.date.toLocaleDateString(), 'dd-mm-yyyy')}
                        </Text>
                    </Col>
                    <Col span={12} style={{ textAlign: 'center' }}>
                        <Text strong style={{ color: 'black' }}>{this.state.date.toLocaleTimeString()}</Text>
                    </Col>
                </Row>
                {this.callTime()}

                {/* ------Menu1------- */}
                {/* <Text strong style={{ color: 'black', }}>
                    {dateFormat(this.state.date.toLocaleDateString(), 'dd-mm-yyyy')}
                </Text> */}
            </div>

        )
    }
}

export default DateTime;