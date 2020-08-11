import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import history from "../utilis/history";
import  Main from './main';
// import * as routes from '../constants/routes';
const Test=()=>(
<h2>I am a test</h2>
);
const Router=()=>(
   <BrowserRouter history={history}>
       <Switch>
         <Route exact path="/" component={Main}></Route>
         <Route exact path="/test" component={Test}></Route>
       </Switch>
   </BrowserRouter>
);
export default  Router;