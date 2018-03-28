import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Experience from './components/pages/Experience/Experience';
import Blog from './components/pages/Blog/Blog';
import Contacts from './components/pages/Contacts/Contacts';
import Works from './components/pages/Works/Works';
import Skills from './components/pages/Skills/Skills';
import Footer from './components/UI/Footer/Footer';
import NavMobile from './components/UI/Navigation/NavMobile';
import Nav from './components/UI/Navigation/Nav';

import './App.css';


class App extends Component {
    render() {
        let routes = (
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about"  component={About}/>
                <Route path="/experience"  component={Experience}/>
                <Route path="/works" component={Works}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/skills" component={Skills}/>
                <Route path="/education" component={Blog}/>
                <Route path="/resume" component={Blog}/>
                <Route path="/contacts" component={Contacts}/>
            </Switch>);
        return (
            <div>
                <div className=" mobile">
                    <NavMobile/>
                </div>
                <div className="grid">
                    <div className="navDiv fullsize">
                        <Nav/>
                    </div>

                    <div className="contentDiv">
                        {routes}
                    </div>
                </div>
                <div className="footerDiv">
                    <Footer className={Footer}/>
                </div>
            </div>
        );
    }
}

export default App;
