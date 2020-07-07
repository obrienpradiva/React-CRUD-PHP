import React from 'react';
import  {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

import Insert from './Insert';
import Edit from './Edit';
import View from './View';

function Body(){
    return (
        <div>
            <Switch>
                <Route exact path='/insert' component={Insert} />
                <Route path='/edit/:id' component={Edit} />
                <Route path='/view' component={View} />
            </Switch>
        </div>
    );
}

export default Body