
import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../../../../../API/api_url";
import { getDateFormat } from "../../../../../helpers/Helper";
import { Input, Row, Col, Typography, Button, Form, Image } from 'antd';
import Loading from '../../../../../assets/images/loading.gif';

const { Text } = Typography;
class InputGiai1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: null,
            click_save: false,
        }
    }
    onFinish = (value) => {
        var val = value.val;
        if (val) {
            this.setState({
                click_save: true,
            })
            var data = {
                date: getDateFormat(new Date()),
                result: val,
                type: 1
            }
            axios({
                method: 'POST',
                url: `${API_URL}/lottery/giai1`,
                //   headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                data
            })
                .then((res) => {
                    this.setState({
                        val: val,
                        click_save: false
                    })
                })
                .catch((err) => {
                    console.log('=====ERROR=====', err);

                });
        }
    }
    get_today_result = () => {
        var date = getDateFormat(new Date());
        axios({
            method: 'GET',
            url: `${API_URL}/lottery/giai1/${date}`,
        })
            .then((res) => {
                if (res.data.data[0]) {
                    this.setState({
                        val: res.data.data[0].result
                    })
                }
            })
            .catch((err) => {
                alert(err)
            });
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
                            <Text strong >Giải 1</Text>
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
                                                <Text strong style={{ color: 'green' }}>{val}</Text>
                                            </div>
                                            :
                                            <Form.Item style={{ width: '30%' }}
                                                name="val"
                                            >
                                                <Input maxLength={5} style={{ textAlign: 'center', }} />
                                            </Form.Item>
                                    }
                                    <div style={{ width: '100%', paddingRight: '5px' }}>
                                        {
                                            val
                                                ?
                                                <Button type='primary' onClick={this.onUpdate}
                                                    style={{ float: 'right', backgroundColor: 'green' }}>
                                                    update
                                                </Button>
                                                : null
                                        }
                                        {

                                            click_save ?
                                                <Image src={Loading} style={{ width: "20px" }} />
                                                :
                                                val
                                                    ?
                                                    null
                                                    :
                                                    <Button type='primary' htmlType="submit" style={{ float: 'right', marginRight: "2px" ,width:'73px'}}>
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
export default InputGiai1;