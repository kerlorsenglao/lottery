import React from 'react';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import './testing.css';

const { Header, Content, Footer } = Layout;

function MainLayout(){
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    {new Array(10).fill(null).map((_, index) => {
                        const key = index + 1;
                        return <Menu.Item key={key}>{`Pages Of ${key}`}</Menu.Item>;
                    })}
                </Menu>
            </Header>
            <Content style={{ padding: '0 70px' }}>
                <Breadcrumb style={{ margin: '20px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    Content
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    );
}

export default MainLayout;