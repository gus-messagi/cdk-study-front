import React from 'react';
import { Layout} from 'antd';
import Friend from '../../molecules/Friend';
import './SideMenu.sass';

const { Sider } = Layout;

function SideMenu() {
    return(
        <>
            <Sider
                trigger={null}
                className="side-menu"
            >
                <Friend />
            </Sider>
        </>
    );
}

export default SideMenu;