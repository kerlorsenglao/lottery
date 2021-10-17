
import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../../../../../API/api_url";
import { getDateFormat } from "../../../../../helpers/Helper";
import { Input, Row, Col, Typography, Button, Form, Image, } from 'antd';
import Loading from '../../../../../assets/images/loading.gif';

const { Text } = Typography;
class InputGiai4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val1: null, val2: null, val3: null, val4: null,
            click_save: false,
        }
    }
    get_today_result = () => {
        var date = getDateFormat(new Date());
        axios({
            method: 'GET',
            url: `${API_URL}/lottery/giai4/${date}`,
        })
            .then((res) => {
                if (res.data.data) {
                    var val1 = null; var val2 = null; var val3 = null; var val4 = null;
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
                    this.setState({
                        val1: val1, val2: val2, val3: val3, val4: val4,
                    })
                }
            })
            .catch((err) => {
                alert(err)
            });
    }
    onFinish = (value) => {
        var val1 = value.val1; var val2 = value.val2; var val3 = value.val3;
        var val4 = value.val4;
        if (val1 || val2 || val3 || val4) {
            this.setState({
                click_save: true,
            })
            if (val1) {
                var data = {
                    date: getDateFormat(new Date()),
                    result: val1,
                    type: 4
                }
                axios({
                    method: 'POST',
                    url: `${API_URL}/giai4`,
                    //   headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                    data
                })
                    .then((res) => {

                        this.setState({
                            val1: res.data.val,
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
                        type: 4
                    }
                    axios({
                        method: 'POST',
                        url: `${API_URL}/giai4`,
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
                            type: 4
                        }
                        axios({
                            method: 'POST',
                            url: `${API_URL}/giai4`,
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
                        var data = {
                            date: getDateFormat(new Date()),
                            result: val4,
                            type: 4
                        }
                        axios({
                            method: 'POST',
                            url: `${API_URL}/giai4`,
                            //   headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                            data
                        })
                            .then((res) => {

                                this.setState({
                                    val4: res.data.val,
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
    onUpdate = () => {
        this.setState({
            click_save: false,
            val1: this.state.val2,
            val2: this.state.val3,
            val3: this.state.val4,
            val4: null
        })
    }
    componentDidMount() {
        this.get_today_result()
    }
    render() {
        const { val1, val2, val3, val4, click_save } = this.state;
        const val = this.props.val;
        return (
            <div style={{ borderBottom: "1px solid #f0f0f0", }}>
                <Row>
                    <Col span={4}>
                        <div style={{
                            minHeight: '40px', textAlign: 'center',
                            paddingTop: '15px',
                        }}>
                            <Text strong >Giải 4</Text>
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
                            </div>
                            <div style={{ width: '100%', display: 'inline-flex', paddingLeft: '5px', marginTop: '2px', marginBottom: '2px' }}>
                                <div style={{ marginRight: '5px', minWidth: '30%', border: "1px solid #f0f0f0", height: '30px' }}>
                                    <Text style={{ textAlign: 'center' }}>{val[2]}</Text>
                                </div>

                                <div style={{ marginRight: '5px', minWidth: '30%', border: "1px solid #f0f0f0", height: '30px' }}>
                                    <Text style={{ textAlign: 'center' }}>{val[3]}</Text>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default InputGiai4;