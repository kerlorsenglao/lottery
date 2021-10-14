import React, { Component } from "react";
import { Layout,Typography, Image, Row, Col } from 'antd';
import lottery from '../../assets/images/lottery.png';
// import Routes from "../../routes";
import NavBar from "../pages/nav/NavBar";
// import Menu1 from "../pages/calendar/menu1";
// import { Route } from "react-router";


const { Header, Content, Footer } = Layout;
const { Text, Title } = Typography;
class MainLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '0',
            border_color: 'whitesmoke',
            date: new Date(),
            isAuth: null,
        };
    }
    callTime = () => {
        setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000);
    }
    render() {
        const { current, date } = this.state;
        return (
            <Layout>
                <Header style={{
                    position: 'initial', zIndex: 1, width: '100%', height: '80px',
                    backgroundColor: 'lightblue'
                }}>
                    <Image
                        style={{ width: "250px", marginTop: '5px' }}
                        src={lottery}
                    />
                </Header>
                <div style={{ height: "2px", backgroundColor: 'wheat' }}></div>
                <div style={{ height: '38px', backgroundColor: 'red',}}>
                
                    <Col xs={{ span: 24, offset: 0 }}
                        sm={{ span: 12, offset: 2 }}
                        md={{ span: 20, offset: 2 }}
                        lg={{ span: 17, offset: 3 }}
                    >
                        {/* //////NavBar////// */}
                        <NavBar/>
                        {/* //////NavBar////// */}
                        
                        {/* <Title level={4} style={{ color: 'white', padding: '0 20px' }}>VIỆTNAM</Title> */}
                    </Col>
                </div>
                <Content className="site-layout" style={{ padding: '0 20px', marginTop: 1, }}>
                    {/* /////Route///// */}
                    <Routes/>
                    {/* /////Route///// */}
                </Content>
                <div style={{height:'1px',backgroundColor:'white',marginTop: '20px'}}></div>
                <Footer style={{ textAlign: 'center' }}>
                    <Row>
                        <Col xs={{span:24, offset: 0 }}
                             md={{ span:12, offset: 2 }}
                             lg={{ span: 9, offset: 3 }} //Menu1
                        >
                            <Text>
                                Hệ Thống Đại Lý Vé Số Kiến Thiết https://vnsloto.com/
                            </Text><br/>
                            <Text>
                                Địa chỉ: 117-119 Ngô Tất Tố, Phường 22, Quận Bình Thạnh, TP. HCM.
                            </Text><br/>
                            <Text>
                                ĐỔI VÉ SỐ TRÚNG THƯỞNG
                            </Text><br/>
                        </Col>
                        <Col xs={{ span: 24, offset: 0 }}
                             md={{ span: 12, offset: 1 }}
                             lg={{ span: 8, offset: 1 }}
                        >
                            <Text>
                            Công Ty TNHH MTV ĐẠI LÝ XỔ SỐ https://vnsloto.com/vnsloto Lottery Agent Company Limited
                            </Text><br/>
                        </Col>
                    </Row>
                </Footer>
            </Layout>
        )
    }
}

export default MainLayout;
