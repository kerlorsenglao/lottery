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
                    <Button style={{width:'120px',margin:'2px'}}>Ha Noi</Button>
                    <Button style={{width:'120px',margin:'2px'}}>Hai Phong</Button>
                    <Button style={{width:'120px',margin:'2px'}}>Bac Ninh</Button>
                    <Button style={{width:'120px',margin:'2px'}}>Nam Dinh</Button>
                    <Button style={{width:'120px',margin:'2px'}}>Quang Ninh</Button>
                    <Button style={{width:'120px',margin:'2px'}}>Thai Binh</Button>
                </div>
            </div>
        )
    }
}

export default Menu1;