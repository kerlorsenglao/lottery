
import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../../../../../API/api_url";
import { getDateFormat } from "../../../../../helpers/Helper";
import { Input, Row, Col, Typography, Button, Form,Image } from 'antd';
import Loading from '../../../../../assets/images/loading.gif';

const { Text } = Typography;
class InputDacbiet extends Component {
    formRef = React.createRef();
    onReset = () => {
        this.formRef.current.resetFields();
    };
    constructor(props) {
        super(props);
        this.state = {
            val: null,
            click_save: false,
        }
    }
    get_today_result = () => {
        var date = getDateFormat(new Date());
        axios({
            method: 'GET',
            url: `${API_URL}/lottery/dacbiet/${date}`,
        })
            .then((res) => {
                if (res.data.data[0]) {
                    var val = res.data.data[0].result;
                    this.setState({
                        val: val
                    })
                }
            })
            .catch((err) => {
                alert(err)
            });
    }
    onFinish = (value) => {
        var result = value.val;
        if (result) {
            this.setState({
                click_save: true,
            })
            var data = {
                date: getDateFormat(new Date()),
                result: result,
                type: 0
            }
            setTimeout(() => {
                axios({
                    method: 'POST',
                    url: `${API_URL}/lottery/dacbiet`,
                    //   headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                    data
                })
                    .then((res) => {
                        // message.success(res.data.msg);
                        this.setState({
                            val: result,
                            click_save: false
                        })
                    })
                    .catch((err) => {
                        console.log('=====ERROR=====', err);

                    });
            }, 100)
        }
    }
    onUpdate = () => {
        this.setState({
            val: null,
            click_save: false
        })
    }
    componentDidMount() {
        this.get_today_result();
    }

    render() {
        const { val, click_save } = this.state;
        return (
            <div style={{ borderBottom: "1px solid #f0f0f0", }}>

                <Row>
                    <Col span={4}>
                        <div style={{
                            minHeight: '40px', textAlign: 'center',
                            paddingTop: '15px',
                        }}>
                            <Text strong >Đặc Biệt</Text>
                        </div>
                    </Col>
                    <Col span={20}>
                        <div style={{
                            minHeight: '50px', textAlign: 'center', paddingTop: '12px', marginLeft: "5px",
                            borderLeft: "1px solid #f0f0f0"
                        }}>
                            <Form style={{ marginLeft: '20px' }}
                                layout='inline'
                                onFinish={this.onFinish}
                            >
                                <div style={{ width: '100%', display: 'inline-flex' }}>
                                    {
                                        val
                                            ?
                                            <div style={{ width: '100%', textAlign: 'center' }}>
                                                <Text strong style={{ color: 'red' }}>{val}</Text>
                                            </div>
                                            :
                                            <Form.Item style={{ width: '30%' }}
                                                name="val"
                                            >
                                                <Input maxLength={5} style={{ textAlign: 'center' }} />
                                            </Form.Item>
                                    }
                                    <div style={{ width: '100%', paddingRight: '5px' }}>
                                        {
                                            val
                                                ?
                                                <Button type='primary' onClick={this.onUpdate} style={{ float: 'right',backgroundColor:'green' }}>
                                                    update
                                                </Button>
                                                : null
                                        }
                                        {
                                            click_save
                                                ?
                                                <Image src={Loading} style={{ width: "20px" }} />
                                                :
                                                <Button type='primary' htmlType="submit" style={{ float: 'right',marginRight:'2px' }}>
                                                    save
                                                </Button>
                                        }
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default InputDacbiet;