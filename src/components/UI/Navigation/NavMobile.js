import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
// import './NavigationItem.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import Subheader from 'material-ui/Subheader';
import * as Colors from 'material-ui/styles/colors';

const titleStyles = {
    title: {
        cursor: 'pointer'

    },
    color:{
        color: Colors.redA200
    }
};

const style = {
    position: 'fixed',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: '0'
};

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
    return class SelectableList extends Component {
        // static propTypes = {
        //     children: PropTypes.node.isRequired,
        //     defaultValue: PropTypes.number.isRequired,
        // };

        componentWillMount() {
            this.setState({
                selectedIndex: this.props.defaultValue,
            });
        }

        handleRequestChange = (event, index) => {
            this.setState({
                selectedIndex: index,
            });
        };

        render() {
            return (
                <ComposedComponent
                    value={this.state.selectedIndex}
                    onChange={this.handleRequestChange}
                >
                    {this.props.children}
                </ComposedComponent>
            );
        }
    };
}

SelectableList = wrapState(SelectableList);



export default class DrawerUndockedExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <MuiThemeProvider>
                <AppBar   onClick={this.handleToggle} style={style} />

                <Drawer docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>

                    <MuiThemeProvider>
                        <SelectableList defaultValue={1}>
                            <Subheader>
                                <div className="Top-title">
                                    <h5> Hakob</h5>
                                    <h5> Sukiasyan</h5>
                                    <span className="brown-text light">Web Developer</span>
                                </div>
                            </Subheader>
                            <ListItem
                                to='/'
                                value={1}
                                leftAvatar={<i className="material-icons">account_balance</i>}
                                primaryText="Home"
                                containerElement={<Link to="/" />} onClick={this.handleClose}/>

                            <ListItem
                                value={2}
                                leftAvatar={<i className="material-icons">account_circle</i>}
                                primaryText="About"
                                containerElement={<Link to="/about" />} onClick={this.handleClose}/>
                            <ListItem
                                value={3}
                                leftAvatar={<i className="material-icons">show_chart</i>}
                                primaryText="Experience"
                                containerElement={<Link to="/experience" />} onClick={this.handleClose}/>
                            <ListItem
                                value={4}
                                leftAvatar={<i className="material-icons">insert_chart</i>}
                                primaryText="Skills"
                                containerElement={<Link to="/skills" />} onClick={this.handleClose}/>
                            <ListItem
                                value={5}
                                leftAvatar={<i className="material-icons">build</i>}
                                primaryText="Works"
                                containerElement={<Link to="/works" />} onClick={this.handleClose}/>
                            <ListItem
                                value={6}
                                leftAvatar={<i className="material-icons">chrome_reader_mode</i>}
                                primaryText="Blog"
                                containerElement={<Link to="/blog" />} onClick={this.handleClose}/>
                            <ListItem
                                value={7}
                                leftAvatar={<i className="material-icons">account_balance</i>}
                                primaryText="Education"
                                containerElement={<Link to="/education" />} onClick={this.handleClose}/>
                            <ListItem
                                value={8}
                                leftAvatar={<i className="material-icons">create</i>}
                                primaryText="Resume"
                                containerElement={<Link to="/resume" />} onClick={this.handleClose}/>
                            <ListItem
                                value={9}
                                leftAvatar={<i className="material-icons">contact_mail</i>}
                                primaryText="Contacts"
                                containerElement={<Link to="/contacts" />} onClick={this.handleClose}/>

                        </SelectableList>
                    </MuiThemeProvider>
                </Drawer>
            </MuiThemeProvider>
        );
    }
}