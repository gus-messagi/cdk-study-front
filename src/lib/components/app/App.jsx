import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import Chat from '../pages/Chat';

function App() {
    return (
        <>
            <Switch>
                <Route exact path='/chat' component={Chat} />
                <Route exact path='/' render={() => <Redirect to='/chat'/>} />
            </Switch>
        </>
    );
}

export default App;
