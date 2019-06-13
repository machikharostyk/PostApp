import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import PostTemplate from './components/PostTemplate';
import Main from './components/Main';
import ShowAllPosts from './components/ShowAllPosts';

const Routes = () => {
    return (
    <React.Fragment>
        <Header />
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/posts/:id" component={PostTemplate}/>
            <Route exact path="/posts" component={ShowAllPosts}/>
        </Switch>
    </React.Fragment>
    )
}

export default Routes;