import React, { Component } from "react";
import { Row, Col, Typography, Form, Input, Button, message } from 'antd';
import axios from 'axios';
import {API_URL} from '../../../../API/api_url';
import { Redirect } from 'react-router-dom';

const { Title } = Typography;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            login_status: false,
        }
    }

    onFinish = (values) => {
        const name = values.username;
        const password = values.password;
        const data ={name,password};
        // alert(data)
        axios({
            method: 'POST',
            url: `${API_URL}/user/login`,
            data
        })
            .then((res) => {
                if(res.data.Token){
                    localStorage.setItem('token', JSON.stringify(res.data.Token));
                    localStorage.setItem('myInfo', JSON.stringify(res.data.user));
                    localStorage.setItem('isAuth', true);
                    localStorage.setItem('menuActive','home');
                    setTimeout(()=>{
                        this.setState({
                            login_status: true
                        })
                    },1000)
                    message.success(res.data.msg);
                }else{
                    message.warning(res.data.msg);
                    this.setState({
                        name:this.state.name,
                        password: ''
                    })
                }
            })
            .catch((err) => {
                alert(err)
            });
        
    };
    onNameChange=(e)=>{
        this.setState({
            name : e.target.value,
        })
    }
    onPassChange=(e)=>{
        this.setState({
            password: e.target.value,
        })
    }
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    render() {
        const {login_status } = this.state;
        if(login_status){
            return <Redirect to='/admin'/>
        }
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
                            <Title level={3} style={{ paddingTop: '10px', color: 'blue' }}>Form Login</Title>
                        </div>
                        <div style={{ marginTop: '10px', padding: '10px', paddingRight: '50px', height: '100%', }}>
                            <Form
                                name="basic"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                // initialValues={{ remember: true }}
                                onFinish={this.onFinish}
                                onFinishFailed={this.onFinishFailed}
                                
                                autoComplete="off"
                            >
                                <Form.Item
                                    label="Admin Name"
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password/>
                                </Form.Item>

                                <Form.Item wrapperCol={{ offset: 8, span: 15 }}>
                                    <Button type="primary" htmlType="submit">
                                        LogIn
                                    </Button>
                                </Form.Item>
                            </Form>

                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Login;