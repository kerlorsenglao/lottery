import React, { Component } from "react";
import { Row, Col, Typography,} from 'antd';

const { Title, Text } = Typography;

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,password: null,
        }
    }
    componentDidMount(){
        var info = JSON.parse(localStorage.getItem('myInfo'));
        this.setState({
            name: info.name,
            password: info.password
        })
    }
    render() {
        const { name,password } = this.state;
        return (
            <div style={{ marginTop: '40px', minHeight: '350px' }}>
                <Row>
                    <Col xs={{ span: 24, offset: 0 }}
                        sm={{ span: 16, offset: 4 }}
                        md={{ span: 12, offset: 5 }}
                        lg={{ span: 8, offset: 8 }}
                        style={{
                            backgroundColor: 'lightblue', minHeight: '270px',
                            borderRadius: '10px'

                        }}
                    >
                        <div style={{
                            width: '100%', backgroundColor: 'wheat', borderBottom: '1px solid green',
                            borderTopLeftRadius: '10px', borderTopRightRadius: '10px',
                            textAlign: 'center'
                        }}
                        >
                            <Title level={3} style={{ paddingTop: '10px', color: 'blue' }}>Profile</Title>
                        </div>
                        <div style={{ marginTop: '10px', padding: '10px', paddingRight: '50px', height: '100%', }}>
                            <Text>Name</Text>
                            <div style={{backgroundColor:'white',width:'100%',padding:'10px'}}>
                                <Text strong>{name}</Text>
                            </div>
                            <Text>Password</Text>
                            <div style={{backgroundColor:'white',width:'100%',padding:'10px'}}>
                                <Text strong>{password}</Text>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Profile;