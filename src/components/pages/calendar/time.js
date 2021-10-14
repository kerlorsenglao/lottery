import React, { Component } from 'react';
import { Typography,} from 'antd';
import { } from 'antd';
import './styles.css';


const { Text } = Typography;
class Time extends Component {
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
        const {color,size} = this.props;
        return (
            <Text strong style={{ color: color,fontSize: size }}>{this.state.date.toLocaleTimeString()} {this.callTime()}</Text>
        )
    }
}

export default  Time;