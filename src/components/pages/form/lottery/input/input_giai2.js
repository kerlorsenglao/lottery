
import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../../../../../API/api_url";
import { getDateFormat } from "../../../../../helpers/Helper";
import { Input, Row, Col, Typography, Button, Form, Image } from 'antd';
import Loading from '../../../../../assets/images/loading.gif';

const { Text } = Typography;
class InputGiai2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input_giai2_1: null,
            input_giai2_2: null,
            click_save: false,
            val: null,
        }
    }
    get_today_result = () => {
        var date = getDateFormat(new Date());
        axios({
            method: 'GET',
            url: `${API_URL}/lottery/giai2/${date}`,
        })
            .then((res) => {
                if (res.data.data) {
                    var giai2_1 = null;
                    var giai2_2 = null;

                    if (res.data.data[0]) {
                        giai2_1 = res.data.data[0].result;
                    }
                    if (res.data.data[1]) {
                        giai2_2 = res.data.data[1].result;
                    }
                    this.setState({
                        input_giai2_1: giai2_1,//
                        input_giai2_2: giai2_2,//
                    })
                    // this.setState({
                    //     input_dacbiet: res.data.data.result,
                    // })
                }
            })
            .catch((err) => {
                alert(err)
            });
    }
    onFinish = (value) => {
        var result1 = value.giai2_1;
        var result2 = value.giai2_2;
        if (result1 || result2) {
            this.setState({
                click_save: true
            })
            if (result1 && result2) {
                // only save the first parameter//
                var data = {
                    date: getDateFormat(new Date()),
                    result: result1,
                    type: 2
                }
                // setTimeout(() => {
                axios({
                    method: 'POST',
                    url: `${API_URL}/lottery/giai2`,
                    //   headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                    data
                })
                    .then((res) => {
                        // message.success(res.data.msg);
                        this.setState({
                            color: 'red',
                            click_save: false,
                            input_giai2_1: result1,
                            // input_giai2_2:result2
                        })
                    })
                    .catch((err) => {
                        console.log('=====ERROR=====', err);

                    });
                // }, 100)
            } else {
                if (result1) {

                    var data = {
                        date: getDateFormat(new Date()),
                        result: result1,
                        type: 2
                    }
                    setTimeout(() => {
                        axios({
                            method: 'POST',
                            url: `${API_URL}/lottery/giai2`,
                            //   headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                            data
                        })
                            .then((res) => {
                                this.setState({
                                    color: 'red',
                                    click_save: false,
                                    input_giai2_1: result1,
                                    // input_giai2_2:result2
                                })
                            })
                            .catch((err) => {
                                console.log('=====ERROR=====', err);

                            });
                    }, 100)
                } else {

                    var data = {
                        date: getDateFormat(new Date()),
                        result: result2,
                        type: 2
                    }
                    setTimeout(() => {
                        axios({
                            method: 'POST',
                            url: `${API_URL}/giai2`,
                            //   headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                            data
                        })
                            .then((res) => {
                                this.setState({
                                    color: 'red',
                                    click_save: false,
                                    // input_giai2_1:result1,
                                    input_giai2_2: result2
                                })
                            })
                            .catch((err) => {
                                console.log('=====ERROR=====', err);

                            });
                    }, 100)
                }
            }
        }
    }
    onGenerate = () => {
        const val = this.props.val;
        this.setState({
            val: val,
        })
    }
    componentDidMount() {

    }
    onUpdate = () => {
        this.setState({
            input_giai2_1: this.state.input_giai2_2,
            input_giai2_2: null,
            click_save: false,
        })
    }
    componentWillUnmount() {
        this.onGenerate()
    }
    render() {
        const { input_giai2_1, input_giai2_2, click_save, } = this.state;
        const val = this.props.val;
        return (
            <div style={{ borderBottom: "1px solid #f0f0f0", }}>
                <Row>
                    <Col span={4}>
                        <div style={{
                            minHeight: '40px', textAlign: 'center',
                            paddingTop: '15px',
                        }}>
                            <Text strong >Giải 2</Text>
                        </div>
                    </Col>
                    <Col span={20}>
                        <div style={{
                            minHeight: '50px', textAlign: 'center', paddingTop: '5px', marginLeft: "5px",
                            borderLeft: "1px solid #f0f0f0", paddingLeft: "5px"
                        }}>
                            <div style={{ width: '100%', display: 'inline-flex', }}>
                                <div style={{ marginRight: '5px', minWidth: '30%', border: "1px solid #f0f0f0", height: '30px' }}>
                                    <Text style={{ textAlign: 'center' }}>{val[0]}</Text>
                                </div>
                                <div style={{ marginRight: '5px', minWidth: '30%', border: "1px solid #f0f0f0", height: '30px' }}>
                                    <Text style={{ textAlign: 'center' }}>{val[1]}</Text>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default InputGiai2;