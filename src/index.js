import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Contact from './components/contacts'
import References from './components/references'
import About from './components/About'
import Portfolio from './components/Portfolio'
import BaseLayout from './components/BaseLayout'


ReactDOM.render(
<BrowserRouter>
<BaseLayout>
  <Switch>
<Route path='/contact' component={Contact}/>
<Route path='/references' component={References}/>
    <Route path='/about' component={About}/>
    <Route path='/portfolio' component={Portfolio}/>
    <Route exact path="/" component={Home}/>
  </Switch>
</BaseLayout>
</BrowserRouter>
, document.getElementById('root')
)

registerServiceWorker();
