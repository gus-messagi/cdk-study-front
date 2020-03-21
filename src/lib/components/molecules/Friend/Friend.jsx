import React from 'react';
import { Avatar, Col, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './Friend.scss';

function Friend() {
    return(
        <Row 
            className="friend-row"
            align="middle"
            justify="space-between"
        >
            <Col>
                <Avatar 
                    size={56} 
                    icon={<UserOutlined />} 
                />
            </Col>
            <Col>
                <b className="friend-username">Username</b>
                <br/>
                <b className="friend-last-message">Friend's last message here</b>
            </Col>
        </Row>
    );
}

export default Friend;