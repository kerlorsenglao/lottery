import React, { Component } from 'react';
import { Typography, Button } from 'antd';
import DateTime from '../../calendar/datetime';
import axios from 'axios';
import { API_URL } from '../../../../API/api_url';
import { getDateFormat } from '../../../../helpers/Helper';
import Dacbiet from '../../../lotterise/dacbiet';
import Giai1 from '../../../lotterise/giai1';
import Giai2 from '../../../lotterise/giai2';
import Giai3 from '../../../lotterise/giai3';
import Giai4 from '../../../lotterise/giai4';
import Giai5 from '../../../lotterise/giai5';
import Giai6 from '../../../lotterise/giai6';
import Giai7 from '../../../lotterise/giai7';


const { Text, Title } = Typography;

class Vietnam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date_select: '',
            list_date: '',
            history: [],
            default_active: '',
            color_select: 'wheat',
            all_lottery: [],
            dacbiet: [],giai1:[],giai2:[],giai3:[],giai4:[],giai5:[],giai6:[],giai7:[],
            dacbiet_result_active : null,
            giai1_result_active : null,
            giai2_result_active : [],
            giai3_result_active : [],
            giai4_result_active : [],
            giai5_result_active : [],
            giai6_result_active : [],
            giai7_result_active : [],
        }
    }
    clickSelect = (item) => {
        var dacbiet_result_active = null;
        var giai1_result_active = null;
        var giai2_result_active = [];
        var giai3_result_active = [];
        var giai4_result_active = [];
        var giai5_result_active = [];
        var giai6_result_active = [];
        var giai7_result_active = [];
        const {
            dacbiet,
            giai1,
            giai2,
            giai3,
            giai4,
            giai5,
            giai6,
            giai7,
        } = this.state;
        dacbiet.forEach(element => {
            if(element.date === item){
                dacbiet_result_active = element.result;
            }
        });
        giai1.forEach(element => {
            if(element.date === item){
                giai1_result_active = element.result;
            }
        });
        giai2.forEach(element => {
            if(element.date === item){
                giai2_result_active.push(element.result);
            }
        });
        giai3.forEach(element => {
            if(element.date === item){
                giai3_result_active.push(element.result);
            }
        });
        giai4.forEach(element => {
            if(element.date === item){
                giai4_result_active.push(element.result);
            }
        });
        giai5.forEach(element => {
            if(element.date === item){
                giai5_result_active.push(element.result);
            }
        });
        giai6.forEach(element => {
            if(element.date === item){
                giai6_result_active.push(element.result);
            }
        });
        giai7.forEach(element => {
            if(element.date === item){
                giai7_result_active.push(element.result);
            }
        });
        this.setState({
            default_active: item,
            dacbiet_result_active : dacbiet_result_active,
            giai1_result_active : giai1_result_active,
            giai2_result_active : giai2_result_active,
            giai3_result_active : giai3_result_active,
            giai4_result_active : giai4_result_active,
            giai5_result_active : giai5_result_active,
            giai6_result_active : giai6_result_active,
            giai7_result_active : giai7_result_active,
        })
    }
    resultButton = (item, key) => {
        var default_active = this.state.default_active;
        return (
            <Button key={key} style={{
                width: "125px", margin: '5px',
                backgroundColor: (item === default_active) ? 'wheat' : 'whitesmoke'
            }}
                onClick={() => this.clickSelect(item)}>
                <Text strong style={{ color: (item === default_active) ? 'red' : 'black' }}>{item}</Text>
            </Button>
        )
    }
    get_all_lottery=()=>{
        axios({
            method: 'GET',
            url: `${API_URL}/lottery`,
        })
            .then((res) => {
                var all = res.data.data;
                var history=[];
                var fiveBefore=[];
                var default_active = null;
                var dacbiet=[]; var dacbiet_result_active = null;
                var giai1=[]; var giai1_result_active = null;
                var giai2=[]; var giai2_result_active = [];
                var giai3=[]; var giai3_result_active = [];
                var giai4=[]; var giai4_result_active = [];
                var giai5=[]; var giai5_result_active = [];
                var giai6=[]; var giai6_result_active = [];
                var giai7=[]; var giai7_result_active = [];
                if(all.length > 0){
                    all.forEach(element => {
                        if(element.type === 0){
                            dacbiet.push(element);
                        }
                        if(element.type === 1){
                            giai1.push(element);
                        }
                        if(element.type === 2){
                            giai2.push(element);
                        }
                        if(element.type === 3){
                            giai3.push(element);
                        }
                        if(element.type === 4){
                            giai4.push(element);
                        }if(element.type === 5){
                            giai5.push(element);
                        }
                        if(element.type === 6){
                            giai6.push(element);
                        }
                        if(element.type === 7){
                            giai7.push(element);
                        }
                    });
                    // reverse all lottery
                    if(dacbiet.length > 5){
                        let start = dacbiet.length -5;
                        let end = dacbiet.length -1;
                        fiveBefore = dacbiet.splice(start,end).reverse();
                    }else{
                        fiveBefore = dacbiet.reverse();
                    }
                    fiveBefore.forEach(element => {
                        history.push(element.date);
                        if(element.date === getDateFormat(new Date())){
                            default_active = element.date;
                        }
                    });
                    if(!default_active){
                        history.unshift(getDateFormat(new Date())); // to index = 0;
                        default_active = getDateFormat(new Date());
                    }else{
                        dacbiet.forEach(element => {
                            if(element.date === default_active){
                                dacbiet_result_active = element.result;
                            }
                        });
                        giai1.forEach(element => {
                            if(element.date === default_active){
                                giai1_result_active = element.result;
                            }
                        });
                        giai2.forEach(element => {
                            if(element.date === default_active){
                                giai2_result_active.push(element.result);
                            }
                        });
                        giai3.forEach(element => {
                            if(element.date === default_active){
                                giai3_result_active.push(element.result);
                            }
                        });
                        giai4.forEach(element => {
                            if(element.date === default_active){
                                giai4_result_active.push(element.result);
                            }
                        });
                        giai5.forEach(element => {
                            if(element.date === default_active){
                                giai5_result_active.push(element.result);
                            }
                        });
                        giai6.forEach(element => {
                            if(element.date === default_active){
                                giai6_result_active.push(element.result);
                            }
                        });
                        giai7.forEach(element => {
                            if(element.date === default_active){
                                giai7_result_active.push(element.result);
                            }
                        });
                    }
                    ///// setState
                    this.setState({
                        default_active : default_active,
                        history : history,
                        dacbiet: dacbiet,
                        giai1: giai1,
                        giai2: giai2,
                        giai3: giai3,
                        giai4: giai4,
                        giai5: giai5,
                        giai6: giai6,
                        giai7: giai7,
                        dacbiet_result_active : dacbiet_result_active,
                        giai1_result_active : giai1_result_active,
                        giai2_result_active : giai2_result_active,
                        giai3_result_active : giai3_result_active,
                        giai4_result_active : giai4_result_active,
                        giai5_result_active : giai5_result_active,
                        giai6_result_active : giai6_result_active,
                        giai7_result_active : giai7_result_active,
                    })
                } 
            })
            .catch((err) => {
                alert(err)
            });
    }
    componentDidMount() {
        this.get_all_lottery();
    }
    render() {
        const { 
            history,
            dacbiet_result_active,
            giai1_result_active,
            giai2_result_active,
            giai3_result_active,
            giai4_result_active,
            giai5_result_active,
            giai6_result_active,
            giai7_result_active,
        } = this.state;
        return (
            
            <div>
                <div style={{
                    justifyItems: 'center', justifyContent: 'center', textAlign: 'center',
                    backgroundColor: 'lightblue',
                    height: '38px'
                }}>
                    <div>
                        {/* Calendar */}
                        {/* Menu1 */}
                        <DateTime />
                    </div>
                </div>
                {/* Button Date */}
                <div style={{
                    border: "1px solid #f0f0f0", margin: '10px',
                    justifyItems: 'center', minHeight: '88px', backgroundColor: 'lightblue'
                }}>
                    {
                        history.map((item, key) => this.resultButton(item, key))
                    }
                </div>
                {/* Title Ket Qua */}
                <div style={{
                    border: "1px solid #f0f0f0", marginTop: '10px', textAlign: 'center',
                    marginLeft: '10px', marginRight: '10px'
                }}>
                    <Title level={4} strong style={{ color: 'red', paddingTop: '6px' }}>KẾT QUẢ</Title>
                </div>
                {/* Result */}
                <div style={{
                    border: "1px solid #f0f0f0", marginLeft: '10px', marginRight: '10px',
                    marginBottom: '10px'
                }}>
                    {/* giai dacbiet */}
                    <Dacbiet  result = {dacbiet_result_active}/>
                    <Giai1  result = {giai1_result_active}/>
                    <Giai2  result = {giai2_result_active}/>
                    <Giai3  result = {giai3_result_active}/>
                    <Giai4  result = {giai4_result_active}/>
                    <Giai5  result = {giai5_result_active}/>
                    <Giai6  result = {giai6_result_active}/>
                    <Giai7  result = {giai7_result_active}/>
                </div>
            </div>
        )
    }
}

export default Vietnam;