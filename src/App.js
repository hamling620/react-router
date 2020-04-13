import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch, Redirect } from './react-router-dom'
import Home from './view/Home'
import User from './view/User'
import About from './view/About'

class App extends Component {
    render () {
        return (
            <div>
                <Router>
                    <div>
                        <Link to="/home">首页</Link>
                        <Link to="/user">用户</Link>
                        <Link to="/about">关于</Link>
                    </div>
                    <div>
                        <Switch>
                            <Route path='/home' component={ Home }></Route>
                            <Route path='/user' component={ User }></Route>
                            <Route path='/about' exact={true} component={ About }></Route>
                            <Redirect to="/home"/>
                        </Switch>
                    </div> 
                </Router>
            </div>
        )
    }
}

export default App