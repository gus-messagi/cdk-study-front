import React from 'react';
import { Layout } from 'antd';
import SideMenu from '../../organisms/SideMenu';
import './Page.sass';

const { Content } = Layout;

function Page({ children }) {
    return (
        <Layout className="page">
            <SideMenu />
            <Content className="page__content">
                <div className="page__div">
                    {children}
                </div>
            </Content>
        </Layout>
    );
}

export default Page;