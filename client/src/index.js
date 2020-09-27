import React from "react"
import ReactDOM from "react-dom"
import App from "./components/app"
import Create from "./components/create"
import Edit from "./components/edit"
import Show from "./components/show"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


ReactDOM.render(
             <Router>
                 <div>
                     <Switch>
                         <Route path='/' exact component={App} />
                         <Route path='/create'  component={Create} />
                         <Route path='/edit/:id' exact component={Edit} />
                         <Route path='/show/:id' exact component={Show} />
                     </Switch>
                 </div>
             </Router>,
    document.getElementById("root"));