import React, { Component } from "react";
import { Layout,Typography, Image, Row, Col } from 'antd';
import lottery from '../../assets/images/lottery.png';
import Routes from "../Router/router";

const { Header, Footer } = Layout;
const { Text, } = Typography;
class Main_Layout extends Component {
   
    render() {
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

                {/* ////Router Here */}
                {/* <Public_Show_Lottery/> */}
                <Routes/>
                {/* <Private_Lottery_Show/> */}

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

export default Main_Layout;
