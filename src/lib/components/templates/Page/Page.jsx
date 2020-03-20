import React from 'react';
import { Layout } from 'antd';

function Page({ children }) {
    return (
        <Layout>
            {children}
        </Layout>
    );
}

export default Page;