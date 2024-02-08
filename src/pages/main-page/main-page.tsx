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

const { Header, Sider, Content } = Layout;

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    style={{ backgroundColor: 'grey' }}
                >
                    <div className='logo'>
                        <img src='/images/logo.png' alt='logo' />
                    </div>
                    <Menu
                        mode='inline'
                        items={[
                            {
                                key: '1',
                                icon: <CalendarOutlined />,
                                label: 'Календарь',
                            },
                            {
                                key: '2',
                                icon: <HeartFilled />,
                                label: 'Тренировки',
                            },
                            {
                                key: '3',
                                icon: <TrophyFilled />,
                                label: 'Достижения',
                            },
                            {
                                key: '4',
                                icon: <IdcardOutlined />,
                                label: 'Профиль',
                            },
                            {
                                key: '5',
                                icon: <img src='/exit.svg' />,
                                label: 'Выход',
                            },
                        ]}
                    />
                </Sider>
                <Layout className='site-layout'>
                    <Header className='site-layout-background' style={{ padding: 0 }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                    </Header>
                    <Content
                        className='site-layout-background'
                        style={{
                            minHeight: 'calc(100vh - 64px)',
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};
