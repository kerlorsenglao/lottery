import React, { Component } from 'react';
import { Menu,Typography} from 'antd';
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
                <div style={{ paddingTop: '5px', paddingLeft: '20px', paddingRight: '20px' }}>
                    <Menu onClick={this.handleClick} selectedKeys={[current]} mode='vertical' style={{ borderRight: 'none' }}>
                        <Menu.Item key="hanoi" icon={<RightOutlined />}>
                            <Text strong>Hà Nội</Text>
                        </Menu.Item>
                        <Menu.Item key="haiphong" icon={<RightOutlined />}>
                            <Text strong>Hải Phòng</Text>
                        </Menu.Item>
                        <Menu.Item key="bacninh" icon={<RightOutlined />}>
                            <Text strong>Bắc Ninh</Text>
                        </Menu.Item>
                        <Menu.Item key="namdinh" icon={<RightOutlined />}>
                            <Text strong>Nam Định</Text>
                        </Menu.Item>
                        <Menu.Item key="quangninh" icon={<RightOutlined />}>
                            <Text strong>Quảng Ninh</Text>
                        </Menu.Item>
                        <Menu.Item key="thaibinh" icon={<RightOutlined />}>
                            <Text strong>Thái Bình</Text>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        )
    }
}

export default Menu1;