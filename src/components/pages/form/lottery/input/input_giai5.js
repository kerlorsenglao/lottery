
import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../../../../../API/api_url";
import { getDateFormat } from "../../../../../helpers/Helper";
import { Input, Row, Col, Typography, Button, Form, Image, } from 'antd';
import Loading from '../../../../../assets/images/loading.gif';

const { Text } = Typography;
class InputGiai5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val1: null, val2: null, val3: null, val4: null, val5: null, val6: null,
            click_save: false,
        }
    }

    get_today_result = () => {
        var date = getDateFormat(new Date());
        axios({
            method: 'GET',
            url: `${API_URL}/lottery/giai5/${date}`,
        })
            .then((res) => {
                if (res.data.data) {
                    var val1 = null; var val2 = null; var val3 = null; var val4 = null; var val5 = null; var val6 = null
                    if (res.data.data[0]) {
                        val1 = res.data.data[0].result;
                    }
                    if (res.data.data[1]) {
                        val2 = res.data.data[1].result;
                    }
                    if (res.data.data[2]) {
                        val3 = res.data.data[2].result;
                    }
                    if (res.data.data[3]) {
                        val4 = res.data.data[3].result;
                    }
                    if (res.data.data[4]) {
                        val5 = res.data.data[4].result;
                    }
                    if (res.data.data[5]) {
                        val6 = res.data.data[5].result;
                    }
                    this.setState({
                        val1: val1, val2: val2, val3: val3, val4: val4, val5: val5, val6: val6,
                    })
                }
            })
            .catch((err) => {
                alert(err)
            });
    }
    onFinish = (value) => {
        var val1 = value.val1; var val2 = value.val2; var val3 = value.val3;
        var val4 = value.val4; var val5 = value.val5; var val6 = value.val6;
        if (val1 || val2 || val3 || val4 || val5 || val6) {
            this.setState({
                click_save: true,
            })
            if (val1) {
                var data = {
                    date: getDateFormat(new Date()),
                    result: val1,
                    type: 5
                }
                axios({
                    method: 'POST',
                    url: `${API_URL}/giai5`,
                    //   headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                    data
                })
                    .then((res) => {

                        this.setState({
                            val1: val1,
                            click_save: false
                        })
                    })
                    .catch((err) => {
                        console.log('=====ERROR=====', err);
                    });
            } else {
                if (val2) {
                    var data = {
                        date: getDateFormat(new Date()),
                        result: val2,
                        type: 5
                    }
                    axios({
                        method: 'POST',
                        url: `${API_URL}/giai5`,
                        //   headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                        data
                    })
                        .then((res) => {

                            this.setState({
                                val2: val2,
                                click_save: false
                            })
                        })
                        .catch((err) => {
                            console.log('=====ERROR=====', err);
                        });
                } else {
                    if (val3) {
                        var data = {
                            date: getDateFormat(new Date()),
                            result: val3,
                            type: 5
                        }
                        axios({
                            method: 'POST',
                            url: `${API_URL}/giai5`,
                            //   headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                            data
                        })
                            .then((res) => {

                                this.setState({
                                    val3: val3,
                                    click_save: false
                                })
                            })
                            .catch((err) => {
                                console.log('=====ERROR=====', err);
                            });
                    } else {
                        if (val4) {
                            var data = {
                                date: getDateFormat(new Date()),
                                result: val4,
                                type: 5
                            }
                            axios({
                                method: 'POST',
                                url: `${API_URL}/giai5`,
                                //   headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                                data
                            })
                                .then((res) => {

                                    this.setState({
                                        val4: val4,
                                        click_save: false
                                    })
                                })
                                .catch((err) => {
                                    console.log('=====ERROR=====', err);
                                });
                        } else {
                            if (val5) {
                                var data = {
                                    date: getDateFormat(new Date()),
                                    result: val5,
                                    type: 5
                                }
                                axios({
                                    method: 'POST',
                                    url: `${API_URL}/giai5`,
                                    //   headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                                    data
                                })
                                    .then((res) => {

                                        this.setState({
                                            val5: val5,
                                            click_save: false
                                        })
                                    })
                                    .catch((err) => {
                                        console.log('=====ERROR=====', err);
                                    });
                            } else {
                                var data = {
                                    date: getDateFormat(new Date()),
                                    result: val6,
                                    type: 5
                                }
                                axios({
                                    method: 'POST',
                                    url: `${API_URL}/giai5`,
                                    //   headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                                    data
                                })
                                    .then((res) => {

                                        this.setState({
                                            val6: val6,
                                            click_save: false
                                        })
                                    })
                                    .catch((err) => {
                                        console.log('=====ERROR=====', err);
                                    });
                            }
                        }
                    }
                }
            }
        }
    }
    componentDidMount() {
        this.get_today_result()
    }
    onUpdate = () => {
        this.setState({
            val1: this.state.val2,
            val2: this.state.val3,
            val3: this.state.val4,
            val4: this.state.val5,
            val5: this.state.val6,
            val6: null, click_save: false
        })
    }
    render() {
        const { val1, val2, val3, val4, val5, val6, click_save } = this.state;
        const val = this.props.val;
        return (
            <div style={{ borderBottom: "1px solid #f0f0f0", }}>
                <Row>
                    <Col span={4}>
                        <div style={{
                            minHeight: '40px', textAlign: 'center',
                            paddingTop: '15px',
                        }}>
                            <Text strong >Giải 5</Text>
                        </div>
                    </Col>
                    <Col span={20}>
                        <div style={{
                            minHeight: '50px', textAlign: 'center', paddingTop: '5px', marginLeft: "5px",
                            borderLeft: "1px solid #f0f0f0"
                        }}>
                            <div style={{ width: '100%', display: 'inline-flex', paddingLeft: '5px' }}>
                                <div style={{ marginRight: '5px', minWidth: '30%', border: "1px solid #f0f0f0", height: '30px' }}>
                                    <Text style={{ textAlign: 'center' }}>{val[0]}</Text>
                                </div>
                                <div style={{ marginRight: '5px', minWidth: '30%', border: "1px solid #f0f0f0", height: '30px' }}>
                                    <Text style={{ textAlign: 'center' }}>{val[1]}</Text>
                                </div>

                                <div style={{ marginRight: '5px', minWidth: '30%', border: "1px solid #f0f0f0", height: '30px' }}>
                                    <Text style={{ textAlign: 'center' }}>{val[2]}</Text>
                                </div>
                            </div>
                            <div style={{ width: '100%', display: 'inline-flex', paddingLeft: '5px', marginTop: '2px', marginBottom: '2px' }}>
                                <div style={{ marginRight: '5px', minWidth: '30%', border: "1px solid #f0f0f0", height: '30px' }}>
                                    <Text style={{ textAlign: 'center' }}>{val[3]}</Text>
                                </div>
                                <div style={{ marginRight: '5px', minWidth: '30%', border: "1px solid #f0f0f0", height: '30px' }}>
                                    <Text style={{ textAlign: 'center' }}>{val[4]}</Text>
                                </div>

                                <div style={{ marginRight: '5px', minWidth: '30%', border: "1px solid #f0f0f0", height: '30px' }}>
                                    <Text style={{ textAlign: 'center' }}>{val[5]}</Text>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default InputGiai5;