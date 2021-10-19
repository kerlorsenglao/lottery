import React, { Component } from 'react';
import { Menu,Typography,Button} from 'antd';
import { RightOutlined } from '@ant-design/icons';

import './styles.css';

const { Text } = Typography;
class Menu1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'hanoi',
        }
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (
            <div>
                <div style={{ height: '38px', backgroundColor: 'lightblue', textAlign: 'center', paddingTop: '8px' }}>
                    <Text strong style={{}}>XỔ SỐ MIỀN BẮC</Text>
                </div>
                <div style={{ paddingTop: '5px', paddingLeft: '10px', paddingRight: '10px',
                    textAlign:'center',paddingBottom:'5px' }}>
                    <Button style={{width:'120px',margin:'2px'}}>Hà Nội</Button>
                    <Button style={{width:'120px',margin:'2px'}}>Hải Phòng</Button>
                    <Button style={{width:'120px',margin:'2px'}}>Bắc Ninh</Button>
                    <Button style={{width:'120px',margin:'2px'}}>Năm Định</Button>
                    <Button style={{width:'120px',margin:'2px'}}>Quảng Ninh</Button>
                    <Button style={{width:'120px',margin:'2px'}}>Thái Bình</Button>
                </div>
            </div>
        )
    }
}

export default Menu1;