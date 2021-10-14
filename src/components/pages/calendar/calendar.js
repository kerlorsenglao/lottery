import React, { Component } from 'react';
import { Calendar, Typography,} from 'antd';
import DateTime from './datetime';
import './styles.css';


const { Text } = Typography;
class Calendars extends Component {
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
            <div>
                <DateTime/>
                <div className="site-calendar-demo-card">
                    <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
                </div>
            </div>
        )
    }
}

export default Calendars;