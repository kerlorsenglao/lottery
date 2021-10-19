import React, { Component } from "react";
import { Row, Col, Typography, message, Button, Image } from 'antd';
import axios from "axios";
import { API_URL } from "../../../../API/api_url";
import Loading from '../../../../assets/images/loading.gif'
import InputDacbiet from "./input/input_dacbiet";
import InputGiai1 from "./input/input_giai1";
import InputGiai2 from "./input/input_giai2";
import InputGiai3 from "./input/input_giai3";
import InputGiai4 from "./input/input_giai4";
import InputGiai5 from "./input/input_giai5";
import InputGiai6 from "./input/input_giai6";
import InputGiai7 from "./input/input_giai7";

import Time from "../../calendar/time";
// import Vietnam from "./results";
// import Calendars from "../../calendar/calendar";
import dateFormat from "dateformat";
import { getDateFormat } from "../../../../helpers/Helper";
// import Dacbiet from "../../../lotterise/dacbiet";



const { Title, Text } = Typography;
class LotteryCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            giai0: "",
            giai1: "",
            giai2: ["", ""],
            giai3: ["", "", "", "", "", ""],
            giai4: ["", "", "", ""],
            giai5: ["", "", "", "", "", ""],
            giai6: ["", "", ""],
            giai7: ["", "", "", ""],
            loading_create: false,
            show_create: true,
            delete_loading: false,
        }
    }

    onFinish = (values) => {
        const name = this.state.name;
        const pass = this.state.password;
        const username = values.username;
        const password = values.password;
        const cf_password = values.cf_password;

        if (name == username) {
            message.warning('This user already existed');
        } else {
            if (password == cf_password) {
                message.success('Add new user successfully');
            } else {
                message.error('Your comferm password not correct');
            }
        }
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    onCreate = () => {
        this.setState({
            loading_create: true,
        })
        var data = [];
        data = [
            { date: getDateFormat(new Date()), result: this.ranDom(10000, 99999), type: 2 },
            { date: getDateFormat(new Date()), result: this.ranDom(10000, 99999), type: 2 },

            { date: getDateFormat(new Date()), result: this.ranDom(10000, 99999), type: 3 },
            { date: getDateFormat(new Date()), result: this.ranDom(10000, 99999), type: 3 },
            { date: getDateFormat(new Date()), result: this.ranDom(10000, 99999), type: 3 },
            { date: getDateFormat(new Date()), result: this.ranDom(10000, 99999), type: 3 },
            { date: getDateFormat(new Date()), result: this.ranDom(10000, 99999), type: 3 },
            { date: getDateFormat(new Date()), result: this.ranDom(10000, 99999), type: 3 },

            { date: getDateFormat(new Date()), result: this.ranDom(1000, 9999), type: 4 },
            { date: getDateFormat(new Date()), result: this.ranDom(1000, 9999), type: 4 },
            { date: getDateFormat(new Date()), result: this.ranDom(1000, 9999), type: 4 },
            { date: getDateFormat(new Date()), result: this.ranDom(1000, 9999), type: 4 },

            { date: getDateFormat(new Date()), result: this.ranDom(1000, 9999), type: 5 },
            { date: getDateFormat(new Date()), result: this.ranDom(1000, 9999), type: 5 },
            { date: getDateFormat(new Date()), result: this.ranDom(1000, 9999), type: 5 },
            { date: getDateFormat(new Date()), result: this.ranDom(1000, 9999), type: 5 },
            { date: getDateFormat(new Date()), result: this.ranDom(1000, 9999), type: 5 },
            { date: getDateFormat(new Date()), result: this.ranDom(1000, 9999), type: 5 },

            { date: getDateFormat(new Date()), result: this.ranDom(100, 999), type: 6 },
            { date: getDateFormat(new Date()), result: this.ranDom(100, 999), type: 6 },
            { date: getDateFormat(new Date()), result: this.ranDom(100, 999), type: 6 },

            { date: getDateFormat(new Date()), result: this.ranDom(10, 99), type: 7 },
            { date: getDateFormat(new Date()), result: this.ranDom(10, 99), type: 7 },
            { date: getDateFormat(new Date()), result: this.ranDom(10, 99), type: 7 },
            { date: getDateFormat(new Date()), result: this.ranDom(10, 99), type: 7 },
        ]
        data = { date: getDateFormat(new Date()), data: data }
        // data = JSON.stringify(data);
        // alert('data='+JSON.stringify(data.data));
        setTimeout(() => {
            axios({
                method: 'POST',
                url: `${API_URL}/lottery`,
                //   headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                data
            })
                .then((res) => {
                    var data = res.data.data;
                    if (data.length > 0) {
                        this.setState({
                            loading_create: false,
                            giai2: [data[0].result, data[1].result],
                            giai3: [data[2].result, data[3].result, data[4].result,
                            data[5].result, data[6].result, data[7].result],
                            giai4: [data[8].result, data[9].result, data[10].result, data[11].result],
                            giai5: [data[12].result, data[13].result, data[14].result,
                            data[15].result, data[16].result, data[17].result],
                            giai6: [data[18].result, data[19].result, data[20].result],
                            giai7: [data[21].result, data[22].result, data[23].result, data[24].result],
                            loading_create: false,
                            show_create: false,
                        })
                    }
                })
                .catch((err) => {
                    console.log('=====ERROR=====', err);
                });

        }, 100);
    }
    ranDom = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }
    getLotteryByDate = () => {
        var date = getDateFormat(new Date());
        // date = "18-10-2021";
        axios({
            method: 'GET',
            url: `${API_URL}/lottery/${date}`,
        })
            .then((res) => {
                var data = res.data.data;
                if (data.length > 0) {
                    var dacbiet = data.filter((val) => val.type === "0");
                    var giai1 = data.filter((val) => val.type === "1");
                    var giai2 = data.filter((val) => val.type === "2");
                    var giai3 = data.filter((val) => val.type === "3");
                    var giai4 = data.filter((val) => val.type === "4");
                    var giai5 = data.filter((val) => val.type === "5");
                    var giai6 = data.filter((val) => val.type === "6");
                    var giai7 = data.filter((val) => val.type === "7");
                    // alert('dacbiet:' + dacbiet[0].result + 'giai1:' + giai1[0].result);
                    this.setState({
                        show_create: false,
                        giai0: dacbiet[0].length > 0 ? dacbiet[0].result : "",
                        giai1: giai1[0].length > 0 ? giai1[0].result : "",
                        giai2: [
                            giai2[0] ?giai2[0].result : "", 
                            giai2[1] ?giai2[1].result : ""
                        ],
                        giai3: [
                            giai3[0] ?giai3[0].result:"",
                            giai3[1] ?giai3[1].result:"",
                            giai3[2] ?giai3[2].result:"",
                            giai3[3] ?giai3[3].result:"",
                            giai3[4] ?giai3[4].result:"",
                            giai3[5] ?giai3[5].result:"",
                        ],
                        giai4: [
                            giai4[0] ?giai4[0].result:"", 
                            giai4[1] ?giai4[1].result:"",
                            giai4[2] ?giai4[2].result:"",
                            giai4[3] ?giai4[3].result:"",
                        ],
                        giai5: [
                            giai5[0] ?giai5[0].result:"",
                            giai5[1] ?giai5[1].result:"", 
                            giai5[2] ?giai5[2].result:"", 
                            giai5[3] ?giai5[3].result:"", 
                            giai5[4] ?giai5[4].result:"", 
                            giai5[5] ?giai5[5].result:"",  
                        ],
                        giai6: [
                            giai6[0] ?giai6[0].result:"",
                            giai6[1] ?giai6[1].result:"",
                            giai6[2] ?giai6[2].result:"",
                        ],
                        giai7: [
                            giai7[0] ?giai7[0].result:"",
                            giai7[1] ?giai7[1].result:"",
                            giai7[2] ?giai7[2].result:"",
                            giai7[3] ?giai7[3].result:"", 
                        ],
                    })
                }
            })
            .catch((err) => {
                alert(err)
            });
    }
    onDelete = () => {
        this.setState({
            delete_loading: true,
        })
        var date = getDateFormat(new Date());
        axios({
            method: 'DELETE',
            url: `${API_URL}/lottery/${date}`,
        })
            .then((res) => {
                this.setState({
                    delete_loading: false,
                    giai2: ["", ""],
                    giai3: ["", "", "", "", "", ""],
                    giai4: ["", "", "", ""],
                    giai5: ["", "", "", "", "", ""],
                    giai6: ["", "", ""],
                    giai7: ["", "", "", ""],
                })
            })
            .catch((err) => {
                alert(err)
            });
    }
    get_today_result_dacbiet = () => {
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
    componentDidMount() {
        this.getLotteryByDate()
    }
    render() {
        const {
            giai2,
            giai3,
            giai4,
            giai5,
            giai6,
            giai7,
            loading_create,
            show_create,
            delete_loading
        } = this.state;
        return (
            <div className="site-layout-background"
                style={{ minHeight: 380, }}
            >
                <div style={{ paddingTop: "10px" }}>
                    <Row>
                        <Col xs={{ span: 24, offset: 0 }}
                            md={{ span: 8, offset: 0 }}
                            lg={{ span: 6, offset: 3 }} //Calendar
                            // lg={{ span: 5, offset: 3 }} //Menu1
                            style={{
                                backgroundColor: "white", maxHeight: '95px',
                                marginTop: '4px', marginBottom: '15px',
                            }}>
                            <div style={{
                                height: '45px', backgroundColor: 'lightblue',
                                textAlign: 'center', paddingTop: '10px'
                            }}>
                                <Text strong style={{ fontSize: 18 }}>
                                    {
                                        dateFormat(new Date().toLocaleDateString(), 'dd-mm-yyyy')
                                    }
                                </Text>
                            </div>
                            <div style={{ height: '1px', backgroundColor: 'wheat' }}></div>
                            <div style={{ textAlign: 'center' }}>
                                <Time color='red' size={30} />
                            </div>
                        </Col>
                        <Col xs={{ span: 24, offset: 0 }}
                            md={{ span: 15, offset: 1 }}
                            lg={{ span: 11, offset: 1 }}
                            style={{
                                backgroundColor: 'white', minHeight: '600px',
                                marginTop: '4px'
                            }}>
                            <div style={{
                                border: "1px solid #f0f0f0", textAlign: 'center',
                                backgroundColor: 'lightblue'
                            }}>
                                <Title level={4} strong style={{ color: 'red', paddingTop: '6px' }}>FORM INPUT</Title>
                            </div>
                            <div style={{ height: '1px', backgroundColor: 'wheat' }}></div>
                            <div style={{ marginLeft: '1px', marginRight: '1px' }}>
                                <InputDacbiet />
                                <InputGiai1 />
                                <div style={{ marginRight: '5px', paddingBottom: '4px', paddingTop: '4px', borderBottom: "1px solid #f0f0f0", textAlign: 'right' }}>
                                    {
                                        loading_create ?
                                            <Image src={Loading} style={{ width: "20px", marginRight: '25px' }} />
                                            :
                                            giai2[0] ?
                                                null
                                                : <Button type='primary' onClick={this.onCreate}>create all</Button>
                                    }
                                </div>
                                <InputGiai2 val={giai2} />
                                <InputGiai3 val={giai3} />
                                <InputGiai4 val={giai4} />
                                <InputGiai5 val={giai5} />
                                <InputGiai6 val={giai6} />
                                <InputGiai7 val={giai7} />
                                <div style={{ marginRight: '5px', paddingBottom: '4px', paddingTop: '4px', borderBottom: "1px solid #f0f0f0", textAlign: 'right' }}>
                                    {
                                        delete_loading
                                            ?
                                            <Image src={Loading} style={{ width: "20px", marginRight: '25px' }} />
                                            :
                                            <Button type='ghost' style={{ backgroundColor: 'red', color: 'white' }} onClick={this.onDelete}>
                                                Delete All
                                            </Button>
                                    }
                                </div>
                            </div>

                            {/* <Vietnam/> */}
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default LotteryCreate;