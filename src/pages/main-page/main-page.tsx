import 'antd/dist/antd.css';
import './main-page.css';

import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyFilled,
    CalendarOutlined,
    HeartFilled,
    IdcardOutlined,
} from '@ant-design/icons';

import { AppFooter, AppHeaderTitle, AppMainContent } from '../../layout/index';

const { Header, Sider, Content, Footer } = Layout;

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <Layout className='background-img'>
                <Sider trigger={null} collapsible collapsed={collapsed} className='sider-style'>
                    <div className='logo'>
                        <div className='logo-wrapper'>
                            <img src='/images/logo.png' alt='logo' />
                        </div>
                    </div>

                    <Menu
                        mode='inline'
                        items={[
                            {
                                key: '1',
                                icon: <CalendarOutlined />,
                                label: 'Календарь',
                                style: {
                                    paddingRight: '16px',
                                    marginBottom: '16px',
                                },
                            },
                            {
                                key: '2',
                                icon: <HeartFilled />,
                                label: 'Тренировки',
                                style: {
                                    paddingRight: '16px',
                                    marginBottom: '16px',
                                },
                            },
                            {
                                key: '3',
                                icon: <TrophyFilled />,
                                label: 'Достижения',
                                style: {
                                    paddingRight: '16px',
                                    marginBottom: '16px',
                                },
                            },
                            {
                                key: '4',
                                icon: <IdcardOutlined />,
                                label: 'Профиль',
                                style: {
                                    paddingRight: '16px',
                                    marginBottom: '16px',
                                },
                            },
                            {
                                key: '5',
                                icon: <img src='/exit.svg' />,
                                label: 'Выход',
                                style: {
                                    paddingRight: '16px',
                                },
                            },
                        ]}
                    />
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger-phone',
                        'data-test-id': 'sider-switch-mobile',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Sider>

                <Layout className='site-layout' style={{ position: 'relative' }}>
                    <Header className='site-layout-background header'>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger-big',
                            'data-test-id': 'sider-switch',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                        <AppHeaderTitle />
                    </Header>
                    <Content className='site-layout-background content-style'>
                        <AppMainContent />
                    </Content>
                    <Footer style={{ background: 'inherit', marginBottom: '42px' }}>
                        <AppFooter />
                    </Footer>
                </Layout>
            </Layout>
        </>
    );
};
