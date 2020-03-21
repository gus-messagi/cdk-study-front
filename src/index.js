import React from 'react';
import ReactDOM from 'react-dom';
import App from './lib/components/app/App';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import './global.sass';

const rootComponent = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

ReactDOM.render(rootComponent, document.getElementById('root'));