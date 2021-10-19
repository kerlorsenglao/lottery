import React, { Component } from "react";
import { Row, Col } from 'antd';
// import Calendars from '../../calendar/calendar';
import Menu1 from "../../calendar/menu1";
import Result from "./results";



// const { Header, Content, Footer } = Layout;
// const { Text, Title } = Typography;

class LotteryShow extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const { } = this.state;

        return (
            <div className="site-layout-background"
                style={{ minHeight: 380, }}
            >
                <div style={{ paddingTop: "10px" }}>
                    <Row>
                        <Col xs={{ span: 24, offset: 0 ,maxHeight:0 }}
                            md={{ span: 8, offset: 0 }}
                            lg={{ span: 5, offset: 3 }} //Calendar
                            // lg={{ span: 5, offset: 3 }} //Menu1
                            style={{
                                backgroundColor: "white", maxHeight: '190px',
                                marginTop: '4px', marginBottom: '15px',
                            }}>
                            {/* <Calendars/> */}
                            <Menu1 />
                        </Col>
                        <Col xs={{ span: 24, offset: 0 }}
                            md={{ span: 15, offset: 1 }}
                            lg={{ span: 11, offset: 1 }}
                            style={{
                                backgroundColor: 'white', minHeight: '600px',
                                marginTop: '4px'
                            }}>
                            <Result/>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default LotteryShow;