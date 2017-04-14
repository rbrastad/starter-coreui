import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import routes from './routes';

// Containers
import Full from './containers/Full/Full'
import Simple from './containers/Simple/Simple'

import Charts from './views/Charts/Charts'
import Dashboard from './views/Dashboard/Dashboard'
import Buttons from './views/Components/Buttons/Buttons'
import Cards from './views/Components/Cards/Cards'
import Forms from './views/Components/Forms/Forms'
import Modals from './views/Components/Modals/Modals'
import SocialButtons from './views/Components/SocialButtons/SocialButtons'
import Switches from './views/Components/Switches/Switches'
import Tables from './views/Components/Tables/Tables'
import Tabs from './views/Components/Tabs/Tabs'
import FontAwesome from './views/Icons/FontAwesome/FontAwesome'
import SimpleLineIcons from './views/Icons/SimpleLineIcons/SimpleLineIcons'
import Login from './views/Pages/Login/Login'
import Register from './views/Pages/Register/Register'
import Page404 from './views/Pages/Page404/Page404'
import Page500 from './views/Pages/Page500/Page500'
import Widgets from './views/Widgets/Widgets'

export default (
    <Router history={hashHistory}>
        <Route path="/" name="Home" component={Full}>
            <IndexRoute component={Dashboard}/>
            <Route path="dashboard" name="Dashboard" component={Dashboard}/>
            <Route path="components/" name="Components">
                <IndexRoute component={Buttons}/>
                <Route path="buttons" name="Buttons" component={Buttons}/>
                <Route path="cards" name="Cards" component={Cards}/>
                <Route path="forms" name="Forms" component={Forms}/>
                <Route path="modals" name="Modals" component={Modals}/>
                <Route path="social-buttons" name="Social Buttons" component={SocialButtons}/>
                <Route path="switches" name="Swithces" component={Switches}/>
                <Route path="tables" name="Tables" component={Tables}/>
                <Route path="tabs" name="Tabs" component={Tabs}/>
            </Route>
            <Route path="icons/" name="Icons">
                <IndexRoute component={FontAwesome}/>
                <Route path="font-awesome" name="Font Awesome" component={FontAwesome}/>
                <Route path="simple-line-icons" name="Simple Line Icons" component={SimpleLineIcons}/>
            </Route>
            <Route path="widgets" name="Widgets" component={Widgets}/>
            <Route path="charts" name="Charts" component={Charts}/>
        </Route>
        <Route path="pages/" name="Pages" component={Simple}>
            <IndexRoute component={Page404}/>
            <Route path="login" name="Login Page" component={Login}/>
            <Route path="register" name="Register Page" component={Register}/>
            <Route path="404" name="Page 404" component={Page404}/>
            <Route path="500" name="Page 500" component={Page500}/>
        </Route>
    </Router>
);



ReactDOM.render(
    <Router routes={routes} history={hashHistory} />, document.getElementById('root')
);


